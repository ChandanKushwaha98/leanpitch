import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Training from './Training';
import Meetups from './Meetups';
import Webinars from './Webinars';
import Screen5 from './Screen5';
import Videos from './Videos';
import PMSpeaks from './PMSpeaks';
import Blogs from './Blogs';
import Podcasts from './Podcasts';

const useStyles = makeStyles({
    main: { display: 'flex' },
    leftPane: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1vw',
        // width:'15vw'
    },
    rightPane: {},
    menu: {
        padding: '1.8vh',
        backgroundColor: 'rgba(0,0,0,0.0)',
        borderRadius: '10px',
        marginBottom: '1vh',
        marginRight: '5vw',
        // width: '10vw',

        cursor: 'pointer',
        color: 'white',
        fontWeight: '700',
        fontSize: '1.1rem',
        // '&:hover': {
        //     width: '100vw',
        //     border: '4px solid yellow'
        // }

    }

})



const LeftPanel = () => {
    const [option, setOption] = useState('');
    const handleMouseHover = (e) => {
        console.log(e.target.innerHTML);

        setOption(e.target.innerHTML);
    }
    const handleMouseOut = () => {
        setOption('');
    }
    const classes = useStyles();
    return (
        <span className={classes.main}>
            <span className={classes.leftPane}>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Trainings</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Meetups</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Webinars</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Conference</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Videos</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>PM Speak Series</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Blogs</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Podcasts</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Be A Speaker</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>Be a Volunteer</span>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut}>About Us</span>
            </span>
            <span className={classes.rightPane}>{option === 'Trainings' && <Training />}
                {option === 'Meetups' && <Meetups />}
                {option === 'Webinars' && <Webinars />}
                {option === 'Conference' && <Screen5 />}
                {option === 'Videos' && <Videos />}
                {option === 'PM Speak Series' && <PMSpeaks />}
                {option === 'Blogs' && <Blogs />}
                {option === 'Podcasts' && <Podcasts />}
                

            </span>
        </span>
    )
}

export default LeftPanel
