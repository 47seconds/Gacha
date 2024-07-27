import React from "react";
import { NavLink } from "react-router-dom";

function SideBar({isSidebarVisible, toggleSidebar}) {
    const isPageActive = ({ isActive }) => isActive ? "dark:text-blue-700" : "";

    return (
        <div
            className={`absolute top-full mt-2 right-0 w-48 transition-all ${
                isSidebarVisible ? "block" : "hidden"
            } z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            id="navbar-default"
        >
            <div className="flex items-center order-2 space-x-3y rtl:space-x-reverse relative">
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <NavLink
                                to="/home"
                                className={(isActive) =>
                                    `relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700 group ${isPageActive(
                                        isActive
                                    )}`
                                }
                                onClick={toggleSidebar}
                            >
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={(isActive) =>
                                    `relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700 group ${isPageActive(
                                        isActive
                                    )}`
                                }
                                onClick={toggleSidebar}
                            >
                                About
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default SideBar;
