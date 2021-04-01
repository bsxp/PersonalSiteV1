import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

function HoverableImage(props) {

    const { image, className, label } = props

    const [ hovered, setHovered ] = React.useState(false)

    return (
    <React.Fragment>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={image} className={className} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}/>
        </div>
        <Typography style={{fontSize: 14, transition: '0.2s', textAlign: 'center', opacity: hovered ? 1 : 0, fontWeight: '500', color: 'rgb(60,60,60)', flexWrap: 'nowrap', marginTop: '8px'}}>
            {label}
        </Typography>
    </React.Fragment>
    )
}

HoverableImage.propTypes = {

}

export default HoverableImage

