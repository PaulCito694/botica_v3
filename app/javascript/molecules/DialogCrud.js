import {Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar} from "@mui/material";
import {Form} from "react-final-form";
import TextFieldField from "../atoms/TextFieldField";
import {required} from "../validations/Validations";
import React from "react";
import DataTable from "../molecules/DataTable";
import CustomMaterialMenu from "./CustomMaterialMenu";

const DialogCrud = ({
                      setOpenBrandModal,
                      onSubmit,
                      brand,
                      onDelete,
                      onUpdate,
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
    <DialogTitle>Gestion de Marcas</DialogTitle>
    <DialogContent>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: brand?brand.name:null,
          description: brand?brand.description:null,
          id: brand?brand.id:null
        }}
        render={({handleSubmit, form: {restart},submitSucceeded,submitFailed}) => (
          <>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <TextFieldField name='name' label='Nombre' validate={required()} className='mb-6'/>
                <TextFieldField name='description' label='Descripcion'/>
              </div>
              <div className='flex justify-center gap-4'>
                <Button type="submit" variant='contained'>Guardar</Button>
                <Button variant='outlined' onClick={restart}>Cancelar</Button>
              </div>
              <Snackbar
                open={submitSucceeded}
                autoHideDuration={3000}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                onClose={restart}
              >
                <Alert severity='success'>Creado correctamente</Alert>
              </Snackbar>
              <Snackbar
                open={submitFailed}
                autoHideDuration={3000}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
              >
                <Alert severity='error'>Ocurrio un error con la ultima accion</Alert>
              </Snackbar>
            </form>
            <DataTable
              data={data}
              columns={columns}
              filterFunction={filterFunction}
            />
          </>
        )}
      />
    </DialogContent>
    <DialogActions>
    </DialogActions>
  </Dialog>)
}

export default DialogCrud
