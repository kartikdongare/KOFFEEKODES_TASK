import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar">
        <img src={logo} alt="" loading="lazy" className="logo-img"/>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
          <li className="home">
            HOME
            <div className="nav-bottom"></div>
          </li>
          <li className="work">
            WORK
            <div className="nav-bottom"></div>
            </li>
          <li className="about">
            ABOUT
            <div className="nav-bottom"></div>
            </li>
          {/* <li className="contact">CONTACT</li> */}
        
          <li className="career">
            CAREER
            <div className="nav-bottom"></div>
            </li>
        <li className="dedicate" style={{border:0}}>
          DEDICATE
          <div className="nav-bottom"></div>
          </li>
        <li>
        <button type="button" className="contact-btn">CONTACT</button>
        </li>
        <li>
        
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fa fa-times" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-align-justify" aria-hidden="true"></i>
        )}
      </button>
    </div>
  );
};

export default NavBar;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Router>
//       <div>
//         <nav className="bg-white border-gray-200 dark:bg-gray-900">
//           <div className="flex flex-wrap items-center justify-between max-w-screen-xl md:px-20 mx-auto mt-3.5 px-3">
//             <a
//               href="/"
//               className="flex items-center space-x-3 rtl:space-x-reverse"
//             >
//               <img
//                 src={logo}
//                 alt=""
//                 loading="lazy"
//                 className="logo-img"
//                 width="200px"
//                 height="100px"
//               />
//             </a>
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-default"
//               aria-expanded={isMenuOpen ? "true" : "false"}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//             <div
//               className={`${
//                 isMenuOpen ? "block" : "hidden"
//               } w-full md:block md:w-auto`}
//               id="navbar-default"
//             >
//               <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li className="mx-4">
//                   <Link
//                     to="/favorite"
//                     className="block px-2 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                     aria-current="page"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li className="hidden mx-4 md:block">|</li>
//                 <li className="mx-4">
//                   <Link
//                     to="/user-profile"
//                     className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                     aria-current="page"
//                   >
//                     Work
//                   </Link>
//                 </li>
//                 <li className="hidden mx-4 md:block">|</li>
//                 <li className="mx-4">
//                   <Link
//                     to="/user-profile"
//                     className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                     aria-current="page"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li className="hidden mx-4 md:block">|</li>
//                 <li className="mx-4">
//                   <Link
//                     to="/user-profile"
//                     className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                     aria-current="page"
//                   >
//                     Career
//                   </Link>
//                 </li>
//                 <li className="hidden mx-4 md:block">|</li>
//                 <li className="mx-4">
//                   <Link
//                     to="/user-profile"
//                     className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                     aria-current="page"
//                   >
//                     Dedicate
//                   </Link>
//                 </li>
//                 <button
//                   type="button"
//                   className="px-6 py-2.5 mb-2 font-medium text-white bg-teal-500 rounded-lg text-md focus:outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//                 >
//                   CONTACT
//                 </button>
//                 {/* Add other menu items here */}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </Router> // Close BrowserRouter
//   );
// };

// export default Navbar;
