import * as React from 'react';
import Container from '@mui/material/Container';
import "./navigationBar.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const menuContent = [
    {
        'name': 'ホーム',
        'url' : '/'
    },
    {
        'name': '特徴',
        'url' : './product'
    },
    {   'name': '資料',
        'url' : './productPaper'
    },
    {   'name': 'お問合わせ',
        'url' : './contact'
    }
];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Footer = () => {
    return (
        <Container sx={{paddingTop: 5, paddingBottom: 5}} style={{backgroundColor: "gray" }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
                {menuContent.map((menuContent) => (
                    <Button
                        key={menuContent.name}
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {/* とりあえずaタグのリンク */}
                        <a href={menuContent.url} style={{textDecoration: 'none', color: 'white'}}>
                            {menuContent.name}
                        </a>
                    </Button>
                ))}
            </Box>
        </Container>
    );
};
export default Footer;