import React from 'react';
import logo from "../logo.svg";
import HeaderBlock from "../components/headerBlock";

const Home = () => {
    return (
        <div className="App">
            <HeaderBlock title={'ホーム'} path={'ホームのURL'} description={'ホームの説明'} />
            <h1>
                ホーム
            </h1>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
};

export default Home;
