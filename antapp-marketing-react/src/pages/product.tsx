import React from 'react';
import logo from "../logo.svg";
import HeaderBlock from "../components/headerBlock";

const Contact = () => {
    return (
        <div className="App">
            <HeaderBlock title={'特徴'} path={'特徴のURL'} description={'特徴の説明'} />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    特徴
                </p>
            </header>
        </div>
    );
};

export default Contact;
