import React from 'react';
import Hamburger from '../images/hamburger.svg';
import { Link } from 'react-router-dom';
const NavBar=()=>(
    <React.Fragment>
  
    <header id="mainHeader">
        <h1><span>L'</span>empreinte savoureuse</h1>
        <nav id="mainNav">
        <ul >
            <li><Link to='/' >Aceuil</Link></li>
                <li><Link to='/Expert'>Expert</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>

        </nav>
        <button id="menubt">
           <img src={Hamburger} alt="fermer/ouvrir le menu" />
        </button>
    </header>
 
    </React.Fragment>
)
export default NavBar
