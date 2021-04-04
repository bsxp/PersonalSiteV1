import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import styles from '../../../styles.module.css'
import ChrisImage from '../../../../resources/images/chris.jpeg'
import imageStyles from './about.module.css'

function AboutMeSection(props) {

    const [imageHovered, setImageHovered] = React.useState(false)

    return (
        <Grid container style={{marginTop: '250px', marginBottom: '250px'}}>
            <Grid item xs={2}/>
            <Grid item xs={6} container spacing={4}>
                <Grid item xs={2}>
                    <Typography style={{textTransform: 'uppercase', color: 'var(--theme-mid-dark)', textAlign: 'right', fontSize: 14, fontWeight: '700'}}>
                        About me
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>
                        I am a full-stack software engineer who is passionate about solving real-world problems with elegant software solutions. I am the Founder & Principal Software Engineer of Lexeau, a company that specializes in capturing digital audiences through real-time adaptive web content.
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <div style={{position: 'relative', height: '240px', width: '300px'}} onMouseEnter={() => setImageHovered(true)} onMouseLeave={() => setImageHovered(false)}>
                        <div style={{position: 'absolute', height: '100%', width: '100%', borderRadius: '4px', backgroundColor: 'var(--theme-mid-dark)', top: imageHovered ? 32 : 16, left: imageHovered ? 32 : 16, transition: '0.3s ease'}}/>
                        <div style={{position: 'absolute', height: '100%', width: '100%', borderRadius: '4px', backgroundColor: 'var(--theme-mid)', top: imageHovered ? 24 : 12, left: imageHovered ? 24 : 12, transition: '0.3s ease', opacity: 1}}/>
                        <div style={{position: 'absolute', height: '100%', width: '100%', borderRadius: '4px', backgroundColor: 'var(--theme-mid-light)', top: imageHovered ? 16 : 8, left: imageHovered ? 16 : 8, transition: '0.3s ease',  opacity: 1}}/>
                        <div className={imageStyles.imageWrapper} style={{overflow: 'hidden', borderRadius: '4px', height: '240px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', filter: 'brightness(120%)', boxShadow: imageHovered ? '5px 5px 15px -1px rgba(0,0,0,0.3)' : 'none', transition: '0.2s'}}>
                            <img src={ChrisImage} style={{height: '175%', width: 'auto', marginTop: '30px'}}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={3}/>
        </Grid>
    )
}

AboutMeSection.propTypes = {

}

export default AboutMeSection

