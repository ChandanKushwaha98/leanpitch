import React from 'react'
import { Box } from '@mui/system'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Toggle from './Toggle';

const Meetups = ({ border = 'none', bgColor = 'white' }) => {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        { label: 'Dangal', year: 2016 },
        { label: 'The Sting', year: 1973 },
        { label: 'Bicycle Thieves', year: 1948 },
        { label: 'The Kid', year: 1921 },
        { label: 'Inglourious Basterds', year: 2009 },
        { label: 'Snatch', year: 2000 },
        { label: '3 Idiots', year: 2009 },
        { label: 'Monty Python and the Holy Grail', year: 1975 },
    ];
    
    return (
        <Box style={{ backgroundColor: `${bgColor}`, borderRadius: '0px', border: `${border}`, width: '85vw',height:'85vh' }}>
            
            <Box style={{ display: 'flex', justifyContent: 'center',alignItem:'center',marginTop:'5vh' }}>
                <Box>
                    <Toggle/>
                </Box>
                <Box style={{ marginLeft: '5vw' }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        backgroundColor='dark'
                        options={top100Films}
                        sx={{ width: 200, height: '.5vh' }}
                        renderInput={(params) => <TextField {...params} label="Filter By City" />}
                    />
                </Box>
            </Box>
            <Typography variant="h5" component="h5" style={{ margin: '4vh', color: 'black',textAlign:'center' }}>Awesome Meetups would be here soon!</Typography>
        </Box>
    )
}

export default Meetups
