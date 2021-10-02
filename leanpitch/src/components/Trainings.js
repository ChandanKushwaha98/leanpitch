import React from 'react'
import Meetups from './Meetups';
import Webinars from './Webinars';
import Training from './Training';
import { Typography } from '@mui/material';

const Events = ({ border = 'none' }) => {
    return (
        <span style={{ background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: `${border}` }}>
            <Typography variant="h2" component="h2" style={{ color: 'black' }}>Our Trainings</Typography>
            <Training />
            <Typography variant="h2" component="h2" style={{ display: 'flex', justifyContent: 'center', color: 'black', }}>Our Meetups</Typography>
            <Meetups />
            <Typography variant="h2" component="h2" style={{ display: 'flex', justifyContent: 'center', color: 'black', }}>Our Webinars</Typography>
            <Webinars />
        </span>
    )
}

export default Events
