import React, {useState} from 'react'
import Header from "../organisms/Header"
import carousel_image_one from '../images/carousel/carousel_image_one.jpg'
import carousel_image_two from '../images/carousel/carousel_image_two.jpg'
import Button from "../atoms/Button"

const images = [carousel_image_one, carousel_image_two]

const Products = () =>{
  const [imageIndex, setImageIndex] = useState(0)
  return (
    <>
      <Header/>
      <div className='container mx-auto'>
        <div className='relative'>
          <Button></Button>
          <img src={images[imageIndex]}/>
            <label>Hola mundo</label>
        </div>
      </div>
    </>

  )
}

export default  Products