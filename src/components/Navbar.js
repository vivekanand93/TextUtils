import React from 'react';
import PropTypes from 'prop-types';
import {link} from 'react-router-dom';


export default function Navbar(props) {
  return (
   <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  className="nav-link active" aria-current="page" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" href='/about'>{props.aboutText}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tools
          </a>
          <ul className="dropdown-menu" aria-label led by="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
      <div className="spinner-border text-primary"  role="status">
  <span className="visually-hidden">Loading...</span>
    </div>
 {/*    <div className="spinner-border text-secondary"  role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-border text-success"  role="status"> */}
      {/* <span className="visually-hidden">Loading...</span>
    </div> */}
    <div className="spinner-border text-danger"  role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-border text-warning"  role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-border text-info"  role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    {/* <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-border text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
</div> */}
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
         <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">toggle mode</label>
        </div>
    </div>
  </div>
</nav>
   </>
  )
}

Navbar.prototype = {title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired};
Navbar.defaultProps = {title:'set your title', aboutText:'enter about here'};