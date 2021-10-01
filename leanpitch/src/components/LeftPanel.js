import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
const useStyles = makeStyles({
    Stack: {
        marginLeft: '1vw',
    },
    menu: {
        padding: '1.8vh',
        backgroundColor: 'rgba(0,0,0,0.0)',
        borderRadius: '10px',
        marginBottom: '1vh',
        width: '10vw',
        cursor: 'pointer',
        '&:hover': {
            width: '90vw',
            border: '4px solid yellow'
        }

    }

})

const LeftPanel = () => {
    const classes = useStyles();
    return (
        <Box className="leftPane">
            <Box className={classes.Stack}>
                <Box className={classes.menu}>Trainings</Box>
                <Box className={classes.menu}>Meetups</Box>
                <Box className={classes.menu}>Webinars</Box>
                <Box className={classes.menu}>Conference</Box>
                <Box className={classes.menu}>Videos</Box>
                <Box className={classes.menu}>PM Speak Series</Box>
                <Box className={classes.menu}>Blogs</Box>
                <Box className={classes.menu}>Podcasts</Box>
                <Box className={classes.menu}>Be A speaker</Box>
                <Box className={classes.menu}>Be a Volunteer</Box>
                <Box className={classes.menu}>About Us</Box>
            </Box>
        </Box>
    )
}

export default LeftPanel
