import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Training from './Training';
import Meetups from './Meetups';
import Webinars from './Webinars';
import Conference from './Conference'
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
        width: '12vw'
    },
    rightPane: { display: 'flex', },
    menu: {
        padding: '1.7vh',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '0px',
        marginBottom: '1vh',
        cursor: 'pointer',
        color: 'white',
        fontWeight: '600',
        fontSize: '1.1rem',
        textAlign:'left'
    }

})

const LeftPanel = () => {
    const [option, setOption] = useState('');
    const handleMouseEnter = e => {
        // e.target.style.background = "green"
        // console.log(e.target,"Target")
    }
    const handleMouseHover = (e) => {
        setOption(e.target.innerHTML);

        e.target.style.width = '8.5vw'
        e.target.style.background = "yellow"
    }
    const handleMouseOut = (e) => {
        setOption('');
        e.target.style.background = 'rgba(0,0,0,0.1)'
    }
    const classes = useStyles();
    return (
        <span className={classes.main}>
            <span className={classes.leftPane}>
                <span className={classes.menu} onMouseOver={(e) => handleMouseHover(e)} onMouseOut={handleMouseOut} onMouseEnter={(e) => { handleMouseEnter(e) }}>Trainings</span>
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
            <span className={classes.rightPane}>
                {option === 'Trainings' && <Training border='5px solid yellow' bgColor='rgba(0,0,0,0.1)' />}
                {option === 'Meetups' && <Meetups border='5px solid yellow' bgColor='rgba(255,255,255,0.5)' />}
                {option === 'Webinars' && <Webinars border='5px solid yellow' bgColor='rgba(0,0,0,0.1)' />}
                {option === 'Conference' && <Conference border='5px solid yellow' bgColor='rgba(0,0,0,0.1)' />}
                {option === 'Videos' && <Videos border='5px solid yellow' bgColor='rgba(0,0,0,0.1)' />}
                {option === 'PM Speak Series' && <PMSpeaks border='5px solid yellow' bgColor='rgba(0,0,0,0.1)' />}
                {option === 'Blogs' && <Blogs border='5px solid yellow' bgColor='rgba(0,0,0,0.1)' />}
                {option === 'Podcasts' && <Podcasts border='5px solid yellow' bgColor='rgba(0,0,0,0.1)' />}
            </span>
        </span>
    )
}

export default LeftPanel
