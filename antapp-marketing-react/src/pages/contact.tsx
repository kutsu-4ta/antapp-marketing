import React from 'react';
import logo from "../logo.svg";
import HeaderBlock from "../components/headerBlock";

const Contact = () => {
    return (
        <div className="App">
            <HeaderBlock title={'お問合せ'} path={'お問合せのURL'} description={'お問合せの説明'} />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    お問合せ
                </p>
            </header>
        </div>
    );
};

export default Contact;
