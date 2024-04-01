import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import About from "./About";
import Error from "./Error";
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Contact from "./Contact";
import Body from "./Body";
import RestMenu from "./RestMenu";

/* SPA - Singlr page applications ??
1.Client side routing (We do in react)
2.Server side routing (Used earlier)
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
    errorElement: <Error/>,
    children : [
      {
        path:"/",
        element:<Body/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path : "/restaurants/:id",
        element : <RestMenu/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root"))
.render(
  <>
    <RouterProvider router={appRouter}/>
  </>
);