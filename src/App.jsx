import React, { useState, useEffect, createContext, useContext, useRef } from 'react'
import Input from './Input'

export default function App() {

  const creatingContext = createContext();

  const [listTodo, setListtodo] = useState([])
  const count = useRef(listTodo.length)


  const addhandler = (v) => {
    const a = listTodo.concat(v)
    setListtodo(a)
    console.log(listTodo)
  }

  useEffect(() => {
    console.log(listTodo.length)
    count.current = count.current + 1;
    //No of changes in listtodoArray(including add or delete both counts)
    console.log(count.current)
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
    <>
      <creatingContext.Provider value={count}>
        <div className='main'>

          <Input onClickbtn={addhandler} />
          <ul>
            {listTodo.map((item, index) => (
              <li key={index}>{item}<button className='delbtn' onClick={() => (handleDel(index))}>Delete</button></li>
            ))}
          </ul>

          <h2>No of things to do:{listTodo.length}</h2>

        </div>
      </creatingContext.Provider>
    </>
  )

}
export { creatingContext };

