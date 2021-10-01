import React from 'react'
import { Box } from '@mui/system'
import img from '../random1.jpg'
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material'
const useStyles = makeStyles({
    card: {
        width: '12vw',
        height: 'maxContent',
        // height: '25vh',
        // backgroundColor: 'green !important',
        borderRadius: '10px',
        margin:'2vw'
    },
    image: {
        height: '7vh',
        borderRadius: '50%',
        marginTop: '2vh',
        marginLeft: '2vh'
    },
    title: {
        marginLeft: '1vh',
        overflowWrap: 'breakWord',
        color: 'white',
        fontWeight: '700',
        fontSize: '2vh'
    },
    subtitleContainer: {
        marginTop: '1vh',
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    subtitle1: {
        marginLeft: '1vh',
        overflowWrap: 'breakWord',
        color: 'white',

        fontSize: '1.8vh'
    },
    subtitle2: {
        marginLeft: '1vh',
        overflowWrap: 'breakWord',
        color: 'white',
        fontWeight: '700',
        fontSize: '1.8vh'
    },

})
const Card = ({title,bgColor,subtitle,date}) => {
    const classes = useStyles();
    
    return (
        <Box className={classes.card} backgroundColor={bgColor}>
            <img src={img} alt="" className={classes.image} />
            <Box className={classes.title}>{title}</Box>

            <Box className={classes.subtitleContainer}>
                <Box className={classes.subtitle1}>{subtitle}</Box>
                <Box className={classes.subtitle2}>{date}</Box>
            </Box>
            <Box><Button variant="contained" style={{ borderRadius: 25, backgroundColor: 'white', textTransform: 'none', fontSize: 'small', color: 'black', fontWeight:'600',margin: '1vh 3vw',height:'3.2vh' }} >Register</Button></Box>
        </Box>
    )
}

export default Card
