import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/home.tsx";
import SimpleInteresPage from "./pages/simpleInterest/simpleInterest.tsx";
import CompoundInteresPage from "./pages/compoundInterest/compoundInterest.tsx";
import GradientPage from "./pages/gradient/gradient.tsx";
import TirPage from "./pages/tir/tir.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/interes-simple",
    element: <SimpleInteresPage />,
  },
  {
    path: "/interes-compuesto",
    element: <CompoundInteresPage />,
  },
  {
    path: "/gradiente",
    element: <GradientPage />,
  },
  {
    path: "/tir",
    element: <TirPage />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
