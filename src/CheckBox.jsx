import React from 'react'
import { createContext } from 'react'

function CheckBox({ defaultChecked, onChange }) {


  return (
    <input type='checkbox' onChange={onChange} defaultChecked={defaultChecked} />
  )
}

export default CheckBox
