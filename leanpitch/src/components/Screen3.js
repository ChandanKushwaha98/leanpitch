import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import img from '../pt_lab_image.png';
import Button from '@mui/material/Button';
import Arrow from '@mui/icons-material/ArrowForward';
const useStyles = makeStyles({
    sub_container1: {
        width: '40vw'
    },
    heading: {
        paddingTop: '4vh',
        color: 'red',
    }, button: {

    }
})

const Screen3 = () => {
    const classes = useStyles();
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'space-around', alignItems: 'center', height: '100vh',

        }}>
            <Box className={classes.sub_container1}>
                <Typography variant="h2" component="h2" className={classes.heading}>Leanpitch Thinking Labs
                </Typography>
                <Typography variant="body1" color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum laboriosam minus? Ullam, repudiandae. Quas, reprehenderit! Exercitationem eum nam non labore. Sed saepe omnis consequuntur ipsam eius asperiores molestiae quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore ipsa consequatur harum ut omnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem
                </Typography>
                <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '4vh' }}>
                    <Button variant="contained" endIcon={<Arrow />} style={{ borderRadius: 25, backgroundColor: 'red', textTransform: 'none' }} >View Details</Button>
                    <Button variant="contained" endIcon={<Arrow />} style={{ borderRadius: 25, backgroundColor: 'red', textTransform: 'none' }} >Register Now</Button>
                </Box></Box>

            <Box >
                <img className={classes.sub_container2_img} src={img} style={{ height: '60vh', marginTop: '16vh' }} alt="" />
            </Box>
        </Box>
    )
}

export default Screen3
