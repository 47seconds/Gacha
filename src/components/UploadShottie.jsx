import React from "react";
import { useNavigate } from "react-router-dom";

function UploadShottie({toggleProfilebar}) {
    const navigate = useNavigate();

    const uploadShottieRedirectPage = () => {
        toggleProfilebar();
        navigate('/upload/shottie');
    };

    return (
        <button
            type="button"
            className="block w-full px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white text-left"
            onClick={uploadShottieRedirectPage}
        >
            Upload Shottie
        </button>
    );
}

export default UploadShottie;
