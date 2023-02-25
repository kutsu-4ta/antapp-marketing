import React from 'react';
import {ChangeEvent} from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, TextField, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRecoilState } from 'recoil';
import "../styles/style.scss";
import {
    contactNameState,
    contactCompanyState,
    contactEmailState,
    contactPhoneNumberState,
    contactUrlState,
    contactTextAreaState,
    contactEmailErrorState,
    contactNameErrorState,
    contactCompanyErrorState,
    contactPhoneNumberErrorState,
    contactUrlErrorState,
    contactTextAreaErrorState
} from '../atoms/contactFormState';
import {styled} from "@mui/material/styles";
import {rules} from "@typescript-eslint/eslint-plugin";

const ContactForm = () => {
    const [contactName, setContactName] = useRecoilState(contactNameState);
    const [contactNameError, setContactNameError] = useRecoilState(contactNameErrorState);

    const [contactEmail, setContactEmail] = useRecoilState(contactEmailState);
    const [contactEmailError, setContactEmailError] = useRecoilState(contactEmailErrorState);

    const [contactCompany, setContactCompany] = useRecoilState(contactCompanyState);
    const [contactCompanyError, setContactCompanyError] = useRecoilState(contactCompanyErrorState);

    const [contactPhoneNumber, setContactPhoneNumber] = useRecoilState(contactPhoneNumberState);
    const [contactPhoneNumberError, setContactPhoneNumberError] = useRecoilState(contactPhoneNumberErrorState);

    const [contactUrl, setContactUrl] = useRecoilState(contactUrlState);
    const [contactUrlError, setContactUrlError] = useRecoilState(contactUrlErrorState);

    const [contactTextArea, setContactTextArea] = useRecoilState(contactTextAreaState);
    const [contactTextAreaError, setContactTextAreaError] = useRecoilState(contactTextAreaErrorState);


    type validationRuleType = {
        rule: string;
        message: string;
    };

    /**
     * 正規表現によるバリデーションチェック
     * @param inputForm
     * @param validationRules
     *
     * @return errorMessage
     */
    const validationCheck = (inputForm: string, validationRules: validationRuleType[]) => {
        const errors: string[] = validationRules.map((rule) => {
            const isCheckRequired = rule['rule'] === 'required';
            const isFilled = inputForm.length > 0;

            // 必須
            if( isCheckRequired ){
                if(!isFilled){
                    console.log(inputForm, '必須');
                    return rule['message'];
                }
                return '';
            }

            if (isFilled && !inputForm.match(rule['rule'])) {
                return rule['message'];
            }
            return '';
        });

        let errorMessage = '';
        errors.forEach((error: string) => {
            if (error !== '') {
                errorMessage += error;
            }
        });

        return errorMessage;
    }

    const onChangeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        const validationRules: validationRuleType[] = [
            {
                'rule': 'required',
                'message': '「お名前」は必須です。'
            }
        ];
        const errorMessage: string = validationCheck(formInputs, validationRules);
        // console.log(errorMessage);
        setContactNameError(errorMessage);
        setContactName(formInputs);
    }
    const onChangeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        const validationRules: validationRuleType[] = [
            {
                'rule': '^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$',
                'message': '使用できるメールアドレスの形式：　例: example@mail.com'
            }
        ];
        const errorMessage: string = validationCheck(formInputs, validationRules);
        setContactEmailError(errorMessage);
        setContactEmail(formInputs);
    }

    const onChangeCompanyHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        const validationRules: validationRuleType[] = [
            {
                'rule': 'required',
                'message': '「お勤め先企業名」は必須です。'
            }
        ];
        const errorMessage: string = validationCheck(formInputs, validationRules);
        setContactCompanyError(errorMessage);
        setContactCompany(formInputs);
    }
    const onChangeUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        // const validationRules: validationRuleType[] = [
        //     {
        //         'rule': 'required',
        //         'message': '「お勤め先企業URL」は必須です。'
        //     }
        // ];
        // const errorMessage: string = validationCheck(formInputs, validationRules);
        // setContactUrlError(errorMessage);
        setContactUrl(formInputs);
    }
    const onChangePhoneNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;

        const validationRules: validationRuleType[] = [
            {
                'rule': 'required',
                'message': '「電話番号」は必須です。'
            },
            {
                'rule': '^0\\d{9,10}$',
                'message':'0から始まる番号が使用できます。：　例: 090-1234-5678'
            }
        ];
        console.log(formInputs);
        const errorMessage: string = validationCheck(formInputs, validationRules);
        setContactPhoneNumberError(errorMessage);
        setContactPhoneNumber(formInputs);
    }
    const onChangeTextAreaHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const formInputs = event.target.value;
        // const validationRules: validationRuleType[] = [
        //     {
        //         'rule': 'required',
        //         'message': '「お問合せ内容」は必須です。'
        //     }
        // ];
        // const errorMessage: string = validationCheck(formInputs, validationRules);
        // setContactTextAreaError(errorMessage);
        console.log(contactTextAreaError);
        setContactTextArea(formInputs);
    }

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
                >
                    <div className={"form-input"}>
                        <p className={"form-error"}>&nbsp;{contactNameError}</p>
                        <TextField fullWidth type="text" value={contactName} className={contactNameError ? 'form-error': ''} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeNameHandler(event)} label="お名前" variant="standard"/>
                    </div>
                    <div className={"form-input"}>
                        <p className={"form-error"}>&nbsp;{contactEmailError}</p>
                        <TextField fullWidth type="text" value={contactEmail} className={contactEmailError ? 'form-error': ''} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeEmailHandler(event)} label="メールアドレス" variant="standard"/>
                    </div>
                    <div className={"form-input"}>
                        <p className={"form-error"}>&nbsp;{contactCompanyError}</p>
                        <TextField fullWidth type="text" value={contactCompany} className={contactCompanyError ? 'form-error': ''} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeCompanyHandler(event)} label="お勤め先企業名" variant="standard"/>
                    </div>
                    <div className={"form-input"}>
                        <p className={"form-error"}>&nbsp;{contactUrlError}</p>
                        <TextField fullWidth type="text" value={contactUrl} className={contactUrlError ? 'form-error': ''} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeUrlHandler(event)} label="お勤め先企業URL" variant="standard"/>
                    </div>
                    <div className={"form-input"}>
                        <p className={"form-error"}>&nbsp;{contactPhoneNumberError}</p>
                        <TextField fullWidth type="text" value={contactPhoneNumber} className={contactPhoneNumberError ? 'form-error': ''} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangePhoneNumberHandler(event)} label="お電話番号（ハイフンなし）" variant="standard"/>
                    </div>
                    <div className={"form-input"}>
                        <p className={"form-error"}>&nbsp;{contactTextAreaError}</p>
                        <TextField fullWidth multiline rows={4} type="text" value={contactTextArea} className={contactTextAreaError ? 'form-error': ''} sx={{paddingLeft: 0, marginLeft: 0, width: '50vw'}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeTextAreaHandler(event)} label="お問合せ内容" variant="standard"/>
                    </div>
                </Stack>
            </Container>

            <Container sx={{paddingTop: 10, paddingBottom: 10}}>
                <span className={'btn-round'}>
                    <a href="../pages/product">
                        送信
                    </a>
                </span>
            </Container>
        </div>
    );
};

export default ContactForm;
