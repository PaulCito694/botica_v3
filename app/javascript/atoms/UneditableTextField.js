import React from 'react'
import {TextField} from "@mui/material";
import {useField} from "react-final-form";
import clsx from "clsx";

const UneditableTextField = ({name, label, className, inputClassName, validate, ...props}) =>{
  const {input, meta: {error, touched}} = useField(name,{validate})
  return <div className={clsx('grid', className)}>
    <label htmlFor={`${name}-input`} id={`${name}-label`} className="block font-bold mb-1 min-w-25">{label}</label>
    <span className={inputClassName}>{input.value}</span>
    {touched && <span className='text-red-500'>{error}</span>}
  </div>
}

export default UneditableTextField
