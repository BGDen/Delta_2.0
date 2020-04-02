import React from 'react';

export function Navigation (props){
  // console.log(props);
  return(
    <nav className="navbar navbar-light bg-light">
      
      <a className="navbar-brand" href="#">Delta 2.4</a>

      <div className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </nav>
  )
}