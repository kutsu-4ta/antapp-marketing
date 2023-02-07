import React from 'react';
import {ChangeEvent} from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRecoilState } from 'recoil';
import {
        contactNameState,
        contactCompanyState,
        contactEmailState,
        contactPhoneNumberState,
        contactUrlState,
        contactTextAreaState
    } from '../atoms/contactFormState';

type InputForm = {
    name: string;
    birthday: string;
};

const ContactForm = () => {
    const [contactName, setContactName] = useRecoilState(contactNameState);
    const [contactEmail, setContactEmail] = useRecoilState(contactEmailState);
    const [contactCompany, setContactCompany] = useRecoilState(contactCompanyState);
    const [contactPhoneNumber, setContactPhoneNumber] = useRecoilState(contactPhoneNumberState);
    const [contactUrl, setContactUrl] = useRecoilState(contactUrlState);
    const [contactTextArea, setContactTextArea] = useRecoilState(contactTextAreaState);

    const onChangeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactName(formInputs);
        console.log(event.target.value);
    }

    const onChangeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactEmail(formInputs);
        console.log(event.target.value);
    }

    const onChangeCompanyHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactCompany(formInputs);
        console.log(event.target.value);
    }

    const onChangePhoneNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactPhoneNumber(formInputs);
        console.log(event.target.value);
    }

    const onChangeUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactUrl(formInputs);
        console.log(event.target.value);
    }

    const onChangeTextAreaHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactTextArea(formInputs);
        console.log(event.target.value);
    }

    return (
        <div className="App">
            名前:<input type="text" value={contactName} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> onChangeNameHandler(event)} />
                <br/>
            メールアドレス:<input type="text" value={contactEmail} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> onChangeEmailHandler(event)} />
            <br/>
            会社名:<input type="text" value={contactCompany} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> onChangeCompanyHandler(event)} />
                <br/>
            電話番号:<input type="text" value={contactPhoneNumber} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> onChangePhoneNumberHandler(event)} />
            <br/>
            URL:<input type="text" value={contactUrl} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> onChangeUrlHandler(event)} />
            <br/>
            お問合せ内容:<input type="text" value={contactTextArea} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> onChangeTextAreaHandler(event)} />
            <br/>

            <br/>
            出力
            <br/>
                名前: {contactName}
            <br/>
            メールアドレス: {contactEmail}
            <br/>
                お勤め先企業名: {contactCompany}
            <br/>
             お電話番号：{contactPhoneNumber}
            <br/>
            お勤め先企業URL: {contactUrl}
            <br/>
            お問い合わせ内容: {contactTextArea}

            <Container sx={{paddingTop: 10, paddingBottom: 10}}>
                <span className={'btn-round'}>
                    <a href="./product">
                        送信
                    </a>
                </span>
            </Container>
        </div>
    );
};

export default ContactForm;
