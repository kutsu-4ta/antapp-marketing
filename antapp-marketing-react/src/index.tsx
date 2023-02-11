import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {RecoilRoot} from "recoil";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import myTheme from "./commons/myTheme";
import Footer from "./commons/footer";
import './index.css';
// import ResponsiveAppBar from "./commons/navigationBar";

const theme = myTheme;

function AppWithUI() {
    return (
        <React.StrictMode>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    {/*<ResponsiveAppBar/>ResponsiveAppBar*/}
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ThemeProvider>
            </RecoilRoot>
        </React.StrictMode>
    );
}

const rootElement:any = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
