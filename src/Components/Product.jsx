import React, { useState } from 'react'

const Product = () => {
  var[search,setSearch]=useState('')
  console.log(search)
  var [data,setData]=useState([
    {
      fullname:'saikrishna',
      lastname:'Vegi',
      email:'saivegi89@gmail.com',
      phone:'9959179311',
      location:'Hyd'
  },
  {
      fullname:'Ramu',
      lastname:'Adabala',
      email:'ramuadabala@gmail.com',
      phone:'9908046275',
      location:'pune'
  },
  {
      fullname:'Vinay',
      lastname:'Adabala',
      email:'vinayadabala@gmail.com',
      phone:'7997070943',
      location:'Goa'
  },
  {
      fullname:'Lakshman',
      lastname:'Adabala',
      email:'lakshmanadabala@gmail.com',
      phone:'7997070943',
      location:'Hyd'
  },

  ])
  function sorting(){
    var tem=[...data]
    tem.sort((a,b)=>{return a>b? +1:-1});
   setData([...tem])
  }
  return (
    <div>
      <input type='text'
       value={search} 
       onChange={(e)=>setSearch(e.target.value)}
       />
      <button onClick={()=>{sorting()}}>Sort</button>
       <table>
        <thead>
          <th>FullName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
        </thead>
        <tbody>
            {
              data.filter((d)=>
              d.fullname.toLowerCase().includes(search.toLowerCase())||
              d.lastname.toLowerCase().includes(search.toLowerCase())||
              d.email.toLowerCase().includes(search.toLowerCase())||
              d.phone.toLowerCase().includes(search.toLowerCase())||
              d.location.toLowerCase().includes(search.toLowerCase())
              ).map((s,i)=>{
                return(
                  <tr key={i}>
                  <td>{s.fullname}</td>
                  <td>{s.lastname}</td>
                  <td>{s.email}</td>
                  <td>{s.phone}</td>
                  <td>{s.location}</td>
                  </tr>
                )
              })
            }
        </tbody>
       </table>
    </div>
  )
}

export default Product

