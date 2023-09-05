import React, { useState } from 'react'

function Table() {
    const[search,setSearch]=useState('')
    const[user,setUser]=useState([])
    const[data,setData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        location:"",
        number:""
    })
   
    function handleInput(e){
        e.preventDefault()
      setData({...data,[e.target.name]:e.target.value})
    }
    function Adduser(){
        setUser([...user,data])
    }
    function sorting(){
        var tem=[...user]
        tem.sort((a,b)=>{return a>b? +1:-1});
       setUser([...tem])
      }
  return (
    <div>
        <div>
         
            <input type='text' placeholder='Enter FirstName' name='firstname' onChange={handleInput}  /><br/>
            <input type='text' placeholder='Enter LastName' name='lastname' onChange={handleInput}  /><br/>
            <input type='email' placeholder='Enter Email' name='email'onChange={handleInput}  /><br/>
            <input type='text' placeholder='Enter Place' name='location'onChange={handleInput}  /><br/>
            <input type='number' placeholder='Enter Number' name='number'onChange={handleInput}  /><br/>
            <button onClick={()=>{Adduser()}}>AddUser</button>
         
        </div>
        <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>{sorting()}}>sort</button>
        </div>
      
        <table>
            <thead>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Place</th>
                <th>number</th>
            </thead>
            <tbody>
                {
                     user.filter((d)=>
                     d.firstname.toLowerCase().includes(search.toLowerCase())).map((u)=>{
                       return(
                        <tr>
                            <th>{u.firstname}</th>
                            <th>{u.lastname}</th>
                            <th>{u.email}</th>
                            <th>{u.location}</th>
                            <th>{u.number}</th>
                        </tr>
                       )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table