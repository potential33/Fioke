import {React, useState} from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const sidebarItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/products',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button type="button" onClick={toggleSidebar}>Toggle Sidebar</button>
      {isOpen && (
        <div className="cola">     
   <ul>
        {sidebarItems.map(item => (
          <li key={item.name}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
        </div>
      )}
    </div>
  );
}
export default Sidebar;