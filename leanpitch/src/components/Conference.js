import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Arrow from '@mui/icons-material/ArrowForward';
import DarkToggle from './DarkToggle';

const Screen5 = ({ border = 'none', bgColor = 'black' }) => {

    return (
        <Box style={{
            border: `${border}`,
            height: '85vh',
            backgroundColor: `${bgColor}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0px',
            textAlign: 'center',
            width: '85vw'
        }}>

            <DarkToggle style={{ marginTop: '5vh', marginBottom: '5vh' }} />

            <Box >
                <Typography variant="body1" style={{ color: 'white',wordWrap:'break-word',textAlign: 'center',marginLeft:'8vw',marginRight:'8vw' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum laboriosam minus? Ullam, repudiandae. Quas, reprehenderit! Exercitationem eum nam non labore. Sed saepe omnis consequuntur ipsam eius asperiores molestiae quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore ipsa consequatur harum ut omnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem numquam ex animi? Atque in enim reprehenderit minima dmnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem numquam ex animi? Atque in enim reprehenderit minnon labore. Sed saepe omnis consequuntur ipsam eius asperiores molestiae quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore ipsa consequatur harum ut omnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem numquam ex animi? Atque in enim reprehenderit minima dmnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iustoima doloremque quod? Lorem ipsoloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem
                </Typography>
            </Box>
            <Button variant="outlined" endIcon={<Arrow />} style={{ borderRadius: 25, textTransform: 'none', color: 'white', backgroundColor: 'red' }} >Notify Me</Button>
        </Box>
    )
}

export default Screen5
