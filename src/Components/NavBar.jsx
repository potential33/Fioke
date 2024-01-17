import {React, useState} from 'react';
import { NavLink } from 'react-router-dom';
import menu from './menu.svg';
import search from './search.svg';
import  Sidebar from './sidebar.jsx';

const NavBar = ()  => {
	const [isOpen, setIsopen] = useState(true);
	return (
		<div>
			<nav>
				<div className="nav-items">
					<div className="sidi">
				<Sidebar />
				    </div>
                    <img src={menu}/>
                
                    <div className="logo">
                        <p>Lumenus</p>
                    </div>
                 <div className="sbar">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search"
      />
      </div>
      
    
    <ul>
         <li>Product</li>
         <li>Account</li>
          <li>Contact</li>
          <li>Orders</li>
          
    </ul>
                </div>
                
			</nav>
		</div>
	);
};

export default NavBar;
