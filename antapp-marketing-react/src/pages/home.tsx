import React from 'react';
import logo from "../logo.svg";
import Typography from '@mui/material/Typography';
import HeaderBlock from "../components/headerBlock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Container, Button} from "@mui/material";
import {EmblaCarousel} from "../commons/carousel";
import "./home.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
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
            <Container sx={{height: '100vh'}}>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2}}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={7}>
                                <Item sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2 }}>
                                    <h1>中小企業のマーケティングを支援する</h1>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                    <Typography
                                        variant="subtitle1"
                                        // noWrap
                                        component="a"
                                        href="/"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'flex', md: 'flex' },
                                            fontFamily: 'serif',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        戦略立案・施策運用・Web制作など一貫したサポート
                                    </Typography>
                                    <span className={'btn-round'}>
                                        <a href="./contact">
                                            無料相談はこちら
                                        </a>
                                    </span>
                            </Grid>
                        </Grid>
                    </Box>
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
                            fontFamily: 'serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >Antappとは</Typography>
                    <Box sx={{border: 'black', padding: 4, marginY: 2 }}>
                        <Paper className={'about'} sx={{ boxShadow: 'none', padding: 4, marginY: 2 }}>
                            私たちは企業の経営課題をマーケティングで解決するフリーランス集団です。<br/>
                            「自社にマーケティング機能が無い。」<br/>
                            「売上が伸び悩んでいる。」<br/>
                            「更なる成長を目指したい。」<br/>
                            このような思いを抱える企業をマーケティングの力でご支援いたします。<br/>
                            マーケティング領域における専門性に加え、フリーランスならではの柔軟性と経済性で圧倒的なパフォーマンスを提供します。<br/>
                            <p className={'seemore'}>
                                <span>
                                    <a className={"btnarrow4"} href="./product">SeeMore</a>
                                </span>
                            </p>
                        </Paper>
                    </Box>
                </Paper>
            </Container>
            {/*　資料　*/}
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
