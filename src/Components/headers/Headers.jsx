import React from 'react'
import { Link } from 'react-router-dom'

function Headers() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Details</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/login' class="nav-link active" aria-current="page" href="#">Login</Link>
        </li>
        <li class="nav-item">
          <Link to='/userdetails' class="nav-link active" href="#">UserDetails</Link>
        </li>
        <li class="nav-item">
          <Link to='/user' class="nav-link active" href="#">User</Link>
        </li>
        <li class="nav-item">
          <Link to='/about' class="nav-link active" href="#">About</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Headers