import React from 'react'
import ImageLink from '../ImageLink'
import AddProductImage from '@/utils/assets/AddProduct.png';

const HomeMenu = () => {
  return (
    <div className='flex-1 flex flex-col gap-6 px-4'>
        <h1 className="font-medium text-xl mb-4">HomeMenu</h1>
        <div className='flex-1 flex flex-wrap gap-16 px-4'>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
            <ImageLink href='/addProduct' alt='AddProduct' width={100} src={AddProductImage}/>
        </div>
    </div>
  )
}

export default HomeMenu