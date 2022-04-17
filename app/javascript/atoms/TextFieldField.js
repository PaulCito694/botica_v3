import React from 'react'
import {TextField} from "@mui/material";
import {useField} from "react-final-form";

const TextFieldField = ({name, label, className, validate, ...props}) =>{
  const {input, meta: {error, touched}} = useField(name,{validate})
  return <div className='grid'>
    <label>{label}</label>
    <TextField className={className} {...input} {...props}/>
    {touched && <span className='text-red-500'>{error}</span>}
  </div>
}

export default TextFieldField
