import React, {useState} from 'react'
import AppLayout from '../../templates/AppLayout'
import Brands from "../../organisms/Brands"
import Categories from "../../organisms/Categories"
import Laboratories from "../../organisms/Laboratories"
import {Form} from "react-final-form"
import TextFieldField from "../../atoms/TextFieldField"
import AutoCompleteField from "../../atoms/AutoCompleteField"
import useCrud from "../../hooks/useCrud"
import CustomMaterialMenu from "../../molecules/CustomMaterialMenu"
import Button from "../../atoms/Button"
import {required } from "../../validations/Validations"
import DataTableWithEditRow from "../../molecules/DataTableWithEditRow";
import arrayMutators from "final-form-arrays";
import UneditableTextField from "../../atoms/UneditableTextField";
import {useNavigate} from "react-router-dom";

const filterFunction = (item, filterText) => {
  const names =  item.name?.toLowerCase().includes(filterText.toLowerCase())
  const location = item.location?.toLowerCase().includes(filterText.toLowerCase())
  return names + location
}

const NewSale = () =>  {
  const navigate = useNavigate()
  const [record, setRecord] = useState(null)
  const [openBrandModal, setOpenBrandModal] = useState(false)
  const [openCategoryModal, setOpenCategoryModal] = useState(false)
  const [openLaboratoryModal, setOpenLaboratoryModal] = useState(false)
  const {create} = useCrud('sales')
  const {mutateAsync: createMutate} = create({onSuccess: () => navigate('/ventas')})
  const {data: document_types = []} = useCrud('document_types')
  const {data: laboratories = []} = useCrud('laboratories')

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

  return (
    <AppLayout
      title="Catalogo de productos editado por carlos"
    >
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Nueva venta
        {openBrandModal && <Brands setOpenBrandModal={setOpenBrandModal}/>}
        {openCategoryModal && <Categories setOpenCategoryModal={setOpenCategoryModal}/>}
        {openLaboratoryModal && <Laboratories setOpenLaboratoryModal={setOpenLaboratoryModal}/>}
      </h2>
      <div className="py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <Form
              onSubmit={createMutate}
              mutators={{
                ...arrayMutators
              }}
              initialValues={{
                series: 'prod',
                correlative: '001',
                legend: 'Treinta nuevos soles con 50 centavos',
                total_amount: 0
            }}
              subscription={{values: true}}
              render={({handleSubmit})=>(
                <form onSubmit={handleSubmit} className='m-4'>
                  <div className='flex flex-row gap-6 mb-4'>
                    <TextFieldField name='series' label='Serie' validate={required()}/>
                    <TextFieldField name='correlative' label='Correlativo' validate={required()}/>
                    <AutoCompleteField
                      name='document_type_id'
                      label='Tipo de documento'
                      validate={required()}
                      options={document_types}
                      boxClassName='py-3'
                    />
                    <TextFieldField name='document_number' label='Numero de documento' validate={required()}/>
                  </div>
                  <div className='flex flex-row justify-end gap-6'>
                    <UneditableTextField inputClassName='border border-solid border-black rounded-md py-3 px-1' name='legend' label='Legenda' validate={required()}/>
                    <UneditableTextField inputClassName='border border-solid border-black rounded-md py-3 px-1' name='total_amount' label='Total' validate={required()}/>
                  </div>
                  <DataTableWithEditRow laboratories={laboratories}/>
                  <div className='flex flex-row justify-center'>
                    <Button type='submit'>Guardar venta</Button>
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

export default NewSale
