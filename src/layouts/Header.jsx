import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { LogoutButton, ProfileAfterLogin, DeleteUser } from "../components";
import { useSelector } from "react-redux";
import '../styles/headerAvatarTopbar.scss'

function Header() {
    const [toggleProfileBar, setToggleProfileBar] = useState(false);
    const authStatus = useSelector((state) => state.userReducer.isLogin);
    // console.log(useSelector(state => state.userReducer.user.coverImageUrl));
    const fullName = useSelector((state) => state.userReducer.user.fullName);
    const username = useSelector((state) => state.userReducer.user.username);
    const email = useSelector((state) => state.userReducer.user.email);
    const coverImage = useSelector((state) => state.userReducer.user.coverImageUrl);
    const avatar = useSelector(state => state.userReducer.user.avatarUrl);

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

    const isPageActive = ({ isActive }) => (isActive ? "bg-red-400" : "");
    return (
        <header className="w-full h-16 bg-gray-400 flex justify-around items-center fixed top-0 mb-16">
            <nav className="w-full h-full flex justify-around items-center">
                <div className="h-full">
                    <Link to="/">
                        <img src={Logo} className="h-full p-2 rounded-2xl" />
                    </Link>
                </div>
                <div className="h-full w-1/2 flex">
                    <ul className="h-full w-full flex justify-around items-center">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.url}
                                        className={(isActive) =>
                                            `${isPageActive(
                                                isActive
                                            )} p-2 rounded-2xl font-medium text-xl text-white hover:bg-red-400`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>
                <div className="w-1/6"></div>
                <div className="h-full">
                    {!authStatus && (
                        <div className="h-full flex items-center">
                            <NavLink
                                to="/signup"
                                className={(isActive) =>
                                    `${isPageActive(
                                        isActive
                                    )} p-2 rounded-2xl font-medium text-xl text-white hover:bg-red-400`
                                }
                            >
                                Sign up
                            </NavLink>
                            <Link
                                to="/login"
                                className="rounded-2xl bg-blue-500 text-white p-2 text-xl font-medium mx-2"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                    {authStatus && (
                        <div className="h-full">
                            <button className="h-full" onClick={profileAvatarHandler}>
                                <ProfileAfterLogin/>
                            </button>
                            {toggleProfileBar && (
                                  <div className={`absolute top-full flex flex-col mr-10 right-0 w-1/4 bg-white shadow-md topbar border-2 rounded-2xl ${toggleProfileBar ? 'topbar-visible' : 'hidden'}`}>
                                      <div className="absolute right-0 flex flex-col w-full justify-center items-center text-2xl m-5 rounded-2xl border-2 border-black">
                                        <div className="flex w-full flex-col items-end justify-end">
                                          <div className="fixed flex justify-end z-20 bg-cover">
                                            <img src={avatar} className="w-1/2 rounded-full border-2 border-white shadow-md"/>
                                          </div>
                                          <div className="relative z-10 flex justify-center items-center">
                                            <img src={coverImage} className="rounded-2xl"/>
                                          </div>
                                        </div>
                                        <div>{fullName}</div>
                                        <div>{username}</div>
                                        <div>{email}</div>
                                            <div className="p-4 flex w-full justify-center">
                                                <LogoutButton />
                                            </div>
                                            <div>
                                                <DeleteUser/>
                                            </div>
                                        </div>
                                  </div>
                            )}  
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
