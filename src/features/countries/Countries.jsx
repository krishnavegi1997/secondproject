import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countriesApi'
import { Link, Outlet } from 'react-router-dom'

function Countries() {
    const {isLoading,data}=useGetAllCountriesQuery()
    console.log(isLoading)
  return (
    <div className='container d-flex flex-wrap'>
      <div className='w-50'>
      <h1>Countries</h1>
        {
          isLoading && (
            <h4>Loading.....</h4>
          )
        }
        {
          !isLoading &&(
            data.map((country)=>{
               return(
                <li><Link to={country.name.common}>{country.name.common}</Link></li>
               )
            })
          )
        }
      </div>
       <div className='w-50'>
       <Outlet/>
       </div>
        
    </div>
  )
}

export default Countries