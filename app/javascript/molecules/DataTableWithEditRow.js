import React, {useEffect} from 'react'
import {Field, useField, useForm} from 'react-final-form'
import {useFieldArray} from 'react-final-form-arrays'
import TextFieldField from "../atoms/TextFieldField"
import useCrud from "../hooks/useCrud"
import AutoCompleteField from "../atoms/AutoCompleteField";
import UneditableTextField from "../atoms/UneditableTextField";
import { OnChange } from 'react-final-form-listeners'

const DataTableWithEditRow = ({laboratories}) => {
  const {data: products, status} = useCrud('products')
  const {fields} = useFieldArray('sale_details_attributes')
  const {change} = useForm()

  const calculateTotalAmount = sale_details => {
    let total = 0
    sale_details?.map((value)=> {
      const _total = eval(value.final_price * value.quantity) || 0
      total += _total
      value.total = _total
    })
    change('total_amount', total)
  }

  if(status !== 'success') return null

  return (
    <div className='mb-6'>
      <AutoCompleteField
        name='product_id'
        options={products}
        label='Productos'
        noOptionsText='Seleccione un producto'
        boxClassName='mb-6 py-3'
        onChange={item => {
          const existItem = fields.value?.find(value=> value.id === item.id)
          if(!existItem)
            fields.push(
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
        {fields.map((name, index)=>(
          <tr className='gap-6 border-gray-500 border-2' key={index}>
            <Field name='id' component='input' className='hidden' />
            <td><UneditableTextField name={`${name}.name`}/></td>
            <td><AutoCompleteField name={`${name}.laboratory_id`} options={laboratories}/></td>
            <td><UneditableTextField name={`${name}.suggested_price`}/></td>
            <td><TextFieldField name={`${name}.final_price`}/></td>
            <td><UneditableTextField name={`${name}.stock`}/></td>
            <td><UneditableTextField name={`${name}.presentation`}/></td>
            <td><UneditableTextField name={`${name}.expiration_date`}/></td>
            <td><TextFieldField name={`${name}.quantity`}/></td>
            <OnChange name='sale_details_attributes'>
              {(value) => calculateTotalAmount(value)}
            </OnChange>
            <td><UneditableTextField name={`${name}.total`}/></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
export default DataTableWithEditRow