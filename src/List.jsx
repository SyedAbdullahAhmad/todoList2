import React, { useState } from 'react'
import './index.css'
import CheckBox from './CheckBox'
function List({ listtodo, handleDel, checkedVal,setCheckedVal}) {

  //  const [checkedVal,setCheckedVal]=useState(Array(listtodo.length).fill(false))
   
  return (
    <>
      {listtodo.map((items, index) => (
        <li key={index}><CheckBox checked={!!checkedVal[index]} onChange={ (event) => {
         
         const updataed=[...checkedVal]
         updataed[index]=event.target.checked;
         setCheckedVal(updataed)
          console.log(checkedVal)
          
        } } />
          {items}
        
        </li>
      //   {(checkedVal[index]==true) ?<button className='delbtn' onClick={() => handleDel(index)}>Delete</button> :null}
       ))}
    </>
  )
}

export default List
