import React, { useState } from 'react'
import { useAddBookMutation, useLazyGetAllBooksQuery } from '../../services/booksApi'


function Addbook() {
    const [newbook,setNewbook]=useState({title:'',author:''})
            
    const [addNewBook] = useAddBookMutation()
    const [refetchBooks]=useLazyGetAllBooksQuery()
    function addbook(){
          addNewBook(newbook).then(()=>{
            refetchBooks()
          })
          
  } 
    return (
    <div>
       <div>Addbook</div>
       <div>
        <input type="text" onChange={(e)=>{setNewbook({...newbook,title:e.target.value})}}/><br/>
        <input type="text" onChange={(e)=>{setNewbook({...newbook,author:e.target.value})}}/><br/>
        <button onClick={()=>{addbook()}}>Add Book</button><br/>
       </div>
    </div>
   
  )
}

export default Addbook