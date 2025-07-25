import React, { useState } from 'react'
import Context from './Context'


export default function Input(props) {
  const [inputval, setInputVal] = useState('')
  
  function handleinputChange(e) {
    setInputVal(e.target.value)
  }

  function handleAdd() {
    if (inputval == '') {
      console.log('Enter something')
    }
    else {
      props.onClickbtn(inputval)
      setInputVal('')
    }
  }
  
  return (
    
    <div className='inputdiv'>
      <h1>ToDo List</h1>
      <input type='text' placeholder='Enter Here...?' value={inputval} onChange={handleinputChange} />
      <button className='addbtn' onClick={handleAdd}>ADD</button>
      <Context/>
    </div>
    
  )
}
