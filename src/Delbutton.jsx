import React, { useState } from 'react'

function Delbutton({checkedVal,listTodo,setListtodo}) {
  
  return (
   <button className='delbtn' onClick={()=>{
      const narray=listTodo.filter((item,index)=>checkedVal[index]==false);
      setListtodo(narray)
     }
   }>
    Delete
   </button>
  )
}

export default Delbutton
