import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { LogoutButton, ProfileAfterLogin, DeleteUser } from "../components";
import { useSelector } from "react-redux";
import "../styles/headerAvatarTopbar.scss";

function Header() {
    const authStatus = useSelector((state) => state.userReducer.isLogin);
    // console.log(useSelector(state => state.userReducer.user.coverImageUrl));
    const fullName = useSelector((state) => state.userReducer.user.fullName);
    const username = useSelector((state) => state.userReducer.user.username);
    const email = useSelector((state) => state.userReducer.user.email);

    const profileAvatarHandler = () => {
        setToggleProfileBar(!toggleProfileBar);
    };

    const navItems = [
        {
            name: "Home",
            url: "/home",
            active: true,
        },
        // {
        //   name: 'Login',
        //   url: '/login',
        //   active: !authStatus
        // },
        // {
        //   name: 'Signup',
        //   url: '/signup',
        //   active: !authStatus
        // },
    ];

    const isPageActive = ({ isActive }) =>
        isActive ? "md:dark:text-blue-700" : "";

    // State to manage visibility
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isProfileVisible, SetIsProfileVisible] = useState(false);

    // Function to toggle visibility
    const handleToggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleToggleProfile = () => {
        SetIsProfileVisible(!isProfileVisible);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src={Logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Gacha
                    </span>
                </Link>
                <div
                    className={`ransition-all ${
                        isSidebarVisible ? "block" : "hidden"
                    } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/home"
                                className={(isActive) =>
                                    `relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group ${isPageActive(
                                        isActive
                                    )}`
                                }
                            >
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group"
                            >
                                About
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className="relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group"
                            >
                                Services
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pricing"
                                className="relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group"
                            >
                                Pricing
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group"
                            >
                                Contact
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {authStatus && (
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={isProfileVisible}
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                            onClick={handleToggleProfile}
                        >
                            <span className="sr-only">Open user menu</span>
                            <ProfileAfterLogin />
                        </button>
                        <div
                            className={`transition-all ${
                                isProfileVisible ? "block" : "hidden"
                            } z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown`}
                        >
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">
                                    {fullName}
                                </span>
                                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                                    {username}
                                </span>
                            </div>
                            <ul
                                className="py-2"
                                aria-labelledby="user-menu-button"
                            >
                                <li>
                                    <NavLink
                                        to="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Settings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Earnings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        {<LogoutButton />}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {!authStatus && (
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/signup"
                                    className={(isActive) =>
                                        `relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group ${isPageActive(
                                            isActive
                                        )}`
                                    }
                                >
                                    Sign up
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={(isActive) =>
                                        `relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group ${isPageActive(
                                            isActive
                                        )}`
                                    }
                                >
                                    Login
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
                <button
                    data-collapse-toggle="navbar-user"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-user"
                    aria-expanded={isSidebarVisible}
                    onClick={handleToggleSidebar}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Header;
