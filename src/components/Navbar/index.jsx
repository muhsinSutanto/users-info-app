import React from "react";
import { NavLink } from "react-router-dom";
import { NAV_LIST } from "@/utils/const";

const Navbar = () => {
   return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center">
               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Family Card
               </span>
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
               <ul
                  data-testid="nav-list"
                  className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
               >
                  {NAV_LIST.map((nav, idx) => (
                     <li key={idx}>
                        <NavLink
                           to={nav.route}
                           className={({ isActive, isPending }) =>
                              isActive ? "text-violet-500" : "text-white"
                           }
                        >
                           {nav.value}
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
