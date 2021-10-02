import React from 'react'

import Card from './Card'
import { Box } from '@mui/system'
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({

// })
const Training = ({ border = 'none',bgColor = 'white' }) => {
    // const classes = useStyles();
    let cardValues = [
        { title: 'Design Thinking', subtitle: 'Upcoming Training', date: '8th Oct, 2021', bgColor: 'red' },
        { title: 'Certified Scrum Product Owner..', subtitle: 'Upcoming Training', date: '9th Oct, 2021', bgColor: 'green' },
        { title: 'Project Management Launchpad', subtitle: 'Upcoming Training', date: '22nd Oct, 2021', bgColor: 'blue' },
        { title: 'Advance Certified Scrum Product Owner', subtitle: 'Upcoming Training', date: '26th Oct, 2021', bgColor: 'yellow' },
        { title: 'Product Management Bootcamp', subtitle: 'Upcoming Training', date: 'Will be scheduled soon ', bgColor: 'grey' }]
    return (
        <Box style={{ backgroundColor: `${bgColor}`, display: 'flex', flexDirection: 'column', borderRadius: '10px', border: `${border}`,width: '85vw' }}>
            
            <Box style={{ display: 'flex' }}>{cardValues.map(i => <Card title={i.title} subtitle={i.subtitle} bgColor={i.bgColor} date={i.date} />)}
            </Box>
        </Box>
    )
}

export default Training
