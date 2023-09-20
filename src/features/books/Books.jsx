import React from 'react';
import { useDeleteBookMutation, useGetAllBooksQuery, useLazyGetAllBooksQuery } from '../../services/booksApi';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Books() {
          const navigate=useNavigate()
    const { isLoading, data } = useGetAllBooksQuery();
    const[deleteBookByID]=useDeleteBookMutation()
    const [prefetchBooks]=useLazyGetAllBooksQuery()
    function deleteBook(id){
      deleteBookByID(id).then(()=>{
        prefetchBooks()
      })
}

  return (
    <div>
      <h1>Books</h1>
      <Link to='addbook'>
        <button>+Add Book</button>
      </Link>
      {isLoading && <h4>Loading...</h4>}
      <div className='d-flex flex-wrap'>
        <div className='w-50'>
          <ul>
            {!isLoading &&
              data.map((book) => (
                <li>
                  <h3>{book.title}</h3>
                  <h3>{book.author}</h3>
                  <button onClick={()=>{deleteBook(book.id)}}>Delete</button>
                   <button onClick={()=>{navigate("updatebook",{state:book})}}>Upadate Book</button>
                </li>
              ))}
          </ul>
        </div>
        <div className='w-50'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Books;
