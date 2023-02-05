import React from 'react';
import Typography from '@mui/material/Typography';
import HeaderBlock from "../components/headerBlock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Container, Stack} from "@mui/material";
import {EmblaCarousel} from "../commons/carousel";
import "./home.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: 'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    return (
        <div className="App">
            <HeaderBlock
                title={'Antapp.incマーケティング支援'}
                path={'ホームのURL'}
                description={'ビジネスのマーケティングを支援'}
            />
            <Container sx={{height: '100vh',
                paddingLeft: 0,
                marginLeft: 0
            }}
            >
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 0, paddingTop: 50, paddingLeft: 0,
                    marginLeft: 0, background: 'none',
                }}>
                    <Stack
                        justifyContent="space-evenly"
                        alignItems="center"
                        direction={{ xs: 'column', sm: 'column' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        sx={{
                            paddingLeft: 0,
                            marginLeft: 0
                        }}
                    >
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
                                    display: { xs: 'flex', md: 'flex' },
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
                                <span className={'btn-round'}>
                                    <a href="./contact">
                                        無料相談はこちら
                                    </a>
                                </span>
                            </Item>
                        </Item>
                    </Stack>
                </Paper>
            </Container>
            {/* Antappとは */}
            <Container sx={{paddingTop: 10, paddingRight: 'inherit', paddingLeft: 'inherit'}}>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2 }}>
                    <Typography
                        variant="h2"
                        justifyContent="center"
                        fontSize={30}
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'Hiragino Kaku Gothic ProN',
                            fontWeight: 400,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >Antappとは</Typography>
                    <Box sx={{border: 'black', padding: 4, marginY: 2 }}>
                        <Paper className={'about'} sx={{ boxShadow: 'none', padding: 4, marginY: 2 }}>
                            <Typography
                                variant="body1"
                                justifyContent="center"
                                fontSize={30}
                                // noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'flex' },
                                    fontFamily: 'Hiragino Kaku Gothic ProN',
                                    fontWeight: 100,
                                    fontSize: '1rem',
                                    lineHeight: '3rem',
                                    // letterSpacing: '0.5rem',
                                    color: 'black',
                                    textDecoration: 'none',
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
                            <Item sx={{paddingTop: 5}}>
                                <p className={'seemore'}>
                                    <span>
                                        <a className={"btnarrow4"} href="./product">SeeMore</a>
                                    </span>
                                </p>
                            </Item>
                        </Paper>
                    </Box>
                </Paper>
            </Container>

            <Container className="paperPreview" sx={{paddingTop: 10}}>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2, backgroundColor: 'black'}}>
                    <span className={'btn-round'}>
                        <a href="./paper">
                            無料相談はこちら
                        </a>
                    </span>
                    <Box sx={{border: 'black', padding: 4, marginY: 2, backgroundColor: 'none' }}>
                        <EmblaCarousel/>
                    </Box>
                </Paper>
            </Container>
            {/* お問合せ */}
            <Container sx={{paddingTop: 10, paddingBottom: 10}}>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2 }}>
                    <h3> フォーム</h3>
                    <Box sx={{border: 'black', padding: 4, marginY: 2 }}>
                        <Paper sx={{border: 'black', boxShadow: 'none', padding: 4, marginY: 2}}>
                            フォーム
                        </Paper>
                    </Box>
                </Paper>
                <span className={'btn-round'}>
                    <a href="./product">
                        無料相談はこちら
                    </a>
                </span>
            </Container>
        </div>
    );
};

export default Home;
