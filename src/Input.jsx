import React, { useState, useRef, useEffect } from 'react'
// import Context from './Context'


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

  const handleFocus = useRef();
  useEffect(() => {
    handleFocus.current.focus();
  })

  return (

    <div className='inputdiv'>
      <h1>ToDo List</h1>
      <input type='text' placeholder='Enter Here...?' value={inputval} ref={handleFocus} onChange={handleinputChange} />
      <button className='addbtn' onClick={handleAdd}>ADD</button>
      {/* <Context /> */}
    </div>

  )
}
