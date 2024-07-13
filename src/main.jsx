import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {store} from './apps/store.app.js';
import router from './routes/NavRoutes.jsx';
import {RouterProvider} from 'react-router-dom';



ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
