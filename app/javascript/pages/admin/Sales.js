import React, {Fragment, useState} from 'react'
import AppLayout from '../../templates/AppLayout'
import {Form} from "react-final-form"
import useCrud from "../../hooks/useCrud"
import Button from "../../atoms/Button"
import Add from "@mui/icons-material/Add"
import {Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import useToggle from "../../hooks/useToggle";
import {useNavigate} from "react-router-dom";

const Row = ({sale, index}) => {
  const [open, toggleOpen] = useToggle()

  return <Fragment key={index}>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell>
        <IconButton size='small' onClick={()=>toggleOpen()}>
          {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
        </IconButton>
      </TableCell>
      <TableCell>{sale.created_at}</TableCell>
      <TableCell>{sale.document_number}</TableCell>
      <TableCell>{sale.total_amount}</TableCell>
      <TableCell>{sale.legend}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Box sx={{margin: 1}}>
            <div>Detalle de venta</div>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Laboratorio</TableCell>
                  <TableCell>Cantidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sale.sale_details_attributes.map((saleDetail, saleDetailIndex)=>
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
  </Fragment>
}

const Products = () =>  {
  const [record, setRecord] = useState(null)
  const {data: sales = [], status, deleteMutate} = useCrud('sales')
  const navigate = useNavigate()

  if (status !== 'success') return null
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
              onSubmit={()=>null}
              initialValues={record}
              render={({handleSubmit, form: {restart}}) => (
                <form onSubmit={handleSubmit} className='p-4 '>
                  <Table className='mb-6'>
                    <TableHead>
                      <TableRow>
                        <TableCell/>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Numero de documento</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Legenda</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sales.map( (sale, index) =>
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
