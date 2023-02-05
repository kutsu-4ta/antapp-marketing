import React from 'react';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";

const ContactForm = () => {
    return (
        <div className="App">
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
