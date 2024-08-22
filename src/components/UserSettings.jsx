import React from "react";
import { useNavigate } from "react-router-dom";

function UserSettings({toggleProfilebar}) {
    const navigate = useNavigate();

    const UserSettingsPageRedirect = () => {
        navigate('/account-settings');
        toggleProfilebar();
    };

    return (
        <button
            type="button"
            className="block w-full px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white text-left"
            onClick={UserSettingsPageRedirect}
        >
            Account Settings
        </button>
    );
}

export default UserSettings;
