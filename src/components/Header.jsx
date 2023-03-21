import React, {useState} from 'react';
import {Link, NavLink,useNavigate} from "react-router-dom";


    function Header(){
        const [value,setValue] = useState('')
    const navigate = useNavigate()
    return (
       <div id='header'>
           <div className="container">
               <div className='header'>
                   <div className='header-logo'>LOGO</div>
                      <nav className='header-nav'>
                          <NavLink to={'/'}>Home</NavLink>
                          <NavLink to={'/popular-films'}>contact</NavLink>
                          <NavLink to={'/about'}>about me</NavLink>
                      </nav>
               <div className='buttons2'>
                   <input onChange={(event) => setValue(event.target.value)}  type="text"/>
                 <button
                     onClick={() => navigate(`/movies/search-result/${value}`)}
                     className='buttons1'>search</button>
               </div>
               </div>
           </div>
       </div>
    )
}

export default Header;