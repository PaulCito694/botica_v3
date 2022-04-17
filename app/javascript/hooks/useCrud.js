import {useMutation, useQuery, useQueryClient} from "react-query";
import React from "react";
import axios from "axios";

const fetchRecords = (url) => axios.get(`/admin/${url}`).then(response => response.data)
const createRecord = (values, url) => axios.post(`/admin/${url}`,values)
const deleteRecord = (id_brand, url) => axios.delete(`/admin/${url}/${id_brand}`)
const updateRecord = (values, url) => axios.put(`/admin/${url}/${values.id}`,values)

const useCrud = (url) => {
  const queryClient = useQueryClient()

  const {data, status} = useQuery(['records', url],() => fetchRecords(url), {refetchOnWindowFocus: false})
  const {mutate: deleteMutate} = useMutation(['delete', url], (id_brand) => deleteRecord(id_brand, url), {
    onSuccess: () => queryClient.invalidateQueries(['records', url])
  })
  const {mutate: updateMutate} = useMutation(['update', url], (values) => updateRecord(values, url), {
    onSuccess: () => queryClient.invalidateQueries(['records', url])
  })

  const {mutateAsync: createMutate, status: createStatus} =  useMutation(['create', url], values => createRecord(values, url),{
    onSuccess: () => queryClient.invalidateQueries(['records', url])
  })

  return {deleteMutate, updateMutate, createMutate, createStatus, data, status}
}

export default useCrud
