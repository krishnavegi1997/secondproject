import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Outlet, useParams } from 'react-router-dom'

function ApiDetails() {
    const {cname}=useParams();
    const [country,setCountry]=useState(null)
   useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/name/"+cname).then((res)=>setCountry({...res.data[0]}))
   },[cname])
    return (
        <div>
        <div className='border border-2 border-success p-5'>
           {
            country && (
                <>
                 <h1>{country.name.common}</h1>
                 <img src={country.flags.png}/>
                </>
               
            )
           }
        </div>
       
        <Outlet></Outlet>
        </div>
       
    )
}

export default ApiDetails