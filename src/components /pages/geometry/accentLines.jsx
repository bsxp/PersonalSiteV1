import React from 'react'
import PropTypes from 'prop-types'
import styles from './geometry.module.css'

function AccentLines(props) {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.primary}/>
                <div className={styles.secondary}/>
                <div className={styles.tertiary}/>
                <div className={styles.quarternary}/>
            </div>
        </div>
    )
}

AccentLines.propTypes = {

}

export default AccentLines

