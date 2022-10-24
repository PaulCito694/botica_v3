import DialogCrud from "./DialogCrud";
import React, {useState} from "react";
import useCrud from "../hooks/useCrud";

const Crud = ({setOpenModal, url, titleModal}) => {
  const {data, status, deleteMutate, updateMutate, create} = useCrud(url)
  const {mutateAsync: createMutate} = create()
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
  if (status !== 'success') return null

  return (<DialogCrud
      onDelete={deleteMutate}
      brand={record}
      onSubmit={onSubmit}
      setOpenBrandModal={setOpenModal}
      onUpdate={onUpdate}
      titleModal={titleModal}
      data={data}
    />
  )
}

export  default Crud
