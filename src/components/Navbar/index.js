import React from 'react';
import data from './data';
// import './style.scss';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.labe}</Link>
            {item.children && (
              <ul>
                {item.children.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to}>{item.labe}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
export default Navbar;
