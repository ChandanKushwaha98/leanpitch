import React from 'react'
import Meetups from './Meetups';
import Webinars from './Webinars';
import Training from './Training';

const Screen4 = () => {
    return (
        <span style={{ background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
            <Training />
            <Meetups />
            <Webinars />
        </span>
    )
}

export default Screen4