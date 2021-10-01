import { Box } from '@mui/system'
import React from 'react'

const HoverableDiv = ({ handleMouseOver, handleMouseOut, text }) => {
    return (

        <Box style={{display:'flex'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <span>{text}</span>
        </Box>

    )
}

export default HoverableDiv
