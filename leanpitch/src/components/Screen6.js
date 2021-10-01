import React from 'react'
import { Box } from '@mui/system'
import Videos from './Videos';
import PMSpeaks from './PMSpeaks'
import Blogs from './Blogs'
import Podcasts from './Podcasts'


const Screen6 = () => {
        return (
        <Box style={{
            backgroundColor: 'white', display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Videos />
            <PMSpeaks />
            <Blogs />
            <Podcasts />

        </Box>
    )
}

export default Screen6
