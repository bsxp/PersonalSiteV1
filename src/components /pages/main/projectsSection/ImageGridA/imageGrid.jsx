import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import LexeauDash from '../../../../../resources/projects/lexeau/lexeau-dash.png'
import LexeauDocumentation from '../../../../../resources/projects/lexeau/lexeau-documentation.png'
import LexeauSearch from '../../../../../resources/projects/lexeau/lexeau-search.png'
import LexeauAb from '../../../../../resources/projects/lexeau/lexeau-ab.png'
// import './imageStyles.css'

function ImageGridA(props) {
    return (
        <div className={styles.wrapper}>
            <div id={styles.upperLeftImage}> 
                <img src={LexeauDash} style={{width: '100%', height: 'auto'}}/>
            </div>
            <div id={styles.upperLeftHighlight}/>
            <div id={styles.upperRightImage}>
                <img src={LexeauSearch} style={{width: '100%', height: 'auto'}}/>
            </div>
            <div id={styles.upperRightHighlight}/>
            <div id={styles.lowerRightImage}>
                <img src={LexeauAb} style={{width: '100%', height: 'auto'}}/>
            </div>
            <div id={styles.lowerRightHighlight}/>
            <div id={styles.lowerLeftImage}>
                <img src={LexeauDocumentation} style={{width: 'auto', height: '100%'}}/>
            </div>
            <div id={styles.lowerLeftHighlight}/>
        </div>
    )
}

ImageGridA.propTypes = {

}

export default ImageGridA

