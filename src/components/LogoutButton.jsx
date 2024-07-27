import React from "react";
import { useDispatch } from "react-redux";
import authService from "../service/auth.service";
import { userLogout } from "../features/user/user.slice";
import Cookies from "js-cookie";

function LogoutButton({toggleProfilebar}) {
    const dispach = useDispatch();
    const logoutHandler = () => {
        authService.userLogout().then(dispach(userLogout()));
        Cookies.remove("userData");
        console.log("Logout successful");
        toggleProfilebar()
    };

    return (
        <button
            type="button"
            className="block w-full px-4 py-2 rounded-b-xl bg-red-500 text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-left"
            onClick={logoutHandler}
        >
            Log out
        </button>
    );
}

export default LogoutButton;
