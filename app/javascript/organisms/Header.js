import React from 'react'
import LogoBotica from '../images/logo_Botica_QF.png'
import SplitButton from "../atoms/SplitButton";
import Search from "../molecules/Search";
/*import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';*/
import Button from "../atoms/Button";

const Header = () => {
  return(
    <>
      <div className=' py-4 justify-between border-b-2 border-gray-300 sha'>
        <div className='mx-4 flex flex-row gap-8'>
          <img src={LogoBotica} width='200' height='200'/>
          <SplitButton variant='text'>
            Categorías
          </SplitButton>
          <Search/>
          <div className='flex items-center'>
            {/*<AddShoppingCartIcon/>*/}
          </div>
          <div className='gap-4 flex flex-row'>
            <Button variant='outlined'>Iniciar Sesion</Button>
            <Button variant='contained'>Regístrate</Button>
          </div>
        </div>
      </div>
    </>
  )

}

export default Header