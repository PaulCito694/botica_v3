import React from 'react'
import LogoBotica from '../images/logo_Botica_QF.png'
import Search from "../molecules/Search";
import {AccountCircle, Menu} from '@mui/icons-material';
import {IconButton} from "@mui/material";

const AdminHeader = ({menuOnClick}) => {
  return(
    <>
      <div className=' py-4 justify-between border-b-2 border-gray-300 sha'>
        <div className='mx-4 flex flex-row gap-8'>
          <IconButton onClick={menuOnClick} >
            <Menu/>
          </IconButton>
          <img src={LogoBotica} width='200' height='200'/>
          <Search/>
          <div className='flex items-center'>
            <AccountCircle/>
          </div>
        </div>
      </div>
    </>
  )

}

export default AdminHeader