import requiredLogin from '@/utils/functions/requiredLogin';
import React from 'react'

async function addProduct() {
  const user = await requiredLogin(); 
  if (!user) return;

  return (
    <div>addProduct</div>
  )
}

export default addProduct