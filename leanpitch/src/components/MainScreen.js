import React from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import bgimg from '../images/mainPage.jpg'
import LeftPanel from './LeftPanel';

const useStyles = makeStyles({
    MainScreen: {
        backgroundImage: `url(${bgimg})`,
        width: '98vw',
        zIndex: '0',
        height: '88vh',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingLeft: '.5rem',
        paddingTop: '1rem',
        marginTop: '64px',
        backgroundColor: 'black',
        color: 'white',
        fontWeight:'700'
    }
});
const MainScreen = () => {
    const classes = useStyles();
    return (
        <Box className={classes.MainScreen}><LeftPanel />
        </Box>
    )
}

export default MainScreen
