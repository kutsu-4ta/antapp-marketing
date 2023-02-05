import React from 'react';
import logo from "../logo.svg";
import HeaderBlock from "../components/headerBlock";
import ContactForm from "../commons/contactForm";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";

const Contact = () => {
    return (
        <div className="App">
            <HeaderBlock title={'お問合せ'} path={'お問合せのURL'} description={'お問合せの説明'} />
            <Container sx={{paddingTop: 10, paddingRight: 'inherit', paddingLeft: 'inherit'}}>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2}}>
                    <Typography
                        variant="h2"
                        justifyContent="center"
                        fontSize={30}
                        noWrap
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'flex'},
                            fontFamily: 'Hiragino Kaku Gothic ProN',
                            fontWeight: 400,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        お問合せ
                    </Typography>
                </Paper>
            </Container>
            <ContactForm/>
        </div>
    );
};

export default Contact;
