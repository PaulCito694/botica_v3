import {Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar} from "@mui/material";
import {Form} from "react-final-form";
import TextFieldField from "../atoms/TextFieldField";
import {required} from "../validations/Validations";
import React from "react";
import DataTable from "../molecules/DataTable";
import CustomMaterialMenu from "./CustomMaterialMenu";
import BasicForm from "./BasicForm";

const DialogCrud = ({
                      setOpenBrandModal,
                      onSubmit,
                      brand,
                      onDelete,
                      onUpdate,
    titleModal,
  data
}) =>{

  const columns = [
    {name: 'Nombre', selector: (row) => row.name,},
    {name: 'Descripcion', selector: (row) => row.description,},
    {
      cell: (row) => <CustomMaterialMenu
        size="small"
        row={row}
        onDeleteRow={onDelete}
        onUpdateRow={onUpdate}
      />,
      allowOverflow: true,
      button: true,
      width: '56px',
    }
  ]

  const filterFunction = (item, filterText) => {
    const names =  item.name?.toLowerCase().includes(filterText.toLowerCase())
    const descriptions = item.description?.toLowerCase().includes(filterText.toLowerCase())
    return names + descriptions
  }

  return (<Dialog
    open={true}
    onClose={() => setOpenBrandModal(false)}
    maxWidth='md'
    fullWidth
  >
    <DialogTitle> {titleModal} </DialogTitle>
    <DialogContent>
        <BasicForm initialValues={{
            name: brand?brand.name:null,
            description: brand?brand.description:null,
            id: brand?brand.id:null
        }} onSubmit={onSubmit} data={data} filterFunction={filterFunction} columns={columns} />
    </DialogContent>
    <DialogActions>
    </DialogActions>
  </Dialog>)
}

export default DialogCrud
