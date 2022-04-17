import React from "react";
import Crud from "../molecules/Crud";

const Brands = ({setOpenBrandModal}) => {
  return (
    <Crud
      setOpenModal={setOpenBrandModal}
      url='brands'
    />
  )
}

export  default Brands
