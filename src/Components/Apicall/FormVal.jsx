import React, { useEffect, useState } from 'react'

function FormVal() {
    var [users,setUsers]=useState([])
    var [user,setUser]=useState({
        firstname:'',
        lastname:'',
        email:'',
        date:'',
        number:''
})
    var firstnameRef=React.useRef();
    var lastnameRef=React.useRef();
    var emailRef=React.useRef();
    var dateRef=React.useRef();
    var numberRef=React.useRef();
    var buttonRef=React.useRef()
    
    useEffect(()=>{
        firstnameRef.current.focus()
    },[])
    function CheckEnter1(e){
        if(e.key==="Enter"){
         lastnameRef.current.focus()
        }
    }
    function CheckEnter2(e){
        if(e.key==="Enter"){
            emailRef.current.focus()
        }
    }
    function CheckEnter3(e){
        if(e.key==="Enter"){
            dateRef.current.focus()
        }
    }
    function CheckEnter4(e){
        if(e.key==="Enter"){
            numberRef.current.focus()
        }
    }
    function CheckEnter5(e){
    if(e.key==="Enter"){
        buttonRef.current.focus()
    }
    }
    function handleInput(e){
         setUser({...user,[e.target.name]:e.target.value})
    }
    function Adduser(){
        setUsers([...users,user])
    }
  return (
    <div>
        <div>
        <input type="text" placeholder='FirstName' ref={firstnameRef} onKeyUp={(e)=>{CheckEnter1(e)}} onChange={handleInput} name='firstname'/><br/>
        <input type="text" placeholder='LastName' ref={lastnameRef} onKeyUp={(e)=>{CheckEnter2(e)}}  onChange={handleInput} name='lastname'/><br/>
        <input type="email" placeholder='Email' ref={emailRef} onKeyUp={(e)=>{CheckEnter3(e)}}  onChange={handleInput} name='email'/><br/>
        <input type="date" placeholder='Date' ref={dateRef} onKeyUp={(e)=>{CheckEnter4(e)}}  onChange={handleInput} name='date'/><br/>
        <input type="number" placeholder='PhoneNumber' ref={numberRef} onKeyUp={(e)=>{CheckEnter5(e)}}  onChange={handleInput} name='number'/><br/>
    </div>
    <div>
        <button ref={buttonRef} onClick={()=>{Adduser()}}>Add user</button>
    </div>
         <table border='2' width='100%'>
            <thead>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Date of joining</th>
                <th>Phone number</th>
            </thead>
            <tbody>
               
                    {
                        users.map((u)=>{
                            return(
                            <tr>
                               <td >{u.firstname}</td> 
                               <td >{u.lastname}</td> 
                               <td >{u.email}</td> 
                               <td >{u.date}</td> 
                               <td >{u.number}</td> 
                            </tr>
                            )
                        })
                    }
                
            </tbody>
         </table>
    </div>
   
  )
}

export default FormVal