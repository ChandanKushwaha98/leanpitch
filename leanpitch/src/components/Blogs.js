import React from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'

const useStyles = makeStyles({
    media: {
        height: '5vh',
        width: '2vw'
    }
})
const Blogs = ({border = 'none',bgColor = 'white'}) => {
    const classes = useStyles()
    return (
        <Box style={{
            backgroundColor: `${bgColor}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0px',
            paddingBottom: '2vh',
            border: `${border}`,
            width: '85vw'
        }}>
           
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


export default Blogs
