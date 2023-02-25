import { atom } from 'recoil'

export const contactNameState = atom({
    key: 'contactName' ,
    default: ''
});
export const contactNameErrorState = atom({
    key: 'contactNameError' ,
    default: '',
});

export const contactEmailState = atom({
    key: 'contactEmail' ,
    default: '',
});
export const contactEmailErrorState = atom({
    key: 'contactEmailError' ,
    default: '',
});

export const contactCompanyState = atom({
    key: 'contactCompany' ,
    default: ''
});
export const contactCompanyErrorState = atom({
    key: 'contactCompanyError' ,
    default: ''
});

export const contactUrlState = atom({
    key: 'contactUrl' ,
    default: ''
});
export const contactUrlErrorState = atom({
    key: 'contactUrlError' ,
    default: ''
});

export const contactPhoneNumberState = atom({
    key: 'contactPhoneNumber' ,
    default: ''
});
export const contactPhoneNumberErrorState = atom({
    key: 'contactPhoneNumberError' ,
    default: ''
});

export const contactTextAreaState = atom({
    key: 'contactTextArea' ,
    default: ''
});
export const contactTextAreaErrorState = atom({
    key: 'contactTextAreaError' ,
    default: ''
});