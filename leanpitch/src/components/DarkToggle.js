import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const DarkToggle = () => {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value, setValue] = React.useState('Upcoming');
    return (
        <Box style={{ marginTop: '2vh', marginBottom: '5vh' }}>
            {value === 'Upcoming' && <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="none"
            >
                <Tab sx={{ border: '2px solid black', backgroundColor: 'white', textTransform: 'none' }} value="Upcoming" label="Upcoming" />
                <Tab sx={{ border: '2px solid black', backgroundColor: 'black', textTransform: 'none', color: 'white' }} value="Past" label="Past" />

            </Tabs>}
            {value === 'Past' && <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="none"
            >
                <Tab sx={{ border: '2px solid black', backgroundColor: 'black', textTransform: 'none', color: 'white' }} value="Upcoming" label="Upcoming" />
                <Tab sx={{ border: '2px solid black', backgroundColor: 'white', textTransform: 'none' }} value="Past" label="Past" />

            </Tabs>}
        </Box>
    )
}

export default DarkToggle
