import React, {Fragment, useState} from 'react'
import AppLayout from '../../templates/AppLayout'
import {Form} from "react-final-form"
import useCrud from "../../hooks/useCrud"
import Button from "../../atoms/Button"
import {Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp, Edit, Delete} from "@mui/icons-material";
import useToggle from "../../hooks/useToggle"
import {useNavigate} from "react-router-dom"
import AlertDialog from "../../atoms/AlertDialog"

const Row = ({sale, index}) => {
  const {deleteMutate} = useCrud('sales')
  const [open, toggleOpen] = useToggle()
  const [idItemToDelete, setItemToDelete] = useState()
  const navigate = useNavigate()

  return <Fragment key={index}>
    <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
      <TableCell>
        <IconButton size='small' onClick={() => toggleOpen()}>
          {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
        </IconButton>
      </TableCell>
      <TableCell>{sale.created_at}</TableCell>
      <TableCell>{sale.document_number}</TableCell>
      <TableCell>{sale.total_amount}</TableCell>
      <TableCell>{sale.legend}</TableCell>
      <TableCell>
        <div className='flex flex-row gap-6'>
          <IconButton onClick={() => navigate(`/modificar-venta/${sale.id}`)}>
            <Edit/>
          </IconButton>
          <IconButton onClick={() => setItemToDelete(sale.id)}>
            <Delete/>
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={5}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Box sx={{margin: 1}}>
            <h2>Detalle de venta</h2>
            <Table className='sub-table' size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Laboratorio</TableCell>
                  <TableCell>Cantidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sale.sale_details_attributes.map((saleDetail, saleDetailIndex) =>
                  <TableRow key={saleDetailIndex}>
                    <TableCell>{saleDetail.product_name}</TableCell>
                    <TableCell>{saleDetail.laboratory_name}</TableCell>
                    <TableCell>{saleDetail.quantity}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
    {idItemToDelete && <AlertDialog
      title='Seguro que desea eliminar la venta?'
      message='Esta a punto de eliminar una venta, si continua, los datos de stock de los productos en antiguos reportes seran opsoletos y debera generar nuevos reportes'
      cancelOnClick={() => setItemToDelete(null)}
      acceptOnClick={() => {
        deleteMutate(idItemToDelete)
        setItemToDelete(null)
      }}
    />}
  </Fragment>
}

const Products = () => {
  const {records: sales = [], statusRecords} = useCrud('sales')
  const navigate = useNavigate()

  if (statusRecords !== 'success') return null
  return (
    <AppLayout
      title="Listado de Ventas"
    >
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Listado de ventas
      </h2>
      <div className="py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <Form
              onSubmit={() => null}
              render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} className='p-4 '>
                  <Table className='mb-6 table'>
                    <TableHead>
                      <TableRow>
                        <TableCell/>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Numero de documento</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Legenda</TableCell>
                        <TableCell>Acciones</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sales.map((sale, index) =>
                        <Row sale={sale} index={index}/>
                      )}
                    </TableBody>
                  </Table>
                  <div className='mb-6 '>
                    <div className='flex justify-center mb-4 gap-6'>
                      <Button onClick={() => navigate('/nueva-venta')}>
                        Nueva venta
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            >
            </Form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Products
