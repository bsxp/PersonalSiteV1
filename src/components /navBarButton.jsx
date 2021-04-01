import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

function NavBarButton(props) {

    const { label } = props 

    return (
        <span className={styles.navBarButton}>
            {label}
        </span>
    )
}

NavBarButton.propTypes = {
    label: PropTypes.string.isRequired
}

export default NavBarButton

