import {useMutation, useQuery, useQueryClient} from "react-query";
import React from "react";
import axios from "axios";

const fetchRecords = (url) => axios.get(`/admin/v1/${url}`).then(response => response.data)
const fetchRecord = (idRecord, url) => axios.get(`/admin/v1/${url}/${idRecord}`).then(response => response.data)
const createRecord = (values, url) => axios.post(`/admin/v1/${url}`,values)
const deleteRecord = (idRecord, url) => axios.delete(`/admin/v1/${url}/${idRecord}`)
const updateRecord = (values, url) => axios.put(`/admin/v1/${url}/${values.id}`,values)

const useCrud = (url) => {
  const queryClient = useQueryClient()

  const {data: records, status: statusRecords} = useQuery(['records', url],() => fetchRecords(url), {refetchOnWindowFocus: false})
  const getRecord = (id) => useQuery(['record', url],() => fetchRecord(id, url), {refetchOnWindowFocus: false})
  const {mutate: deleteMutate} = useMutation(['delete', url], (idRecord) => deleteRecord(idRecord, url), {
    onSuccess: () => queryClient.invalidateQueries(['records', url])
  })

  const update = (params) => useMutation(['update', url], values => updateRecord(values, url),{
    onSuccess: () => {
      params?.onSuccess && params.onSuccess()
      queryClient.invalidateQueries(['records', url])
    }
  })

  const create = (params) => useMutation(['create', url], values => createRecord(values, url),{
    onSuccess: () => {
      params?.onSuccess && params.onSuccess()
      queryClient.invalidateQueries(['records', url])
    }
  })

  return {deleteMutate, update, create, records, statusRecords, getRecord}
}

export default useCrud
