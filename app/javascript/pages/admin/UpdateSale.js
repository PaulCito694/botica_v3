import React from 'react'
import useCrud from "../../hooks/useCrud"
import {useNavigate, useParams} from "react-router-dom";
import SaleForm from "../../organisms/SaleForm";

const UpdateSale = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {update, getRecord } = useCrud('sales')
  const {data: sale, status} = getRecord(id)
  const {mutateAsync: updateMutate} = update({onSuccess: () => navigate('/ventas')})

  if(status !== 'success') return null

  return <SaleForm mutate={updateMutate} sale={sale} buttonText='Actualizar venta'/>
}

export default UpdateSale
