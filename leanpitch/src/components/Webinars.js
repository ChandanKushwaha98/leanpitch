import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Webinars = () => {
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);

    };

    return (
        <Box style={{backgroundColor:'white',borderRadius:'10px'}}>
            <Typography variant="h2" component="h2" style={{color:'black'}}>Our Webinars</Typography>
            <Box style={{ display: 'flex',justifyContent: 'center' }}>
                <Box>
                    <ToggleButtonGroup style={{}} color="standard" value={alignment} exclusive onChange={handleChange}>
                        <ToggleButton value="upcoming">Upcoming</ToggleButton>
                        <ToggleButton value="past">Past</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

            </Box>
        </Box>
    )
}

export default Webinars
