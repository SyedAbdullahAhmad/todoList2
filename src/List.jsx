import React, { useState } from 'react'
import './index.css'
import CheckBox from './CheckBox'
function List({ listtodo, handleDel }) {

  const [checkedVal, setCheckedVal] = useState(false)


  return (
    <>
      {listtodo.map((items, index) => (
        <li key={index}><CheckBox defaultChecked={checkedVal} onChange={() => { setCheckedVal((state) => !state) }} />
          {items}
          <button className='delbtn' onClick={() => handleDel(index)}>Delete</button>
        </li>
      ))}
    </>
  )
}

export default List
