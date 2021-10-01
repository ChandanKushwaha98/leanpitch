import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import Arrow from '@mui/icons-material/ArrowForward';
const useStyles = makeStyles({
    Screen5: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    heading: {
        paddingTop: '3vh',
        display: 'flex',
        justifyContent: 'center',
        color: 'white'
    }
})
const Screen5 = () => {
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);

    };
    const classes = useStyles();
    return (
        <Box className={classes.Screen5}>
            <Typography variant="h3" component="h3" className={classes.heading}>Our Conference</Typography>
            <Box>
                <ToggleButtonGroup style={{}} color="standard" value={alignment} exclusive onChange={handleChange}>
                    <ToggleButton value="upcoming">Upcoming</ToggleButton>
                    <ToggleButton value="past">Past</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box style={{ width: "70vw" }}>
                <Typography variant="body1" style={{color: 'white', }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum laboriosam minus? Ullam, repudiandae. Quas, reprehenderit! Exercitationem eum nam non labore. Sed saepe omnis consequuntur ipsam eius asperiores molestiae quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore ipsa consequatur harum ut omnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem numquam ex animi? Atque in enim reprehenderit minima dmnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem numquam ex animi? Atque in enim reprehenderit minnon labore. Sed saepe omnis consequuntur ipsam eius asperiores molestiae quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore ipsa consequatur harum ut omnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem numquam ex animi? Atque in enim reprehenderit minima dmnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iustoima doloremque quod? Lorem ipsoloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem
                </Typography></Box>
                <Button variant="outlined" endIcon={<Arrow />} style={{ borderRadius: 25,textTransform:'none',color:'white',backgroundColor:'red' }} >Notify Me</Button>
        </Box>
    )
}

export default Screen5
