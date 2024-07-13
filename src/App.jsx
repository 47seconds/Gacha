import React from "react";
import {Outlet} from 'react-router-dom';
import {Header, Footer} from './layouts'

function App() {
    return (
    <div className="flex flex-col h-screen w-full">
        {/* <TestForm/> */}
        <Header/>
        <main className="flex-1 overflow-auto flex-grow mt-16">
            <Outlet/>
        </main>
        <Footer/>
    </div>
    );
}

export default App;
