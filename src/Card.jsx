import React, { useState } from 'react'
import Input from './Input'


export default function Card() {

const[list,setList]=useState([])


  return (
    <div>
      {list}
      
     <ul>
      
        {list.map((item,key)=>(<li key={key}>

            {item}
        </li>))}

        
     </ul>
    </div>
  )
}
