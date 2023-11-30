import { Box, Container, Grid, Link, ListItem, Typography, List } from '@mui/material';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { footerLogo, footerLogoIcon, facebookIcon, instaIcon } from "../constant/ImagePath";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import "../styles/Footer.css";
import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const quickLinksData = [
        {
            id: 1,
            linkName: "Home",
            linkPath: "#",
        },
        {
            id: 2,
            linkName: "About Us",
            linkPath: "#",
        },
        {
            id: 3,
            linkName: "Contact Us",
            linkPath: "#",
        },
        {
            id: 4,
            linkName: "FAQ’s",
            linkPath: "#",
        },
        {
            id: 5,
            linkName: "Blogs",
            linkPath: "#",
        },
    ]

    const generalLinksData = [
        {
            id: 1,
            linkName: "Categories",
            linkPath: "#",
        },
        {
            id: 2,
            linkName: "Stores",
            linkPath: "#",
        },
        {
            id: 3,
            linkName: "Deals",
            linkPath: "#",
        },
        {
            id: 4,
            linkName: "Map",
            linkPath: "#",
        },
        {
            id: 5,
            linkName: "NZ Price Comparision Site",
            linkPath: "#",
        },
    ]

    const FooterCommonLinks = ({ name, href }) => {
        return (
            <>
                <ListItem className='link-content-div'>
                    <ListItemDecorator className="icon-div">
                        <ChevronRightOutlinedIcon className='chevron-right-icon' />
                    </ListItemDecorator>
                    <Link href={href} className='link-name'>{name}</Link>
                </ListItem>
            </>
        )
    }

    return (
        <>
            <Container maxWidth="xl" className='footer-main-content'>
                <Box className='footer-area'>
                    <Container maxWidth="lg">
                        <Box className="footer-container-link">
                            <Grid container>
                                <Grid item lg={4} md={4} sm={5} xs={12}>
                                    <Box className="footer-logo-description-div">
                                        <Link href="#" className='footer-logo-link'>
                                            <img src={footerLogo} className='footer-logo' alt='deal buddy logo' />
                                        </Link>
                                        <Typography className='footer-description'>
                                            Dealbuddy aims to help customers discover new experiences and products at the lowest possible prices
                                            and local businesses thrive every day.
                                        </Typography>
                                        <Typography>Let's find your perfect deal !!</Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={5} xs={12}>
                                    <Box className="footer-quick-links-and-general-div">
                                        <Grid container>
                                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                                <Box className="quick-links-left">
                                                    <Typography variant='h3' className='quick-links-title'>
                                                        Quick Links
                                                    </Typography>
                                                    <List className='links-list'>
                                                        {/* <ListItem className='link-content-div'>
                                                            <ListItemDecorator className="icon-div">
                                                                <ChevronRightOutlinedIcon className='chevron-right-icon' />
                                                            </ListItemDecorator>
                                                            <Link href="#" className='link-name'>Home</Link>
                                                        </ListItem> */}

                                                        {
                                                            quickLinksData.map((item) => {
                                                                const { id, linkName, linkPath } = item;
                                                                return <FooterCommonLinks key={id} href={linkPath} name={linkName} />
                                                            })
                                                        }
                                                    </List>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                                <Box className="quick-links-right">
                                                    <Typography variant='h3' className='general-links-title'>
                                                        General
                                                    </Typography>
                                                    <List className='links-list'>
                                                        {
                                                            generalLinksData.map((item) => {
                                                                const { id, linkName, linkPath } = item;
                                                                return <FooterCommonLinks key={id} href={linkPath} name={linkName} />
                                                            })
                                                        }
                                                    </List>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item lg={2} md={2} sm={2} xs={12}>
                                    <Box className="footer-small-logo">
                                        <img src={footerLogoIcon} alt='logo icon' className='small-logo-img' />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Container>

            <Container maxWidth="xl" className='footer-copyright-area'>
                <Box className="copyright-content-div">
                    <Typography className='copyright-description'>
                        Dealbuddy is a registered trademark of Deal Buddy Limited. Third-party trademarks are the property of their respective third-party owners. Presence of a third-party trademark does not mean that dealbuddy has any relationship with that third-party or that the third-party endorses dealbuddy or its services.
                    </Typography>
                    <Box className="footer-inner-content-div">
                        <Typography className='left-footer-text'>
                            {currentYear} Deal Buddy Limited, All rights reserved.
                        </Typography>
                        <Box className="footer-terms-of-use-and-privacy-policy">
                            <Typography className='right-footer-text'>
                                <Link href='#' className='footer-links'>Terms of use</Link>
                                |
                                <Link href="#" className='footer-links'>Privacy Policy</Link>
                            </Typography>
                            <Box className="footer-fb-insta-icon">
                                <Link href="https://www.facebook.com/dealbuddynz/" target="_blank">
                                    <img src={facebookIcon} alt="Facebook" className='footer-icon-img' />
                                </Link>
                                <Link href="https://www.instagram.com/dealbuddynz/" target="_blank">
                                    <img src={instaIcon} alt="Instagram" className='footer-icon-img' />
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Footer