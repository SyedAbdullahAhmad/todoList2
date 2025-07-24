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

  const handleDel = (index) => {

    // const nlist = [...listTodo.slice(0,index),[...listTodo.slice(index+1)]]
    // setListtodo(nlist)
    // const nList= listTodo.filter((list)=>{
    //   list!==item;
    //   setListtodo(nList)
    // })
    const n = listTodo.length;
    var nlist = [];
    for (let i = 0; i < n; i++) {
      if (listTodo[i] !== listTodo[index]) {
        nlist[i] = listTodo[i];
      }
    }
    setListtodo(nlist)
  }

  return (
    <div className='main'>

      <Input onClickbtn={addhandler} />
      <ul>
        {listTodo.map((item, index) => (
          <li key={index}>{item}<button className='delbtn' onClick={() => (handleDel(index))}>Delete</button></li>
        ))}
      </ul>


    </div>
  )
}
