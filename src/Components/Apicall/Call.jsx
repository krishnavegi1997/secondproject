import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Call = () => {
 var [countries,setCountries]=useState([])
 useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/todos`)
  .then(res=>setCountries(res.data))
 },[])

  return (
    <div>
      {
        countries.map((c)=>{
          return(
            <div>
            <li>{c.id}</li>
            <li>{c.title}</li>
            </div>
          )
        })
      }
    </div>
  )
}

export default Call
