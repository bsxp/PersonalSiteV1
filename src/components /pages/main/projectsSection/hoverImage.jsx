import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './styles.module.css'


function HoverImage(props) {

    const { image } = props

    const [ hovered, setHovered ] = React.useState(false)

    const accentClasses = clsx({
        [styles.accentLineUpper]: true,
        [styles.accentLineHovered]: hovered
    })

    const lowerAccentClasses = clsx({
        [styles.accentLineLower]: true,
        [styles.accentLineLowerHovered]: hovered
    })
    return (
        <div className={styles.imageWrapper} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className={lowerAccentClasses}/>
            <div className={accentClasses}/>
            <img src={image} className={styles.image}/>
        </div>
    )
}

HoverImage.propTypes = {

}

export default HoverImage

