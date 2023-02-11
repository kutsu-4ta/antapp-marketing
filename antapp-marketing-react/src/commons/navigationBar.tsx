import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import AdbIcon from '@mui/icons-material/Adb';
import "./navigationBar.css";
import {Link} from "react-router-dom";
import {motion, useIsPresent} from "framer-motion";
import {MobileNavigation} from "../components/mobile/navigation/mobileNavigation";

export type menuItemType = {
    name: string,
    path: string
};

const menuItems: menuItemType[] = [
    {
        'name': 'ホーム',
        'path' : '/'
    },
    {
        'name': '特徴',
        'path' : '/product'
    },
    {   'name': '資料',
        'path' : '/productPaper'
    },
    {   'name': 'お問合わせ',
        'path' : '/contact'
    }
];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const isPresent = useIsPresent();    // 切り替えスクリーンで使用

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position='fixed'
        sx={{
            boxShadow: 0,
        }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Hiragino Kaku Gothic ProN',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Antapp
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <MobileNavigation menuItems={menuItems} />
                    </Box>
                    {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Hiragino Kaku Gothic ProN',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Antapp
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end'}}>
                        {menuItems.map((menuContent) => (
                            <Button
                                key={menuContent.name}
                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={menuContent.path}>
                                    {menuContent.name}
                                </Link>
                                <motion.div
                                    initial={{ scaleX: 1 }}
                                    animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                                    exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                                    style={{ originX: isPresent ? 0 : 1 }}
                                    className="privacy-screen"
                                />
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;