import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/home';
import Product from './pages/product';
import ProductPaper from './pages/productPaper';
import Contact from './pages/contact';
import ResponsiveAppBar from "./commons/navigationBar";
import { ThemeProvider, CssBaseline } from "@mui/material";
import myTheme from "./commons/myTheme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = myTheme;

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveAppBar />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  {/*<Route path="/home" element={<Home />} />*/}
                  <Route path="/product" element={<Product />} />
                  <Route path="/productPaper" element={<ProductPaper />} />
                  <Route path="/contact" element={<Contact />} />
                    {/*<Route exact path="/form" component={Form} />*/}
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
