import React from 'react'
import logo from '../assets/logo.svg'               // imported assets for the navbar
import logoMobile from '../assets/logoMobile.svg'
import { Toolbar, Typography } from '@mui/material' // these two needed for toolbar
import { styled } from '@mui/material'
import CustomButton from './CustomButton'

const styles = styled({
    bar:{       // class name
      paddingTop: "1.15rem",
      backgroundColor: "#fff",
      ['@media (max-width:780px)']:{flexMedia: "column"}, // media queries - for different devices and web-browser sizes
    },
    // logo: {
    //   width: "15%", 
    //   ['@media (max-width:780px)']: {display: "none"},
    // },
    // logoMobile:{
    //   width: "100%", 
    //   display: "none", 
    //   ['@media (max-width:780px)']: {display: "inline-block"},
    // },
    menuItem: {
      cursor: "pointer", 
      flexGrow: 1,
      "&:hover": {color:  "#4f25c8"},
      ['@media (max-width:780px)']: {paddingBottom: "1rem"},
    }

})

function NavBar() {
  const classes = styles()
  return (
    <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
      {/* <img src={logo} className={classes.logo}/>
      <img src={logoMobile} className={classes.logoMobile}/> */}
      <Typography variant="h5" className={classes.menuItem}>
        About Me
      </Typography>
      <Typography variant="h5" className={classes.menuItem}>
        Projects
      </Typography>
      <Typography variant="h5" className={classes.menuItem}>
        Resume
      </Typography>
      <Typography variant="h5" className={classes.menuItem}>
        Contact Me
      </Typography>
      <CustomButton txt="a test button!"></CustomButton>
    </Toolbar>   
  )
}

export default NavBar