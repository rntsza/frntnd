// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import Dashboard from "./pages/Dashboard/index.tsx";
// import Repository from "./pages/Repository/index.tsx";
import Header from "./pages/Header/index.tsx";
import Footer from "./pages/Footer/index.tsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// import About from "./pages/About/index.tsx";
import Login from "./pages/Login/index.tsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />,
);
