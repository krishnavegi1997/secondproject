import React, { useEffect } from 'react'
import axios from 'axios'
function Todolist() {
    useEffect(()=>{
         axios.get('https://restcountries.com/v3.1/all').then((res)=>{console.log(res.data)})
    },[])
  return (
    <div>
     
    </div>
  )
}

export default Todolist