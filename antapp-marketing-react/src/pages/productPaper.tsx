import React from 'react';
import logo from "../logo.svg";
import HeaderBlock from "../components/headerBlock";
import {Container, Stack, Divider} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {EmblaCarousel} from "../commons/carousel";
// import "./product.css";
import {styled} from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: 'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const TileItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProductPaper = () => {
    return (
        <div className="App">
            <HeaderBlock
                title={'資料'}
                path={'資料のURL'}
                description={'資料の説明'}
            />

            <Container sx={{
                height: '100vh',
                paddingLeft: 0,
                marginLeft: 0
            }}
            >
                <Paper sx={{border: 'none',
                    boxShadow: 'none',
                    padding: 0,
                    paddingTop: 50,
                    marginLeft: 0,
                    background: 'none',
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
                                    letterSpacing: '0.3rem',
                                    color: 'black',
                                    textDecoration: 'none',
                                    boxShadow: 0,
                                    paddingLeft: 0,
                                    marginLeft: 0
                                }}
                            >
                                中小企業のマーケティングを<br/>
                                一気通貫でサポートします
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
                                - 戦略立案・施策実行からWeb制作まで一貫した支援 -
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
                    >中小企業が抱えるマーケティング課題を解決</Typography>
                    <Stack
                        justifyContent="space-evenly"
                        alignItems="center"
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        sx = {{
                            paddingTop: 10,
                        }}
                    >
                        <TileItem className={'content-tile'}>
                            課題1<br/>
                            マーケティング組織がない
                        </TileItem>
                        <TileItem className={'content-tile'}>
                            課題2<br/>

                            コストがない
                        </TileItem>
                        <TileItem className={'content-tile'}>
                            課題3<br/>

                            リソースがない
                        </TileItem>
                    </Stack>
                    <Paper sx={{boxShadow: 'none', padding: 4, marginY: 2}}>
                        <Typography
                            variant='body1'
                            justifyContent="center"
                            fontSize={25}
                            noWrap
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'flex'},
                                fontFamily: '',
                                fontWeight: 400,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Antappが全て解決いたします！
                        </Typography>
                    </Paper>
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Item>
                            <span className={'btn-round'}>
                                <a href="./paper">資料請求</a>
                            </span>
                        </Item>
                        <Item>
                            <span className={'btn-round'}>
                                <a href="./paper">無料相談はこちら</a>
                            </span>
                        </Item>
                    </Stack>
                </Paper>
            </Container>
            <Container className="paperPreview" sx={{paddingTop: 10}}>
                <Typography
                    variant="h2"
                    justifyContent="center"
                    fontSize={30}
                    // noWrap
                    sx={{
                        mr: 2,
                        display: {xs: 'flex', md: 'flex'},
                        fontFamily: 'Hiragino Kaku Gothic ProN',
                        fontWeight: 400,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >マーケ担当が行う業務・ミッションを<br/>私たちが全て支援いたします</Typography>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2}}>
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
                        お客様の業種・業界・ ビジネスフロー・経営計画に合わせて最適なマーケティング戦略をご提供いたします。
                    </Typography>
                </Paper>
            </Container>
            <Container className="paperPreview" sx={{paddingTop: 10}}>
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
                >マーケティング戦略からWeb制作までワンストップで対応</Typography>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2}}>
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
                        戦略的な視点から効果の出るクリエイティブを制作します。
                    </Typography>
                </Paper>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Item>
                            <span className={'btn-round'}>
                                <a href="./paper">資料請求</a>
                            </span>
                    </Item>
                    <Item>
                            <span className={'btn-round'}>
                                <a href="./paper">無料相談はこちら</a>
                            </span>
                    </Item>
                </Stack>
            </Container>
            <Container className="paperPreview" sx={{paddingTop: 10}}>
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
                >支援体制</Typography>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2}}>
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
                        マーケティング戦略の立案・ディレクション業務を担当します。取引先の選定、コミュニケーション、施策実施をお客様と一体となりサポートします。
                    </Typography>
                </Paper>
            </Container>
            <Container className="paperPreview" sx={{paddingTop: 10}}>
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
                >私たちのポリシー</Typography>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2}}>
                    <Typography
                        variant="subtitle1"
                        justifyContent="center"
                        fontSize={30}
                        noWrap
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'flex'},
                            fontFamily: 'Hiragino Kaku Gothic ProN',
                            fontWeight: 100,
                            letterSpacing: '0.3rem',
                            fontSize: '1.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        お気軽にご相談ください
                    </Typography>
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
                        抽象的な課題などあらゆる相談を受け付けております。
                    </Typography>
                </Paper>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Item>
                            <span className={'btn-round'}>
                                <a href="./paper">資料請求</a>
                            </span>
                    </Item>
                    <Item>
                            <span className={'btn-round'}>
                                <a href="./paper">無料相談はこちら</a>
                            </span>
                    </Item>
                </Stack>
            </Container>
            {/* お問合せ */}
            <Container sx={{paddingTop: 10, paddingBottom: 10}}>
                <Paper sx={{border: 'none', boxShadow: 'none', padding: 4, marginY: 2}}>
                    <h3> フォーム</h3>
                    <Box sx={{border: 'black', padding: 4, marginY: 2}}>
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

export default ProductPaper;
