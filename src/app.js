import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Profile from "./Components/Profile";
import Shimmer from "./Components/Shimmer";
import { Provider } from "react-redux";
import store from "./Components/Store";
import Cart from "./Components/Cart";


//import Instamart from "./Components/Instamart";
const Instamart = lazy(()=>import("./Components/Instamart"));

//import About from "./Components/About";
const About = lazy(()=>import("./Components/About"));

const AppLayout = () => {
    return (
      <Provider store={store}>
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
      </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
      {
        path:"cart",
        element:<Cart/>
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);