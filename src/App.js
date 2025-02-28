import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Cart } from "./components/Cart";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => (
    <Provider store = {store}>
    <div className="app">
        <Header />
        <Outlet />
    </div>
    </Provider>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            }, 
            {
                path: "/home",
                element: <Body />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>
    <RouterProvider router={appRouter} />
</React.StrictMode>
);