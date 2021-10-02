import React from 'react'
import { Box } from '@mui/system'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ReactPlayer from 'react-player'

const Meetups = ({ border = 'none',bgColor = 'white' }) => {

    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);

    };
    return (
        <Box style={{ backgroundColor: `${bgColor}`, borderRadius: '10px', border: `${border}`,width: '85vw' }}>
            
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <ToggleButtonGroup style={{ marginBottom: '2vh' }} color="standard" value={alignment} exclusive onChange={handleChange}>
                        <ToggleButton value="upcoming">Upcoming</ToggleButton>
                        <ToggleButton value="past">Past</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

            </Box>
            <Box style={{ marginRight: '2vw', marginBottom: '2vh' }}>
                <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />
            </Box>
        </Box>
    )
}

export default Meetups
