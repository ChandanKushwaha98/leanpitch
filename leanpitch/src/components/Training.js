import React from 'react'
import { Typography } from '@mui/material';
import Card from './Card'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    
})
const Training = () => {
    const classes = useStyles();
    let cardValues = [
        { title: 'Design Thinking', subtitle: 'Upcoming Training', date: '8th Oct, 2021', bgColor: 'red' },
        { title: 'Certified Scrum Product Owner..', subtitle: 'Upcoming Training', date: '9th Oct, 2021', bgColor: 'green' },
        { title: 'Project Management Launchpad', subtitle: 'Upcoming Training', date: '22nd Oct, 2021', bgColor: 'blue' },
        { title: 'Advance Certified Scrum Product Owner', subtitle: 'Upcoming Training', date: '26th Oct, 2021', bgColor: 'yellow' },
        { title: 'Product Management Bootcamp', subtitle: 'Upcoming Training', date: 'Will be scheduled soon ', bgColor: 'grey' }]
    return (
        <span style={{ background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',borderRadius:'10px' }}>
            <Typography variant="h2" component="h2" style={{color:'black'}}>Our Trainings</Typography>
            <span style={{ display: 'flex' }}>{cardValues.map(i => <Card title={i.title} subtitle={i.subtitle} bgColor={i.bgColor} date={i.date} />)}
            </span>
        </span>
    )
}

export default Training
