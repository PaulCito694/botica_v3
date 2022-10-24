import React from 'react'
import useCrud from "../../hooks/useCrud"
import {useNavigate} from "react-router-dom";
import SaleForm from "../../organisms/SaleForm";

const NewSale = () =>  {
  const navigate = useNavigate()
  const {create} = useCrud('sales')
  const {mutateAsync: createMutate} = create({onSuccess: () => navigate('/ventas')})

  return <SaleForm mutate={createMutate}/>
}

export default NewSale
