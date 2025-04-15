import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";
import Mobile from "./component/Mobile/Mobile";
import Laptop from "./component/Laptop/Laptop";
import User from "./component/User/User";

const userData = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/mobile",
        Component: Mobile,
      },
      {
        path: "/laptop",
        Component: Laptop,
      },
      {
        path: "/user",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <User userData={userData}></User>
          </Suspense>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
