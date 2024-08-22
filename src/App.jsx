import React, {useState, useEffect} from "react";
import {Outlet} from 'react-router-dom';
import {Header, Footer} from './layouts'
import  SplashScreen  from "./utils/SplashScreen.util";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
    <div className="flex flex-col h-screen w-full">
        {
            isLoading ? (
                <SplashScreen/>
            ) : (
                <>
                    <Header/>
                    <main className="flex-1 overflow-auto flex-grow bg-gray-900">
                        <Outlet/>
                    </main>
                    {/* <Footer/> */}
                </>
            )
        }
    </div>
    );
}

export default App;
