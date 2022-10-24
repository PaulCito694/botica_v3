import React from 'react'
import AppLayout from '../templates/AppLayout'
import {Form} from "react-final-form"
import TextFieldField from "../atoms/TextFieldField"
import AutoCompleteField from "../atoms/AutoCompleteField"
import useCrud from "../hooks/useCrud"
import Button from "../atoms/Button"
import {required } from "../validations/Validations"
import DataTableWithEditRow from "../molecules/DataTableWithEditRow";
import arrayMutators from "final-form-arrays";
import UneditableTextField from "../atoms/UneditableTextField";

const SaleForm = ({mutate, sale, buttonText='Guardar venta'}) =>  {
  const {records: document_types = [], statusRecords: statusDocumentTypes} = useCrud('document_types')
  const {records: laboratories = [], statusRecords: statusLaboratories} = useCrud('laboratories')

  if (statusDocumentTypes !== 'success' || statusLaboratories !== 'success') return null

  return (
    <AppLayout
      title="Catalogo de productos editado por carlos"
    >
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Nueva venta
      </h2>
      <div className="py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <Form
              onSubmit={mutate}
              mutators={{
                ...arrayMutators
              }}
              initialValues={{
                series: 'prod',
                correlative: '001',
                legend: 'Treinta nuevos soles con 50 centavos',
                total_amount: 0,
                ...sale
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
                    <Button type='submit'>{buttonText}</Button>
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

export default SaleForm
