// ---- react-router-dom props ----
import { createBrowserRouter } from "react-router-dom";

// ---- pages ----
import LandingPage from "../pages/landing-page";

// ---- routing ----
import Layout from "./layout";
import ErrorPage from "../pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <LandingPage /> }],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
