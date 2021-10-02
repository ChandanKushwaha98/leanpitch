import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import arrowimg from '../images/red_arrow.png';
import Button from '@mui/material/Button';
import Arrow from '@mui/icons-material/ArrowForward';


const useStyles = makeStyles({
    
    heading: {
        paddingTop: '4vh',
        color: 'yellow',
        display: 'flex',
        justifyContent: 'center'
    },
    red_arrow: {
        marginLeft: '50vw'
    },
    main_container: {
        display: 'flex',
        justifyContent: 'space-around'
    }, sub_container1: {
        width: '45vw',

    },
    sub_container2: {
        paddingTop: '6vh',
        height: '50vh'
    }

})
const Screen2 = ({border = 'none'}) => {
    const classes = useStyles();
    return (
        <Box style={{backgroundColor: 'black',border: `${border}`,width: '85vw'}}>
            <Typography variant="h2" component="h2" className={classes.heading}>
                Why We Matter?
            </Typography>
            <img src={arrowimg} alt="red_arrow" srcset="" className={classes.red_arrow} />
            <Box className={classes.main_container}>
                <Box className={classes.sub_container1}>
                    <Typography variant="h3" component="h3" color="white">Creative Thinking for creating an impact!
                    </Typography>
                    <Typography variant="body1" color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum laboriosam minus? Ullam, repudiandae. Quas, reprehenderit! Exercitationem eum nam non labore. Sed saepe omnis consequuntur ipsam eius asperiores molestiae quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore ipsa consequatur harum ut omnis expedita facere, dignissimos necessitatibus rerum, numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem numquam ex animi? Atque in enim reprehenderit minima doloremque quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias, ratione ab velit nostrum necessitatibus beatae labore, iusto non aliquid in ullam adipisci repellendus molestiae, temporibus itaque possimus nisi deleniti.lorem
                    </Typography>
                </Box>
                <Box className={classes.sub_container2}>
                    <iframe src='https://www.youtube.com/embed/S8KwpKxRmsc?autoplay=1&mute=1' width="100%" height="300"
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '2vh', paddingTop: '4vh' }}>
                <Button variant="outlined" endIcon={<Arrow />} style={{ borderRadius: 25, textTransform: 'none', color: 'white' }} >Join Our Community</Button>
            </Box>
        </Box>
    )
}

export default Screen2
