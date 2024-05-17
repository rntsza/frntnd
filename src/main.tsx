// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import Dashboard from "./pages/Dashboard/index.tsx";
// import Repository from "./pages/Repository/index.tsx";
import Header from "./pages/Header/index.tsx";
import Footer from "./pages/Footer/index.tsx";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  // Route,
  // createRoutesFromElements,
} from "react-router-dom";
// import About from "./pages/About/index.tsx";
// import Login from "./pages/Login/index.tsx";
// import Dashboard from "./pages/Dashboard/index.tsx";
// import React from "react";
import Login from "./pages/Login/index.tsx";
import { ToastContainer } from 'react-toastify';
import PlansPage from './pages/PlansPage/index.tsx';
import PaymentPage from './pages/PaymentPage/index.tsx';
// import About from "./pages/About/index.tsx";
// import Profile from "./pages/Profile/index.tsx";

// const isLogin = false;

const Layout = () => {
  // if (!isLogin) {
  //   console.log("login teste", isLogin);
  //   router.navigate("/home");
  // }
  return (
    <>
    <ToastContainer></ToastContainer>
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>

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
      {
        path: "/plans",
        element: <PlansPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
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
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="home" element={<App />} />
//       <Route path="about" element={<About />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="services" element={<Dashboard />} />
//       <Route path="login" element={<Login />} />
//       {/* <Route path="dashboard" element={<Dashboard />} />
//       <Route path="dashboard" element={<Dashboard />} /> */}
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <RouterProvider router={router} />,
);
