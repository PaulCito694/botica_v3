import React from "react";
import Crud from "../molecules/Crud";

const ManageCategoriesModal = ({setOpenCategoryModal}) => {
  return (
    <Crud
      setOpenModal={setOpenCategoryModal}
      url='categories'
      titleModal='Gestion de Categorias'
    />
  )
}

export default ManageCategoriesModal
