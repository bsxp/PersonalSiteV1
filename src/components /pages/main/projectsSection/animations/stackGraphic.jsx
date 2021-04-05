import React from 'react'
import PropTypes from 'prop-types'
import  './svgStyles.css'

function StackGraphic(props) {

    const { style } = props

    return (
        <svg width="60" height="86" viewBox="0 0 84 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{...style}}>
            <g id="stack-group">
                <path id="bottom" opacity="0.9" d="M42 59.397L84 78.3655L42 97.3383L2.61771e-06 78.3655L42 59.397Z"/>
                <path id="mid-bottom" opacity="0.9" d="M42 48.4873L84 67.4559L42 86.4287L2.61771e-06 67.4559L42 48.4873Z"/>
                <path id="mid-top" opacity="0.9" d="M42 36.3655L84 55.334L42 74.3068L2.61771e-06 55.334L42 36.3655Z"/>
                <path id="top" opacity="0.9" d="M42 23.0315L84 42L42 60.9728L2.61771e-06 42L42 23.0315Z"/>
            </g>
        </svg>
    )
}

StackGraphic.propTypes = {

}

export default StackGraphic

