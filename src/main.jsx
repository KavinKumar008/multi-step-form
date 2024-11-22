import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import PersonalInfo from "./firstPage/PersonalInfo.jsx";
import PlansPage from "./secondpage/PlansPage.jsx";
import AddonPage from "./thirdpage/AddonPage.jsx";
import FinishupPage from "./fourthpage/FinishupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInfo />,
  },
  {
    path: "/plansPage",
    element: <PlansPage />,
  },
  {
    path: "/addonPage",
    element: <AddonPage />,
  },
  {
    path: "/finishupPage",
    element: <FinishupPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
