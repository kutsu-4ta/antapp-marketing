import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";
import HeaderBlock from "../components/headerBlock";
import ResponsiveAppBar from "../commons/navigationBar";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Container, Stack} from "@mui/material";
import {EmblaCarousel} from "../commons/carousel";
import ContactForm from "../components/contactForm";
import MyButton from "../commons/myBottun";
import "./home.css";
import "../styles/style.scss";
import Particle from "../components/particle";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(255,255,255,0)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: 'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function Home() {
    const isPresent = useIsPresent();
    return (
        <div>
            <HeaderBlock
                title={'Antapp.incマーケティング支援ホーム'}
                path={'ホームのURL'}
                description={'ビジネスのマーケティングを支援'}
            />
            <ResponsiveAppBar />
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />

            <Container sx={{
                height: '100vh',
                paddingLeft: 0,
                marginLeft: 0
            }}
            >
                <Item
                    sx={{
                        position: 'fixed',
                        top: '30vh',
                        left: 0,
                        zIndex: -1,
                        width: '100vw'
                    }}
                >
                    <Particle/>
                </Item>
                <Paper sx={{
                    border: 'none', boxShadow: 'none', padding: 0, paddingTop: 50, paddingLeft: 0,
                    marginLeft: 0, background: 'none',
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
                        {/*<motion.div*/}
                        {/*    initial={{opacity: 0}}*/}
                        {/*    animate={{opacity: 1, y: [50, 0]}}*/}
                        {/*    transition={{duration: 2.0, ease: "easeOut"}}*/}
                        {/*>*/}
                            <Item
                                sx={{
                                    paddingLeft: 0,
                                    marginLeft: 0
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    justifyContent="center"
                                    fontSize={30}
                                    sx={{
                                        mr: 2,
                                        display: {xs: 'flex', md: 'flex'},
                                        fontFamily: 'serif',
                                        fontWeight: 300,
                                        letterSpacing: '.3rem',
                                        color: 'black',
                                        textDecoration: 'none',
                                        boxShadow: 0,
                                        paddingLeft: 0,
                                        marginLeft: 0
                                    }}
                                >
                                    中小企業のマーケティングを支援する
                                </Typography>
                            </Item>
                            <Item className={'title-item'}>
                                <Typography
                                    variant="subtitle1"
                                    // noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        justifyContent: 'center',
                                        display: {xs: 'flex', md: 'flex'},
                                        fontFamily: 'Hiragino Kaku Gothic ProN',
                                        fontWeight: 100,
                                        letterSpacing: '.3rem',
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    戦略立案・施策運用・Web制作など一貫したサポート
                                </Typography>
                                <Item sx={{paddingTop: 5}}>
                                    <MyButton text={'無料相談はこちら'} path={'/contact'} className={'btn-round'}/>
                                </Item>
                            </Item>
                        {/*</motion.div>*/}
                    </Stack>
                </Paper>
            </Container>
            {/* Antappとは */}
            <Container sx={{paddingTop: 10, paddingRight: 'inherit', paddingLeft: 'inherit', backgroundColor: 'rgba(255,255,255,0)'}}>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2, backgroundColor: 'rgba(255,255,255,0)'}}>
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
                            color: 'black',
                            backgroundColor: 'rgba(255,255,255,0)',
                            textDecoration: 'none',
                        }}
                    >Antappとは</Typography>
                    <Box sx={{padding: 4, marginY: 2, backgroundColor: 'rgba(255,255,255,0)'}}>
                        <Paper className={'about'} sx={{boxShadow: 'none', padding: 0, marginY: 2, border: 'none', backgroundColor: 'rgba(255,255,255,0.9)'}}>
                            <Stack border={'solid'} borderColor={'black'}>
                                <Item>
                                    <Typography
                                        variant="body1"
                                        justifyContent="center"
                                        fontSize={30}
                                        // noWrap
                                        sx={{
                                            borderRadius: 1,
                                            paddingTop: 5,
                                            mr: 2,
                                            display: {xs: 'flex', md: 'flex'},
                                            fontFamily: 'Hiragino Kaku Gothic ProN',
                                            fontWeight: 100,
                                            fontSize: '1rem',
                                            lineHeight: '3rem',
                                            // letterSpacing: '0.5rem',
                                            color: 'black',
                                            textDecoration: 'none',
                                            backgroundColor: 'rgba(255,255,255,0)'
                                        }}
                                    >
                                        私たちは企業の経営課題をマーケティングで解決するフリーランス集団です。<br/>
                                        「自社にマーケティング機能が無い。」<br/>
                                        「売上が伸び悩んでいる。」<br/>
                                        「更なる成長を目指したい。」<br/>
                                        このような思いを抱える企業をマーケティングの力でご支援いたします。<br/>
                                        マーケティング領域における専門性に加え、フリーランスならではの<br/>
                                        柔軟性と経済性で圧倒的なパフォーマンスを提供します。<br/>
                                    </Typography>
                                </Item>
                                <Item>
                                    <p className={'seemore'}>
                                    <span>
                                        <Link className={"btnarrow4"} to={'/product'}>
                                            SeeMore
                                        </Link>
                                    </span>
                                    </p>
                                </Item>
                            </Stack>
                        </Paper>
                    </Box>
                </Paper>
            </Container>

            <Container className="paperPreview" sx={{paddingTop: 10}}>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2, backgroundColor: 'black'}}>
                    <MyButton text={'無料相談はこちら'} path={'/productPaper'} className={'btn-round'}/>
                    <Box sx={{border: 'black', padding: 4, marginY: 2, backgroundColor: 'none'}}>
                        <EmblaCarousel/>
                    </Box>
                </Paper>
            </Container>
            {/* お問合せ */}
            <Container sx={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'rgba(255,255,255,0.9)'}}>
                <ContactForm/>
            </Container>
        </div>
    );
}