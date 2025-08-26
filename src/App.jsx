import React, { useState, useEffect, useRef } from 'react'
import Input from './Input'
import List from './List'
import { CreatingContextProvider } from './Context'
import LoginPage from './LoginPage'
import { Link, Links, Navigate, useNavigate, Outlet } from 'react-router-dom'
import Delbutton from './Delbutton'
export default function App() {


  const [listTodo, setListtodo] = useState([])
  const [checkedVal,setCheckedVal]=useState([])

  useEffect(()=>{
    setCheckedVal(Array(listTodo.length).fill(false))
  },[listTodo.length])
  const count = useRef(listTodo.length)
  const navigate = useNavigate();
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

  // const handleDel = (index) => {
  //   {
  //      var narray=[]
       
  //      const nlist = listTodo.filter((_, i) => i !== index)
  //      setListtodo(nlist)
  //     }
  // }

  return (

    <CreatingContextProvider>

      <div className='main'>
        <div className='loginbtndiv'>
          <button className='btn' onClick={() => { navigate('/LoginPage') }}>Login</button>
          <button className='btn' onClick={() => { navigate('/SignupPage') }}>SignUp</button>
        </div>
        <Input onClickbtn={addhandler} />
        <Delbutton checkedVal={checkedVal} listTodo={listTodo} setListtodo={setListtodo}/>
        <ul>
          <List defaultChecked={checkedVal=>(val)} /*handleDel={handleDel}*/ listtodo={listTodo} checkedVal={checkedVal} setCheckedVal={setCheckedVal} />
        </ul>

        <h2>No of things to do:{listTodo.length}</h2>


      </div>

    </CreatingContextProvider>
  )

}
