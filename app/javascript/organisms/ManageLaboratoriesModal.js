import React from "react";
import Crud from "../molecules/Crud";

const ManageLaboratoriesModal = ({setOpenLaboratoryModal}) => {
  return (
    <Crud
      setOpenModal={setOpenLaboratoryModal}
      url='laboratories'
      titleModal='Gestion de Laboratorios'
    />
  )
}

export default ManageLaboratoriesModal
