import React from 'react'
import { LuPackagePlus, LuList, LuTrendingUp } from "react-icons/lu";
import { TbHistoryToggle } from "react-icons/tb";
import { CgFormatLeft } from "react-icons/cg";
import IconLink from '../IconLink';

const HomeMenu = () => {
  return (
    <div className='flex-1 flex flex-col gap-6 px-4'>
        <h1 className="font-medium text-xl mb-4">HOME</h1>
        <div className='flex-1 flex flex-wrap gap-16 px-4'>
          <IconLink customClass="bg-red-700 p-4 rounded shadow-lg w-1/4 flex flex-col items-center justify-center text-center flex flex-col items-center justify-center text-center" title='Agregar Producto' href='/addProduct'>
            <LuPackagePlus size={120}/>
          </IconLink>
          <IconLink customClass="bg-red-700 p-4 rounded shadow-lg w-1/4 flex flex-col items-center justify-center text-center" title='Categorias' href='/'>
            <CgFormatLeft size={120}/>
          </IconLink>
          <IconLink customClass="bg-red-700 p-4 rounded shadow-lg w-1/4 flex flex-col items-center justify-center text-center" title='Productos Agotándose' href='/'>
            <LuList size={120}/>
          </IconLink>
          <IconLink customClass="bg-red-700 p-4 rounded shadow-lg w-1/4 flex flex-col items-center justify-center text-center" title='Productos Más Vendidos' href='/'>
            <LuTrendingUp size={120}/>
          </IconLink>
          <IconLink customClass="bg-red-700 p-4 rounded shadow-lg w-1/4 flex flex-col items-center justify-center text-center" title='Historial de Ventas' href='/'>
            <TbHistoryToggle size={120}/>
          </IconLink>
        </div>
    </div>
  )
}

export default HomeMenu