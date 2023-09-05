import React, { useEffect, useState } from 'react'
import './Api.css'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
const Apicall = () => {
    const [country,setCountry]=useState([])
    const [search,setSearch]=useState('')
    console.log(country)
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/all`)
        .then((res)=>{setCountry(res.data)})
        
    },[])
    function sorting(){
        var tem=[...country];
        tem.sort((a,b)=>{return a>b? +1:-1})
       setCountry([...tem])
    }
  return (
    <div >
        <div className='input-list'>
        <input type="text" placeholder='Search country.....' value={search} onChange={(e)=>setSearch(e.target.value)} />
         <button onClick={()=>{sorting()}}>Sort</button>
        </div>
     <div className='d-flex'>

     
     <div >
     {
        country.length>0 && country.filter((d)=>
        d.name.common.toLowerCase().includes(search.toLowerCase())).map((c,i)=>{
         return(
            <ul key={i}>
               <Link to={'apidetails/'+c.name.common}><li>{c.name.common}</li></Link> 
                 
            </ul>
            
         )
        })
      }
       </div>
      <div>
      <Outlet></Outlet>
      </div>
       
      </div>
   
    </div>
  )
}

export default Apicall
