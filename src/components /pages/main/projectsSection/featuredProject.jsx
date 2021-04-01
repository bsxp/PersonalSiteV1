import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import images from '../../../../resources/logos'
import LaunchIcon from '@material-ui/icons/Launch';
import styles from './styles.module.css'
import HoverImage from './hoverImage'

function FeaturedProject({project, ...props}) {

    const { title, description, git, externalLink, tools, image } = project 

    const { isLeft } = props

    const hasGithub = Boolean(git)

    const hasLink = Boolean(externalLink)

    return (
        <div style={{display: 'flex', alignItems: 'top', position: 'relative', justifyContent: 'center'}}>
            {!Boolean(isLeft) && <div style={{width: '550px', height: '400px', position: 'relative'}} className={styles.projectImage}>
                <a href="https://lexeau.com/" rel="noopener noreferrer" target="_blank">
                    <HoverImage image={image} />
                </a>
            </div>}
            <div style={{marginLeft: '8px', height: '100%', zIndex: 20000, marginTop: 'calc(var(--geo-scalar) * 2)'}}>
                <div style={{backgroundColor: 'white', padding: '32px', marginLeft: isLeft ? '0px' : 'calc(var(--geo-scalar) * -3)', boxShadow: '4px 4px 10px -3px rgba(0,0,0,0.3)', borderRadius: '4px'}}>
                <Typography style={{fontSize: 24, fontWeight: '500', textAlign: isLeft ? 'left' : 'right'}}>
                    {title}
                </Typography>
                <Typography style={{fontSize: 16, fontWeight: '300', textAlign: isLeft ? 'left': 'right'}}>
                    {description}
                </Typography>
                </div>
                <div style={{marginTop: '32px', marginLeft: '', maxWidth: '300px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {tools.map(t => <span style={{fontWeight: '500', marginTop: '4px', paddingTop: '8px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px', borderRadius: '40px', backgroundColor: 'rgb(247,247,247)', marginLeft: '4px', color: grey[600], fontSize: 12}}>{t}</span>)}
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', marginTop: '32px'}}>
                    {hasGithub && (
                        <img src={images.GHLogo} style={{width: 'auto', height: '28px'}}/>
                    )}
                    {hasLink && (
                        <LaunchIcon style={{width: 'auto', height: '24px', marginLeft: '16px'}}/>
                    )}
                </div>
                {Boolean(isLeft) && (
                    <div style={{width: '550px', height: '400px', position: 'relative'}} className={styles.projectImage}>
                        <a href="https://lexeau.com/" rel="noopener noreferrer" target="_blank">
                            <HoverImage image={image} />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

FeaturedProject.propTypes = {
    project: PropTypes.object.isRequired
}

export default FeaturedProject

