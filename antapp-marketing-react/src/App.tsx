// All photos by Matt Perry https://citizenofnowhe.re
import './styles/style.scss';
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import Product from "./pages/product";
import ProductPaper from "./pages/productPaper";
import Contact from "./pages/contact";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/product",
      element: (
          <Product />
      )
    },
    {
      path: "/productPaper",
      element: (
          <ProductPaper/>
      )
    },
    {
      path: "/contact",
      element: (
          <Contact/>
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
  );
}
