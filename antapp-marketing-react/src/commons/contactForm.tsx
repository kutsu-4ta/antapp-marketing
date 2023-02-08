import React from 'react';
import {ChangeEvent} from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, TextField, Stack } from "@mui/material";
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
import {styled} from "@mui/material/styles";

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
    }
    const onChangeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactEmail(formInputs);
    }
    const onChangeCompanyHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactCompany(formInputs);
    }
    const onChangePhoneNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactPhoneNumber(formInputs);
    }
    const onChangeUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactUrl(formInputs);
    }
    const onChangeTextAreaHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        setContactTextArea(formInputs);
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        boxShadow: 'none',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className="App">
            <Container sx={{
                paddingLeft: 0,
                marginLeft: 0
            }}>
                <Stack
                    justifyContent="space-evenly"
                    alignItems="center"
                    direction={{xs: 'column', sm: 'column'}}
                    spacing={{xs: 1, sm: 2, md: 4}}
                    sx={{
                        paddingLeft: 0,
                        marginLeft: 0
                    }}
                >
                        <TextField fullWidth type="text" value={contactName} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeNameHandler(event)} label="お名前" variant="standard"/>
                        <TextField fullWidth type="text" value={contactEmail} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeEmailHandler(event)} label="メールアドレス" variant="standard"/>
                        <TextField fullWidth type="text" value={contactCompany} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeCompanyHandler(event)} label="お勤め先企業名" variant="standard"/>
                        <TextField fullWidth type="text" value={contactUrl} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeUrlHandler(event)} label="お勤め先企業URL" variant="standard"/>
                        <TextField fullWidth type="text" value={contactUrl} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeUrlHandler(event)} label="お電話番号" variant="standard"/>
                        <TextField fullWidth multiline rows={4} type="text" value={contactTextArea} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeTextAreaHandler(event)} label="お問合せ内容" variant="standard"/>

                </Stack>
            </Container>

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
