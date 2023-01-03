import { NavLink} from 'react-router-dom';
import logo from '../../images/Logo.png';
import { useState } from 'react';

function NavBar() {
    const [isActive, setisActive] = useState(false)
    
    return (
        <div>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink className="navbar-item" to='/'>
                        <img src= {logo} width="112" height="28" alt='Logo Buscophoto'/>
                    </NavLink>
                    <h1 className="title is-4 pt-4" >Buscophoto</h1>
                    <a 
                    onClick={() => {
                        setisActive(!isActive)
                      }}
                    role="button" 
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className  ="navbar-end">
                        <NavLink className="navbar-item" to='/'>Home</NavLink>
                        <NavLink className="navbar-item" to='/search'>Search</NavLink>
                        <NavLink className="navbar-item" to='/favorite'>Favorite Photos</NavLink>
                    </div>    
                </div>
            </nav>
      </div>
    );
  }
  
  export default NavBar;