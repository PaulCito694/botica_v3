import Add from "@mui/icons-material/Add";
import React from "react";
import {Button as MaterialButton} from "@mui/material";

const Button = ({onClick, label, endIcon, type='button', classes, className, color='primary'}) =>{
  return(
    <MaterialButton
      variant='contained'
      onClick={() => onClick ? onClick(true) : null}
      endIcon={endIcon}
      type={type}
      classes={classes}
      className={className}
      color={color}
    >
      {label}
    </MaterialButton>
  )
}
export default Button
