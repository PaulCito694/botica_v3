import DialogCrud from "./DialogCrud";
import React, {useState} from "react";
import useCrud from "../hooks/useCrud";

const Crud = ({setOpenModal, url}) => {
  const {records, statusRecords, deleteMutate, update, create} = useCrud(url)
  const {mutateAsync: createMutate} = create()
  const {mutateAsync: updateMutate} = update()
  const [record, setRecord] = useState(null)

  const onUpdate = (values) => setRecord(values)

  const onSubmit = async (values) => {
    try{
      record ? updateMutate(values) : createMutate(values)
      setRecord(null)
    }catch (err){
      console.debug(err)
    }
  }
  if (statusRecords !== 'success') return null

  return (<DialogCrud
      onDelete={deleteMutate}
      brand={record}
      onSubmit={onSubmit}
      setOpenBrandModal={setOpenModal}
      onUpdate={onUpdate}
      data={records}
    />
  )
}

export  default Crud
