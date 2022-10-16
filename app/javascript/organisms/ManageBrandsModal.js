import React from "react";
import Crud from "../molecules/Crud";

const ManageBrandsModal = ({setOpenBrandModal}) => {
  return (
    <Crud
      setOpenModal={setOpenBrandModal}
      url='brands'
      titleModal='Gestion de Marcas'
    />
  )
}

export  default ManageBrandsModal
