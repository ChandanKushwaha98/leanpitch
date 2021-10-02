import React from 'react'
import { Box } from '@mui/system'
import ReactPlayer from 'react-player'
import Toggle from './Toggle';

const Meetups = ({ border = 'none',bgColor = 'white' }) => {

    
    
    return (
        <Box style={{ backgroundColor: `${bgColor}`, borderRadius: '0px', border: `${border}`,width: '85vw',height:'85vh', }}>
            
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Toggle/>
            </Box>
            <Box style={{marginLeft: '2vw', marginRight: '2vw', marginBottom: '2vh' }}>
                <ReactPlayer controls autoPlay='autoPlay' width='240px' height='120px' url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />
            </Box>
        </Box>
    )
}

export default Meetups
