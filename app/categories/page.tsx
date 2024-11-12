import CategoriesForm from '@/components/CategoriesPage/CategoriesForm';
import requiredLogin from '@/utils/functions/requiredLogin';
import React from 'react'

async function categories() {
  const user = await requiredLogin(); 
  if (!user) return;

  return (
    <div>
        <h1>Categorias</h1>
        <CategoriesForm/>
    </div>
  )
}

export default categories