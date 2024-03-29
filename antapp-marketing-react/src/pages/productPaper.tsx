import React from 'react';
// import logo from "../logo.svg";
import HeaderBlock from "../components/headerBlock";
import {Container, Stack, Divider} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import {EmblaCarousel} from "../commons/carousel";
// import "./product.css";
import {styled} from "@mui/material/styles";
import ContactForm from "../components/contactForm";
import {motion, useIsPresent} from "framer-motion";
import ResponsiveAppBar from "../commons/navigationBar";
import '../styles/style.scss';
// import Button from "@mui/material/Button";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     boxShadow: 'none',
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const ProductPaperTile = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const productDocuments = [
    {
        'name': 'セミナー1',
        'url' : '/'
    },
    {
        'name': 'セミナー2',
        'url' : '/'
    },
    {   'name': 'セミナー3',
        'url' : '/'
    },
    {   'name': 'セミナー4',
        'url' : '/'
    },
    {   'name': 'セミナー5',
        'url' : '/'
    }
];

const ProductPaper = () => {
    const isPresent = useIsPresent();
    return (
        <div className="App">
            <HeaderBlock
                title={'資料'}
                path={'資料のURL'}
                description={'資料の説明'}
            />
            <ResponsiveAppBar />
            <Container sx={{paddingTop: 10, paddingRight: 'inherit', paddingLeft: 'inherit'}}>
                <Paper sx={{
                    border: 'none',
                    boxShadow: 'none',
                    padding: 4,
                    marginY: 2,
                }}>
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
                        過去開催セミナー
                    </Typography>

                    {/* 資料グリッド */}
                    <Grid container spacing={{ xs: 1, sm: 2, md: 4 }} columns={12}>
                            {productDocuments.map((productDocuments) => (
                                <Grid
                                    className={"product-paper-grid"}
                                    key={productDocuments.name}
                                    item xs={4}
                                    sx={{marginTop: 10}}
                                >
                                    <ProductPaperTile className={"product-paper-tile"}
                                        sx={{height: {xs: 100, md: 200},}}>
                                        <a href={productDocuments.url}>
                                            {productDocuments.name}
                                        </a>
                                    </ProductPaperTile>
                                </Grid>
                            ))}
                    </Grid>

                </Paper>
            </Container>
            {/* お問合せ */}
            <Container sx={{paddingTop: 10, paddingBottom: 10}}>
                <ContactForm/>
            </Container>
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

export default ProductPaper;
