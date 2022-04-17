import React from "react";
import Crud from "../molecules/Crud";

const Categories = ({setOpenCategoryModal}) => {
  return (
    <Crud
      setOpenModal={setOpenCategoryModal}
      url='categories'
    />
  )
}

export default Categories
