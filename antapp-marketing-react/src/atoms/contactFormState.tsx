import { atom } from 'recoil'

export const contactNameState = atom({
    key: 'contactName' ,
    default: ''
});

export const contactCompanyState = atom({
    key: 'contactCompany' ,
    default: ''
});

export const contactEmailState = atom({
    key: 'contactEmail' ,
    default: ''
});

export const contactPhoneNumberState = atom({
    key: 'contactPhoneNumber' ,
    default: ''
});

export const contactUrlState = atom({
    key: 'contactUrl' ,
    default: ''
});

export const contactTextAreaState = atom({
    key: 'contactTextArea' ,
    default: ''
});