import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from './routes/router';
import {Provider} from 'react-redux';
import {store} from './store';
import {ApiProvider} from "./context/api";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ApiProvider>
            <RouterProvider router={router}/>
        </ApiProvider>
    </Provider>
);