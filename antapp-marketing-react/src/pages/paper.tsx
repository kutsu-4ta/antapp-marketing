import React from 'react';
import logo from "../logo.svg";
import HeaderBlock from "../components/headerBlock";

const Paper = () => {
    return (
        <div className="App">
            <HeaderBlock title={'資料'} path={'資料のURL'} description={'資料の説明'} />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    特徴
                </p>
            </header>
        </div>
    );
};

export default Paper;
