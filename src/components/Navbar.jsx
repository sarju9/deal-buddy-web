import React from 'react'
import { Grid, Toolbar, Typography, Button, Box, Stack, Container, Link, ListItem } from '@mui/material';
import { dealBuddyLogo, locationIcon, downAerrowIcon, searchIcon, categoryMenuIcon, storeMenuIcon, saleMenuIcon, couponMenuIcon, faqMenuIcon, vendorIcon } from "../constant/ImagePath";
import "../styles/Navbar.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
    let date = new Date().toLocaleDateString('en-us', { day: 'numeric', month: "short", year: "numeric" });
    return (
        <>
            <Container maxWidth="xl" className='navbar-container'>
                <Grid container className='navbar-main-header'>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Box className="navbar-logo-div">
                            <Link href="#"><img src={dealBuddyLogo} className='navbar-logo' alt='deal buddy logo' /></Link>
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={12}>
                        <Box className="location-link-div">
                            <Link href="#" className='location'>
                                <Box className="location-icon-name-content-div">
                                    <i className='location-nav-icon'>
                                        <img src={locationIcon} className='icon-location' alt='location icon' />
                                    </i>
                                    {/* <LocationOnOutlinedIcon className='location-nav-icon' /> */}
                                    <span className='location-name'>Newstead</span>

                                </Box>
                                <i className='icon-aerrow-down'>
                                    <img src={downAerrowIcon} />
                                </i>
                                {/* <KeyboardArrowDownIcon className='icon-aerrow-down' /> */}
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item lg={4.5} md={4.5} sm={4.5} xs={12}>
                        <Box className="navbar-search-div">
                            <Box className="search-bar-div">
                                <input type='text' placeholder='Find your perfect deal' className='input-search' />
                                <Button type="submit" className='search-btn'>
                                    <i className='icon-search'>
                                        <img src={searchIcon} className='search-img' alt="search img" />
                                    </i>
                                </Button>
                                <Button type='button' className='search-clear'>
                                    <ClearIcon className='icon-close' />
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={2.5} md={2.5} sm={2.5} xs={12} className='user-profile-grid'>
                        <Box className="user-profile-details-div">
                            <Typography className='user-name-and-location'>Kia Ora, Aotearoa!</Typography>
                            <Typography className='current-date'>{date}</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container className='main-navbar'>
                    <Grid item lg={7} md={7} sm={8} xs={12}>
                        <Box className="navbar-menu-links">
                            <Stack direction="row" spacing={4}>
                                <Link href="#" className='menu-link'><i className='menu-icon'><img src={categoryMenuIcon} /></i>Categories</Link>
                                <Link href="#" className='menu-link'><i className='menu-icon'><img src={storeMenuIcon} /></i>Stores</Link>
                                <Link href="#" className='menu-link'><i className='menu-icon'><img src={saleMenuIcon} /></i>Sale</Link>
                                <Link href="#" className='menu-link'><i className='menu-icon'><img src={couponMenuIcon} /></i>Coupons</Link>
                                <Link href="#" className='menu-link'><i className='menu-icon'><img src={faqMenuIcon} /></i>FAQ</Link>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item lg={5} md={5} sm={4} xs={12}>
                        <Box className="navbar-vendor-login-details-div">
                            <Link href="#" className='vendor-details'>
                                <img src={vendorIcon} alt='vendor icon' className='vendor-icon-img' />
                                <Typography className='vendor-login-name'>Vendor Login</Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Navbar