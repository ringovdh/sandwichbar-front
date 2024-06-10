import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./components/home/Home";
import Orders from "./components/order/Orders"
import AllOrders from "./components/order/All-orders"
import Account from "./components/user/Account";
import RootLayout from "./components/root/Root";
import ErrorPage from "./components/root/Error";
import Protected from "./components/root/Protected";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    element: <Protected role="USER"/>,
                    children: [
                        {
                            path: '/user/orders',
                            element: <Orders/>
                        },
                        {
                            path: '/user/account',
                            element: <Account/>
                        }
                    ]
                },
                {
                    element: <Protected role="ADMIN"/>,
                    children: [
                        {
                            path: '/admin/orders',
                            element: <AllOrders/>
                        }
                    ]
                },
            ]
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
