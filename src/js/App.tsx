import * as React from "react";
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "../../node_modules/react-router/dist/development/index";


// export const App = () => {
//   const { isLoggedIn } = useAuth();

//   if (!isLoggedIn) {
//     return <Login />;
//   }
//   return <Todo />;
// };


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<Login />} />
    <Route path="/todo" element={<Todo />} />
    </>
  )
)

export const App = () => <RouterProvider router ={router} />