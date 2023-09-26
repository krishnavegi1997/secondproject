import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Books() {
    const[isFlag,setFlag]=useState(false)
   const[books,SetBooks] =useState([])
   const [selectedBook,setSelectedBook]=useState(null)
  const[newbook,setNewBook]= useState({
    title:'',
    author:''
   })
    useEffect(()=>{
       getBooks()
    },[])
    function getBooks(){
        axios.get('http://localhost:4000/books')
        .then((res)=>{SetBooks(res.data)})
        .catch((err)=>console.log(err))
    }
    function addnewbook(){
        axios.post('http://localhost:4000/books',newbook).then((res)=>{
            getBooks()
        })
    }
    function deletebook(id){
    axios.delete('http://localhost:4000/books/'+id).then(()=>{
        getBooks()
    })
    
    }
    function editbook(book){
    setSelectedBook({...book})
      setFlag(true)
    }
    function updateBook(){
        axios.put('http://localhost:4000/books/'+selectedBook.id,selectedBook).then(()=>{
            getBooks();
            setFlag(false)
        })
    }
  return (
    <div className='mybox'>
        <h1>Books</h1>
        <div>
        {
            !isFlag &&(
                <div>
                <input type="text" placeholder='Title' onChange={(e)=>{setNewBook({...newbook,title:e.target.value})}} /><br/>
                <input type="text" placeholder='author' onChange={(e)=>{setNewBook({...newbook,author:e.target.value})}}/><br/>
                <button onClick={()=>{addnewbook()}}>AddNewBook</button>
            </div>
            )
        }
       {
        isFlag && (
            <div>
            <input type="text" placeholder='Title' value={selectedBook.title} onChange={(e)=>{setSelectedBook({...selectedBook,title:e.target.value})}}/><br/>
             <input type="text" placeholder='author' value={selectedBook.author} onChange={(e)=>setSelectedBook({...selectedBook,author:e.target.value})}/><br/>
             <button onClick={()=>{updateBook()}}>Update</button>
        </div>
        )
       }
     </div>
       <ul id='books'>
        {
            books.length>0 && books.map((book)=>{
                  return<li>
                   <h5>{book.id}. {book.title}</h5>
                   <h5>{book.author.toUpperCase()}</h5> 
                   <button onClick={()=>{deletebook(book.id)}} className='btn btn-danger'>Delete</button>&nbsp;
                   <button onClick={()=>{editbook(book)}} className='btn btn-primary' >Edit</button>
                    </li>
            })
        }
       </ul>
    </div>
  )
}

export default Books