import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Krishna</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/books' class="nav-link active" >Books</Link>
        </li>
        <li class="nav-item">
          <Link to='/counter' class="nav-link active">Counter</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header