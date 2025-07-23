import React, { useState } from 'react'

export default function Input(props) {
const[inputval,setInputVal]=useState('')

    function handleinputChange(e){
        setInputVal(e.target.value)
    }

    function handleAdd(){
    props.onClickbtn(inputval)
    setInputVal('')
    }
  return (
    <div>
      
      <input type='text' placeholder='Enter Here...?' value={inputval} onChange={handleinputChange}/>
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}
