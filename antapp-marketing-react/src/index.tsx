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
import Footer from "./commons/footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import myTheme from "./commons/myTheme";
import {RecoilRoot} from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = myTheme;

root.render(
  <React.StrictMode>
      <RecoilRoot>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <ResponsiveAppBar />
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/product" element={<Product />} />
                      <Route path="/productPaper" element={<ProductPaper />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
              </BrowserRouter>
              <Footer />
          </ThemeProvider>
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
