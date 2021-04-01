import React from 'react'
import clsx from 'clsx'
import { useTransition, animated } from "react-spring";
import styles from '../../styles.module.css'

const options = ["problem solver.", "software engineer.", "UI/UX designer.", "programming evangelist."]

function TransitionText(props) {

    const { label, showOn, currentIndex} = props

    const transitions = useTransition(currentIndex === showOn ? label : "", null, {
        from:  { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        leave: { transform: 'translate3d(0,40px,0)', opacity: 0 },
    });

    const classes = clsx({
        [styles.problemSolver]: showOn === 0,
        [styles.softwareDeveloper]: showOn === 1,
        [styles.evangelist]: showOn === 2,
    })

    return transitions.map(
        ({ item, key, props }) =>
            item && (
                <animated.span key={key} style={{...props, fontSize: 56, position: 'absolute'}} className={classes}>
                    {item}
                </animated.span>
            )
    );

}

export default TransitionText