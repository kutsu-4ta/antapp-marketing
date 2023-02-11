import React from 'react';
import logo from "../logo.svg";
import HeaderBlock from "../components/headerBlock";
import ContactForm from "../commons/contactForm";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";
import {motion, useIsPresent} from "framer-motion";
import ResponsiveAppBar from "../commons/navigationBar";

const Contact = () => {
    const isPresent = useIsPresent();
    return (
        <div className="App">
            <HeaderBlock title={'お問合せ'} path={'お問合せのURL'} description={'お問合せの説明'} />
            <ResponsiveAppBar />
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
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />
        </div>
    );
};

export default Contact;
