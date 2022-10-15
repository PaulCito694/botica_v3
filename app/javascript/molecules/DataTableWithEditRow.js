import React from 'react'
import {Form, Field} from 'react-final-form'
import {FieldArray} from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'
import TextFieldField from "../atoms/TextFieldField"
import useCrud from "../hooks/useCrud"
import AutoCompleteField from "../atoms/AutoCompleteField";
import UneditableTextField from "../atoms/UneditableTextField";

const DataTableWithEditRow = () => {
  const {data: products, status} = useCrud('products')

  if(status !== 'success') return null

  return (
    <Form
      onSubmit={()=>null}
      mutators={{
        ...arrayMutators
      }}
      render={({handleSubmit, form: { mutators: { push } }, values})=>(
        <form onSubmit={handleSubmit} className='m-4'>
          <AutoCompleteField
            name='product_id'
            options={products}
            label='Productos'
            noOptionsText='Seleccione un producto'
            boxClassName='mb-2'
            onChange={item => {
              const existItem = values.sale_details?.find(value=> value.id === item.id)
              if(!existItem)
                push(
                  'sale_details',
                  {
                    id: item.id,
                    name: item.name,
                    laboratory: item.laboratory?.name,
                    suggested_price: 50,
                    final_price: 50,
                    stock: 10,
                    presentation: 'Ampollas',
                    expiration_date: '2022-10-30',
                  }
                )
            }
          }
          />
          <table className='border-gray-500 border-2 w-full text-center'>
            <thead>
            <tr>
              <th>Nombre de producto</th>
              <th>Laboratorio</th>
              <th>Precio sugerido</th>
              <th>Precio final</th>
              <th>Stock</th>
              <th>Presentacion</th>
              <th>Fecha de vencimiento</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <FieldArray
              name='sale_details'
              render={({fields})=>(
                fields.map((name, index)=>(
                  <tr className='gap-6 border-gray-500 border-2' key={name}>
                    <Field name='id' component='input' className='hidden' />
                    <td><UneditableTextField name={`${name}.name`}/></td>
                    <td><UneditableTextField name={`${name}.laboratory`}/></td>
                    <td><UneditableTextField name={`${name}.suggested_price`}/></td>
                    <td><TextFieldField name={`${name}.final_price`}/></td>
                    <td><UneditableTextField name={`${name}.stock`}/></td>
                    <td><UneditableTextField name={`${name}.presentation`}/></td>
                    <td><UneditableTextField name={`${name}.expiration_date`}/></td>
                    <td><TextFieldField name={`${name}.quantity`}/></td>
                    <td><TextFieldField name={`${name}.total`}/></td>
                  </tr>
                ))
            )}/>
            </tbody>
            <span>{JSON.stringify(values, 0, 2)}</span>
          </table>
        </form>
      )}
    >
    </Form>
  )
}
export default DataTableWithEditRow