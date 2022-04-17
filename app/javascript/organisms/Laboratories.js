import React from "react";
import Crud from "../molecules/Crud";

const Laboratories = ({setOpenLaboratoryModal}) => {
  return (
    <Crud
      setOpenModal={setOpenLaboratoryModal}
      url='laboratories'
    />
  )
}

export default Laboratories
