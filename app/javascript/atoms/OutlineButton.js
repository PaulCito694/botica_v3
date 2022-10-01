import React from "react";
import {Button as MaterialButton} from "@mui/material";



const Button = ({onClick, variant='contained', children, endIcon, type='button', classes, className, color='primary'}) =>{
  return(
    <MaterialButton
      variant={variant}
      onClick={() => onClick ? onClick(true) : null}
      endIcon={endIcon}
      type={type}
      classes={{root: 'border-black border-solid text-black border-2'}}
      className={className}
      color={color}
    >
      {children}
    </MaterialButton>
  )
}
export default Button