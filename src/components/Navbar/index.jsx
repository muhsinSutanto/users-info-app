import React from "react";
import { NavLink } from "react-router-dom";
import { NAV_LIST } from "@/utils/const";

const Navbar = () => {
   return (
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="flex items-center">
               <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Family Card
               </span>
            </a>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
               <ul
                  data-testid="nav-list"
                  class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
               >
                  {NAV_LIST.map((nav) => (
                     <li>
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
