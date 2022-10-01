import React, {useEffect, useState} from 'react'
import {useField} from "react-final-form";
import CreatableSelect from 'react-select/creatable';
import useCrud from "../hooks/useCrud";
import Button from "./Button";
//import Add from "@mui/icons-material/Add";

const AutoCompleteField = ({name, label, className, validate, data = [], addButtonClick}) =>{
  const [value, setValue] = useState(null)
  const {input, meta: {error, touched}} = useField(name,{validate})
  const {createMutate, createStatus} = useCrud('brands')
  const options = [{id: '', name: 'Seleccione una opcion'}, ...data]

  const CreateOption= async (newValue)=>{
    const record = await createMutate({name: newValue})
    input.onChange(record.data.id)
    setValue(record.data)
  }
  useEffect(()=>setValue(options.find(((val)=>val.id === input.value)))
  , [input.value])

  if(data === undefined) return null

  return <div className='grid'>
    <label>
      {label}
      {addButtonClick && <Button
        onClick={() => addButtonClick(true)}
        //endIcon={<Add/>}
        classes={{endIcon:'!m-0'}}
        className='!ml-2 !mb-2'
      />}
    </label>
    <CreatableSelect
      isClearable
      isDisabled={createStatus === 'loading'}
      onChange={newValue => {
        input.onChange(newValue?.id)
        setValue(newValue)
      }}
      onCreateOption={CreateOption}
      options={options}
      value={value}
      getOptionLabel={item => item.name}
      getOptionValue={item => item.id}
      formatCreateLabel={inputValue => `Crear ${inputValue}`}
    />
    {touched && <span className='text-red-500'>{error}</span>}
  </div>
}

export default AutoCompleteField
