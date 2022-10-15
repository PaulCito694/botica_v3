import React from "react";
import {Button as MaterialButton, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            padding: '0 8 0 8',
            whiteSpace:'nowrap',
            border: `2px solid black`,
            borderRadius: '0',
            color: 'black',
            '&:hover': {
              border: `2px solid black`,
              backgroundColor: 'rgba(0,0,0,.04)',
            }
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            padding: '0 8 0 8',
            whiteSpace:'nowrap',
            backgroundColor: 'black',
            borderRadius: '0',
            color: 'white',
            '&:hover': {
              backgroundColor: 'black',
            }
          },
        },
        {
          props: { variant: 'text' },
          style: {
            padding: '0 8 0 8',
            whiteSpace:'nowrap',
            borderRadius: '0',
            color: 'black',
            '&:hover': {
              backgroundColor: 'white',
            }
          },
        },
      ],
    },
  },
});


const Button = ({variant='contained', children, ref, onClick= ()=>null, className, type }) =>{
  return(
    <ThemeProvider theme={theme}>
      <MaterialButton
        className={className}
        onClick={onClick}
        variant={variant}
        ref={ref}
        type={type}
      >
        {children}
      </MaterialButton>
    </ThemeProvider>
  )
}
export default Button
