import React, { useEffect, useState } from 'react'
import './data.css'
import axios from 'axios'
function Data() {
    const[books,setBooks]=useState([])
    const[data,setData]=useState(
        {
            name:'',
            email:'',
            college:'',
            place:''
        }
    )
    useEffect(()=>{
        axios.get(' http://localhost:8000/data').then((res)=>{setBooks(res.data)}).catch((err)=>{console.log(err)})
    },[])
    function handleChange(e){
        e.preventDefault()
      setData({...data,[e.target.name]:e.target.value})
    }
    function adduser(){
        setBooks([...books,data])
    }
  return (
       <div>
        <div>
            <h1>CRUD OPERATIONS</h1>
            <input type="text" name='name' onChange={handleChange}/><br/>
            <input type="email"  name='email' onChange={handleChange}/><br/>
            <input type="text"  name='college' onChange={handleChange} /><br/>
            <input type="text"  name='place' onChange={handleChange}/><br/><br/>
            <button className='btn btn-secondary' onClick={()=>{adduser()}}>AddUser</button><br/><br/>
        </div>
    <div>
       <table>
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>College</th>
            <th>Place</th>
            <th>Actions</th>
        </thead>
        <tbody>
           
                {
                    books.length>0 && books.map((book,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                               <td>{book.name}</td>
                               <td>{book.email}</td>
                               <td>{book.college}</td>
                               <td>{book.place}</td>
                               <td>
                               <button className='btn btn-primary'>Edit</button>&nbsp;
                                <button className='btn btn-danger'>Delete</button>
                                
                                </td>
                            </tr>
                            
                        )
                    })
                }
            
        </tbody>
       </table>
       </div>
    </div>
  )
}

export default Data