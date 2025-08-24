import React from 'react'
import { createContext } from 'react'

function CheckBox({ onChange,checked }) {


  return (
    <input type='checkbox' checked={!!checked} onChange={onChange}  />
  )
}

export default CheckBox
