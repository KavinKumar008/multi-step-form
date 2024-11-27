import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
// import PersonalInfo from "./firstPage/PersonalInfo.jsx";
// import PlansPage from "./secondpage/PlansPage.jsx";
// import AddonPage from "./thirdpage/AddonPage.jsx";
// import FinishupPage from "./fourthpage/FinishupPage.jsx";
// import SuccessPage from "./fifthpage/SuccessPage.jsx";
// import { PlansPageContext } from "./context/Context.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PersonalInfo />,
//   },
//   {
//     path: "/plansPage",
//     element: <PlansPage />,
//   },
//   {
//     path: "/addonPage",
//     element: <AddonPage />,
//   },
//   {
//     path: "/finishupPage",
//     element: <FinishupPage />,
//   },
//   {
//     path: "/successPage",
//     element: <SuccessPage />,
//   },
// ]);

// const App = ({ children }) => {
//   const [storedData, setStoredData] = useState([]);

//   const contextValue = { storedData, setStoredData };

//   return (
//     <PlansPageContext.Provider value={contextValue}>
//       {children}
//     </PlansPageContext.Provider>
//   );
// };

// Render the application
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App>
//       <RouterProvider router={router} />
//     </App>
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
