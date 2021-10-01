import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import ToolBar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import logo from '../images/productwhite.png'

const useStyles = makeStyles({
    header: {
        background: 'rgb(89, 86, 89) !important',
        // height:'48px'
    },
    ToolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo: {
        height: '50px',

    },
    subscribe_tab: {
        background: 'red !important'
    }
})
const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header} >
            <ToolBar className={classes.ToolBar}>
                <span className={classes.ToolBar}>
                    <img src={logo} className={classes.logo} alt="" srcset="" />
                    <Tab label="Leanpitch" href="/trash" />
                </span>
                <Box>
                    <Box>
                        <Tab className={classes.subscribe_tab} label="Subscribe" href="/subscribe" />
                        <Tab label="Contact Us" href="/contact_us" />
                    </Box>
                </Box>
            </ToolBar>
        </AppBar>
    )
}

export default Navbar
