import React, { useState, useEffect } from 'react'
import Input from './Input'

export default function App() {

  const [listTodo, setListtodo] = useState([])

  const addhandler = (v) => {
    const a = listTodo.concat(v)
    setListtodo(a)
    console.log(listTodo)
  }

  useEffect(() => {
    console.log(listTodo.length)
  })

  const handleDel = (a) => {
    const nlist = listTodo.filter((item) => {
      item.index !== a
    })
    setListtodo(nlist)
  }

  return (
    <div className='main'>

      <Input onClickbtn={addhandler} />
      <ul>
        {listTodo.map((item, key) => (
          <li key={key}>{item}<button className='delbtn' onClick={() => (handleDel(item.key))}>Delete</button></li>
        ))}
      </ul>


    </div>
  )
}
