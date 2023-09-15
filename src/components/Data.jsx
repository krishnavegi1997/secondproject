import React, { useEffect, useState } from 'react';
import './data.css';
import axios from 'axios';

function Data() {
  const [books, setBooks] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [newbook, setNewBook] = useState({
    name: '',
    email: '',
    college: '',
    place: ''
  });

  useEffect(() => {
    getBooks();
  }, []);

  function getBooks() {
    axios.get('http://localhost:8000/data')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    setNewBook({ ...newbook, [e.target.name]: e.target.value });
  }

  function adduser() {
    axios.post('http://localhost:8000/data', newbook)
      .then(() => {
        getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteBook(id) {
    axios.delete(`http://localhost:8000/data/${id}`)
      .then(() => {
        getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function edituser(book) {
    setSelectedBook({ ...book });
    setEditFlag(true);
  }

  function updateuser() {
    axios.put(`http://localhost:8000/data/${selectedBook.id}`, selectedBook)
      .then(() => {
        setEditFlag(false);
        setSelectedBook(null);
        getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {(!editFlag) ? (
        <div>
          <h1>CRUD OPERATIONS</h1>
          <input type="text" name="name" value={newbook.name} onChange={handleChange} /><br />
          <input type="email" name="email" value={newbook.email} onChange={handleChange} /><br />
          <input type="text" name="college" value={newbook.college} onChange={handleChange} /><br />
          <input type="text" name="place" value={newbook.place} onChange={handleChange} /><br /><br />
          <button className="btn btn-secondary" onClick={adduser}>AddUser</button><br /><br />
        </div>
      ) : (
        <div>
          <h1>CRUD OPERATIONS</h1>
          <input type="text" name="name" value={selectedBook.name} onChange={(e) => setSelectedBook({ ...selectedBook, name: e.target.value })} /><br />
          <input type="email" name="email" value={selectedBook.email} onChange={(e) => setSelectedBook({ ...selectedBook, email: e.target.value })} /><br />
          <input type="text" name="college" value={selectedBook.college} onChange={(e) => setSelectedBook({ ...selectedBook, college: e.target.value })} /><br />
          <input type="text" name="place" value={selectedBook.place} onChange={(e) => setSelectedBook({ ...selectedBook, place: e.target.value })} /><br /><br />
          <button className="btn btn-secondary" onClick={updateuser}>Update</button><br /><br />
        </div>
      )}

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>College</th>
              <th>Place</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 && books.map((book, index) => (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.email}</td>
                <td>{book.college}</td>
                <td>{book.place}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => edituser(book)}>Edit</button>&nbsp;
                  <button className="btn btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Data;
