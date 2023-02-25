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
import "./navigationBar.scss";
import {Link} from "react-router-dom";
import {motion, useIsPresent} from "framer-motion";
import {MobileNavigation} from "../components/mobile/navigation/mobileNavigation";
import {randomInt} from "crypto";

export type menuItemType = {
    secondName: string,
    name: string,
    path: string
};

const menuItems: menuItemType[] = [
    {
        'secondName': 'ホーム',
        'name': 'Home',
        'path' : '/'
    },
    {
        'secondName': '特徴',
        'name': 'feature',
        'path' : '/product'
    },
    {
        'secondName': '資料',
        'name': 'paper',
        'path' : '/productPaper'
    },
    {
        'secondName': 'お問合わせ',
        'name': 'contact',
        'path' : '/contact'
    }
];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const isPresent = useIsPresent();    // 切り替えスクリーンで使用

    const handleMenuButton = (menuItemName: string, index: number)=>{
        const buttonElement = window.document.getElementById(menuItemName);
        const newName = buttonElement?.childNodes[0].nodeValue == menuItems[index]['name'] ? menuItems[index]['secondName'] : menuItems[index]['name'];
        // buttonElement?.removeChild(buttonElement?.childNodes[0]);
        // const textNode = document.createTextNode(newName);
        // buttonElement?.appendChild(textNode);
    }

    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    //
    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElUser(event.currentTarget);
    // };
    //
    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };
    //
    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };
    //

    return (
        <AppBar position='fixed'
        sx={{
            boxShadow: 0,
        }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters className={'toolbar'}>
                    {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{display: { xs: 'none', md: 'flex' }}}
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
                        sx={{display: { xs: 'flex', md: 'none' }}}
                    >
                        Antapp
                    </Typography>
                    <Box className={'button-area'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        {menuItems.map((menuContent:menuItemType, i:number) => (
                            <Button
                                key={menuContent.name}
                                onMouseEnter={()=>{handleMenuButton(menuContent.name, i)}}
                                onMouseLeave={()=>{handleMenuButton(menuContent.name, i)}}
                                // onClick={handleCloseNavMenu}
                            >
                                <div>
                                    <Link
                                        id={menuContent.name}
                                        to={menuContent.path}
                                    >
                                        <span>{menuContent.name}<br/>{menuContent.secondName}</span>
                                    </Link>
                                </div>
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