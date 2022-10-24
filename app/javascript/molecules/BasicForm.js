import TextFieldField from "../atoms/TextFieldField";
import {required} from "../validations/Validations";
import {Alert, Button, Snackbar} from "@mui/material";
import DataTable from "./DataTable";
import {Form} from "react-final-form";
import React from "react";

const BasicForm = ({onSubmit, initialValues, data, columns, filterFunction}) => {
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
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
                    {data && <DataTable
                        data={data}
                        columns={columns}
                        filterFunction={filterFunction}
                    />}
                </>
            )}
        />
    )
}

export default BasicForm