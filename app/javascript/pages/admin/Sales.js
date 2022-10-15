import React, {useState} from 'react'
import AppLayout from '../../templates/AppLayout'
import Brands from "../../organisms/Brands"
import Categories from "../../organisms/Categories"
import Laboratories from "../../organisms/Laboratories"
import {Form} from "react-final-form"
import TextFieldField from "../../atoms/TextFieldField"
import AutoCompleteField from "../../atoms/AutoCompleteField"
import useCrud from "../../hooks/useCrud"
import DataTable from "../../molecules/DataTable"
import CustomMaterialMenu from "../../molecules/CustomMaterialMenu"
import Button from "../../atoms/Button"
import Add from "@mui/icons-material/Add"
import {Alert, Snackbar} from "@mui/material"
import {mix, required, isPrice } from "../../validations/Validations"

const filterFunction = (item, filterText) => {
  const names =  item.name?.toLowerCase().includes(filterText.toLowerCase())
  const location = item.location?.toLowerCase().includes(filterText.toLowerCase())
  return names + location
}

const Products = () =>  {
  const [record, setRecord] = useState(null)
  const [openBrandModal, setOpenBrandModal] = useState(false)
  const [openCategoryModal, setOpenCategoryModal] = useState(false)
  const [openLaboratoryModal, setOpenLaboratoryModal] = useState(false)
  const {data: products, status, deleteMutate, updateMutate, createMutate} = useCrud('products')

  const columns = [
    {name: 'Nombre', selector: (row) => row.name, width: '300px',},
    {name: 'Codigo', selector: (row) => row.code, width: '100px',},
    {name: 'Ubicacion', selector: (row) => row.location, width: '100px',},
    {name: 'Componentes', selector: (row) => row.components, width: '300px',},
    {name: 'Por Mayor', selector: (row) => row.wholesale_price, width: '100px',},
    {name: 'Por Menor', selector: (row) => row.retail_price, width: '100px',},
    {name: 'Laboratorio', selector: (row) => row.laboratory?.name, width: '200px',},
    {name: 'Categoria', selector: (row) => row.category?.name, width: '200px',},
    {name: 'Marca', selector: (row) => row.brand?.name, width: '200px',},
    {
      name: 'Opciones',
      cell: (row) => <CustomMaterialMenu
        size="small"
        row={row}
        onDeleteRow={(id) => {
          if (confirm("Seguro que deseas eliminar el registro?"))
            deleteMutate(id)
        }}
        onUpdateRow={onUpdate}
      />,
      allowOverflow: true,
      button: true,
      width: '55px',
    }
  ]

  const onUpdate = (values) => setRecord(values)


  const onSubmit = async (values) => {
    try{
      record ? updateMutate(values) : createMutate(values)
      setRecord(null)
    }catch (err){
      //console.debug(err)
    }
  }

  if (status !== 'success') return null
  return (
    <AppLayout
      title="Catalogo de productos editado por carlos"
    >
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Catalogo de productos
        {openBrandModal && <Brands setOpenBrandModal={setOpenBrandModal}/>}
        {openCategoryModal && <Categories setOpenCategoryModal={setOpenCategoryModal}/>}
        {openLaboratoryModal && <Laboratories setOpenLaboratoryModal={setOpenLaboratoryModal}/>}
      </h2>
      <div className="py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <Form
              onSubmit={onSubmit}
              initialValues={record}
              render={({handleSubmit, form: {restart}}) => (
                <form onSubmit={handleSubmit} className='p-4 '>
                  <div className='mb-6 '>
                    <div className='flex justify-center mb-4 gap-6'>
                      <Button label='Crear producto' type='submit' endIcon={<Add/>}/>
                      <Button label='Cancelar'  color='warning' onClick={restart}/>
                    </div>
                  </div>
                  <DataTable
                    data={products.data}
                    columns={columns}
                    filterFunction={filterFunction}
                    className='bg-slate-400'
                  />
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
