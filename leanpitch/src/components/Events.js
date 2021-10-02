import React from 'react'
import { Box } from '@mui/system'
import Videos from './Videos';
import PMSpeaks from './PMSpeaks'
import Blogs from './Blogs'
import Podcasts from './Podcasts'
import { Typography } from '@mui/material';
import Toggle from './Toggle';


const Screen6 = ({ border = 'none' }) => {
    return (
        <Box style={{
            backgroundColor: 'white', display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: `${border}`

        }}>
            <Typography variant="h3" component="h3" style={{ color: 'black', marginTop: '4vh' }} >Videos</Typography>
            <Videos />
            <Typography variant="h3" component="h3" style={{ color: 'black', marginTop: '4vh' }} >PM Speaks Series</Typography>
            <PMSpeaks />
            <Typography variant="h3" component="h3" style={{ color: 'black', marginTop: '4vh' }} >Blogs</Typography>
            <Blogs />
            <Typography variant="h3" component="h3" style={{ color: 'black', marginTop: '4vh' }} >Podcasts</Typography>
            <Podcasts />
        </Box>
    )
}

export default Screen6
