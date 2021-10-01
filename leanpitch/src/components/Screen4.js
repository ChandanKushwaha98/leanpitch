import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Card from './Card'
import Meetups from './Meetups';
import Webinars from './Webinars';

const useStyles = makeStyles({})

const Screen4 = () => {

    let cardValues = [
        { title: 'Design Thinking', subtitle: 'Upcoming Training', date: '8th Oct, 2021', bgColor: 'red' },
        { title: 'Certified Scrum Product Owner..', subtitle: 'Upcoming Training', date: '9th Oct, 2021', bgColor: 'green' },
        { title: 'Project Management Launchpad', subtitle: 'Upcoming Training', date: '22nd Oct, 2021', bgColor: 'blue' },
        { title: 'Advance Certified Scrum Product Owner', subtitle: 'Upcoming Training', date: '26th Oct, 2021', bgColor: 'yellow' },
        { title: 'Product Management Bootcamp', subtitle: 'Upcoming Training', date: 'Will be scheduled soon ', bgColor: 'grey' }]
    const classes = useStyles();
    return (
        <Box style={{ background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}}>
            <Typography variant="h2" component="h2" className={classes.heading}>Our Trainings</Typography>
            <Box style={{ display: 'flex' }}>{cardValues.map(i => <Card title={i.title} subtitle={i.subtitle} bgColor={i.bgColor} date={i.date} />)}
            </Box>

            <Meetups />
            <Webinars />
        </Box>
    )
}

export default Screen4
