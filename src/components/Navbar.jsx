import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo2 from "../assets/logo3.png";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleToggleMenu = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const closeMenu = () => {
    setShowMediaIcons(false);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo2} className="h-7 md:h-16" alt="Programming Glore" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NavLink to='./contact-us'
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              
              Contact us
            </NavLink>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={showMediaIcons ? "true" : "false"}
              onClick={handleToggleMenu}
            >
              <div className="hamburger-menu">
                <GiHamburgerMenu />
              </div>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              showMediaIcons ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <li className="dropdown submenu relative group">
                  <NavLink
                    
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Apps
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-black md:bg-white p-4 border rounded" onClick={closeMenu}>
                    <li title="Taxi Booking App">
                      <NavLink to="/taxi-app" >Taxi Booking App</NavLink>
                    </li>
                    <li title="Food Ordering App">
                      <NavLink to="/food-app">Food Ordering App</NavLink>
                    </li>
                    <li title="Saloon Booking App">
                      <NavLink to="/saloon-app">Saloon Booking App</NavLink>
                    </li>
                    <li title="Real Estate App">
                      <NavLink to="/estate-app">Real Estate App</NavLink>
                    </li>
                  </ul>
                </li>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <li className="dropdown submenu relative group">
                  <NavLink
                    
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-black md:bg-white p-4 border rounded" onClick={closeMenu}>
                    <li title="Web Designing and Development Company">
                      <NavLink to="/web-development">
                        Web Design & Development
                      </NavLink>
                    </li>
                    <li title="Ecommerce Website Development">
                      <NavLink to="/ecom-app">E-commerce Solution</NavLink>
                    </li>
                    <li title="App Development Company">
                      <NavLink to="/app-development">App Development</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/web-app">Web Application</NavLink>
                    </li>
                  </ul>
                </li>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <li className="dropdown submenu relative group">
                  <NavLink
                    
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Service
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-black md:bg-white p-4 border rounded" onClick={closeMenu}>
                    <li title="Web Designing and Development Company">
                      <NavLink to="/mobile-app">
                        Mobile App Development
                      </NavLink>
                    </li>
                    <li title="Ecommerce Website Development">
                      <NavLink to="/elearning-app">E-Learning Solution</NavLink>
                    </li>
                    <li title="App Development Company">
                      <NavLink to="/online-store">Online Store Development</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/uiux-design">UI/UX Design Application</NavLink>
                    </li>
                  </ul>
                </li>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <li className="dropdown submenu relative group">
                  <NavLink
                    
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Industries
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-black md:bg-white p-4 border rounded" onClick={closeMenu}>
                    <li title="Web Designing and Development Company">
                      <NavLink to="/education-training">
                        Education Training
                      </NavLink>
                    </li>
                    <li title="Ecommerce Website Development">
                      <NavLink to="/healthcare-wellness">Healthcare & Wellness</NavLink>
                    </li>
                    <li title="App Development Company">
                      <NavLink to="/social-networking">Social Networking</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/travel-tourism">Travel and Toursim</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/real-estate">Real Estate</NavLink>
                    </li>
                  </ul>
                </li>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <li className="dropdown submenu relative group">
                  <NavLink
                    
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Technologies
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-black md:bg-white p-4 border rounded" onClick={closeMenu}>
                    <li title="Web Designing and Development Company">
                      <NavLink to="/technologies">
                       MERN
                      </NavLink>
                    </li>
                    <li title="Ecommerce Website Development">
                      <NavLink to="/technologies">Responsive Web Apps</NavLink>
                    </li>
                    <li title="App Development Company">
                      <NavLink to="/technologies">React Native</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/technologies">Reactjs/Nextjs</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/technologies">MongoDB/Firebase</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/technologies">Nodejs</NavLink>
                    </li>
                  </ul>
                </li>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <li className="dropdown submenu relative group">
                  <NavLink
                    
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Company
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-black md:bg-white p-4 border rounded" onClick={closeMenu}>
                    <li title="Web Designing and Development Company">
                      <NavLink to="/about">
                        About us
                      </NavLink>
                    </li>
                    <li title="Ecommerce Website Development">
                      <NavLink to="/contact-us">Contact us</NavLink>
                    </li>
                    <li title="App Development Company">
                      <NavLink to="/appdevelopment">Our Process</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/webapplication">Career</NavLink>
                    </li>
                  </ul>
                </li>
              </li>
              {/* <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <li className="dropdown submenu relative group">
                  <NavLink
                    onClick={closeMenu}
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Resources
                  </NavLink> */}
                  {/* <ul className="dropdown-menu fixed hidden group-hover:block z-50 transition duration-700 bg-white p-4 border rounded">
                    <li title="Web Designing and Development Company">
                      <NavLink to="/web-development">
                        Web Design & Development
                      </NavLink>
                    </li>
                    <li title="Ecommerce Website Development">
                      <NavLink to="/ecommerce">E-commerce Solution</NavLink>
                    </li>
                    <li title="App Development Company">
                      <NavLink to="/appdevelopment">App Development</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/webapplication">Web Application</NavLink>
                    </li>
                  </ul> */}
                {/* </li>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
