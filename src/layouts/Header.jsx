import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { LogoutButton, ProfileAfterLogin, SideBar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../features/user/user.slice.js";
import Cookies from "js-cookie";
import "../styles/headerAvatarTopbar.scss";

function Header() {
    const authStatus = useSelector((state) => state.userReducer.isLogin);
    const fullName = useSelector((state) => state.userReducer.user.fullName);
    const username = useSelector((state) => state.userReducer.user.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        const cookieUserData = Cookies.get("userData");

        if (cookieUserData) {
            const parsedData = JSON.parse(cookieUserData);
            dispatch(userLogin(parsedData));
        }
    }, []);

    const handleToggleProfile = () => {
        setIsProfileVisible(!isProfileVisible);
    };

    const handleToggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const isPageActive = ({ isActive }) =>
        isActive ? "md:dark:text-blue-700" : "";

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
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
                    className="hidden md:flex md:w-auto md:order-1"
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
                    </ul>
                </div>
                {authStatus && (
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
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
                            className={`absolute top-full mt-2 right-0 w-48 transition-all ${
                                isProfileVisible ? "block" : "hidden"
                            } z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown"
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
                                className="rounded-xl"
                                aria-labelledby="user-menu-button"
                            >
                                {/* <li>
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
                                </li> */}
                                <li>
                                    <LogoutButton toggleProfilebar={handleToggleProfile}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {!authStatus && (
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
                        <Link to="/signup">
                            <button
                                    type="button"
                                    className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-4"
                                >
                                    Sign Up
                            </button>
                        </Link>
                        <Link to="/signin">
                            <button
                                type="button"
                                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                )}
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isSidebarVisible}
                    onClick={handleToggleSidebar}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
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
                <SideBar isSidebarVisible={isSidebarVisible} toggleSidebar={handleToggleSidebar}/>
            </div>
        </nav>
    );
}

export default Header;
