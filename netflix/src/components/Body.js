import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

function Body() {
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path:"/browse",
        element: <Browse/>
    }
])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
