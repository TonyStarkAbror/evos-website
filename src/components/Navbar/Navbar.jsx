import React from "react";
import { StyledNavbar } from "./Navbar.style";

const Navbar = () => {
  return (
    <StyledNavbar className="container">
      <div className="logo">EVOS</div>
      <ul>
        <li className="active">main</li>
        <li>baranches</li>
        <li>vacancies</li>
        <li>news</li>
        <li>abaut us</li>
        <li>contacts</li>
      </ul>
      <div className="action">
        <button className="qr"><h4>QR app</h4></button>
        <button className="basket">28 000 so'm</button>
        {/* buttonla tugadi */}
        <div className="lan">
          <img src="	https://evos.uz/images/svg/ru.svg" alt="" />
          <h3>^</h3>
   </div>
   {/*  */}
   <div className="odamcha">
    <svg className="cok" width="24" height="24" viewBox="0 0 24 25" fill="#000" xmlns="http://www.w3.org/2000/svg">
   <path d="M12 6.5C13.1 6.5 14 7.4 14 8.5C14 9.6 13.1 10.5 12 10.5C10.9 10.5 10 9.6 10 8.5C10 7.4 10.9 6.5 12 6.5ZM12 16.5C14.7 16.5 17.8 17.79 18 18.5H6C6.23 17.78 9.31 16.5 12 16.5ZM12 4.5C9.79 4.5 8 6.29 8 8.5C8 10.71 9.79 12.5 12 12.5C14.21 12.5 16 10.71 16 8.5C16 6.29 14.21 4.5 12 4.5ZM12 14.5C9.33 14.5 4 15.84 4 18.5V20.5H20V18.5C20 15.84 14.67 14.5 12 14.5Z" fill="#000"></path>
   </svg>
   </div>
      </div>

    </StyledNavbar>
  );
};

export default Navbar;
