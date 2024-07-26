import React from "react";
import {Outlet} from 'react-router-dom';
import {Header, Footer} from './layouts'

function App() {
    return (
    <div className="flex flex-col h-screen w-full">
        <Header/>
        <main className="flex-1 overflow-auto flex-grow bg-gray-900">
            <Outlet/>
        </main>
        <Footer/>
    </div>
    );
}

export default App;
