import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLazyGetAllBooksQuery, useUpdateBookMutation } from '../../services/booksApi'

function UpdateBook() {
    const [prefetch]=useLazyGetAllBooksQuery()
    const[updateBookDetails]=useUpdateBookMutation()
    const {state} =useLocation()
    const[selectedBook,setSelectedBook]=useState({
        title:'',
        author:'',
        id:''
    })
    useEffect(()=>{
        setSelectedBook({...state})
    },[state])
    function UpdateBook(){
        updateBookDetails(selectedBook).then(()=>{
           prefetch()
        })
    }
  return (
    <div>
        {
            state &&(
                <div>
                <input type="text" value={selectedBook.title} onChange={(e)=>{setSelectedBook({...selectedBook,title:e.target.value})}}/><br/>
                <input type="text" value={selectedBook.author} onChange={(e)=>{setSelectedBook({...selectedBook,author:e.target.value})}}/><br/>
                <button onClick={()=>{UpdateBook()}}> Add Book</button><br/>
                 </div>
            )
        }
    </div>
  )
}

export default UpdateBook