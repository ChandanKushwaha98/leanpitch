import React from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system'

import { makeStyles } from '@mui/styles';
import ReactPlayer from 'react-player'
const useStyles = makeStyles({
    media: {
        height: '5vh',
        width: '2vw'
    }
})

const Screen6 = () => {
    const classes = useStyles()
    return (
        <Box style={{
            backgroundColor: 'white', display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Typography variant="h3" component="h3" >Videos</Typography>
            <Box style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
            </Box>

            <Typography variant="h3" component="h3" >PM Speak Series</Typography>
            <Box style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
            </Box>

            <Typography variant="h3" component="h3" >Blogs</Typography>
            <Box style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
            </Box>
            <Typography variant="h3" component="h3" >Podcasts</Typography>
            <Box style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
                <Box>
                    <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' className={classes.media} url='https://www.youtube.com/watch?v=7sDY4m8KNLc' /></Box>
            </Box>
        </Box>
    )
}

export default Screen6
