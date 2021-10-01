import React from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/system'

const useStyles = makeStyles({
    media: {
        height: '5vh',
        width: '2vw'
    }
})
const Videos = () => {
    const classes = useStyles()
    return (
        <Box style={{
            backgroundColor: 'white', display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            paddingBottom: '2vh'
        }}>
            <Typography variant="h3" component="h3" style={{ color: 'black' }} >Videos</Typography>
            <Box style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between', }}>
                <Box style={{ marginRight: '2vw' }}>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box style={{ marginRight: '2vw' }} >
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box style={{ marginRight: '2vw' }}>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
            </Box>
        </Box>
    )
}

export default Videos