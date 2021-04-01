import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import styles from '../../styles.module.css'

function AboutMeSection(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', height: 'calc(var(--geo-scalar) * 14)', marginRight: 'calc(var(--geo-scalar) * 10)', marginLeft: '15%', marginTop: 'calc(var(--geo-scalar) * 10)'}}>
            <Grid container style={{backgroundColor: 'var(--color-primary)', color: 'white', padding: '32px'}}>
                <Grid item xs={12} style={{display: 'flex', alignItems: 'center'}}>
                    <Typography style={{fontSize: 30}}>
                        Who am I?
                    </Typography>
                    <div style={{height: '1px', flexGrow: 1, backgroundColor: 'var(--color-secondary)', marginLeft: '16px'}}/>
                </Grid>
                <Grid item xs={8}>
                    <Typography style={{marginTop: '32px', fontSize: 18}}>
                    I am a self-taught developer who thrives on learning new technology and implementing real-world solutions.

                    I spend my free time playing Ultimate frisbee and building solutions to my day-to-day problems. If I'm not behind my computer, I'm on the a turf field catching discs or out enjoying a hike somewhere in the Pacific Northwest.

                    I have cofounded and built the product for two SaaS (software-as-a-service) companies, <span className={styles.link}>PopOver</span> and <span className={styles.link}>Lexeau</span>.
                    </Typography>
                </Grid>
            </Grid>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.4)', marginRight: 'calc(var(--geo-scalar) * 0.2)', marginTop: 'calc(var(--geo-scalar) * 0)'}}/>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.2)', marginRight: 'calc(var(--geo-scalar) * 0.2)', marginTop: 'calc(var(--geo-scalar) * -.5)'}}/>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.2)', marginRight: 'calc(var(--geo-scalar) * 0.2)', marginTop: 'calc(var(--geo-scalar) * -1)'}}/>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.2)', marginRight: 'calc(var(--geo-scalar) * 0.2)', marginTop: 'calc(var(--geo-scalar) * -.5)'}}/>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.2)', marginRight: 'calc(var(--geo-scalar) * 0.2)', marginTop: 'calc(var(--geo-scalar) * 0)'}}/>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.2)', marginRight: 'calc(var(--geo-scalar) * 0.2)', marginTop: 'calc(var(--geo-scalar) * 0.5)'}}/>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.2)', marginRight: 'calc(var(--geo-scalar) * 0.2)', marginTop: 'calc(var(--geo-scalar) * 1)'}}/>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.2)', marginRight: 'calc(var(--geo-scalar) * 0.2)', marginTop: 'calc(var(--geo-scalar) * 0.5)'}}/>
            <div className={styles.jiggle} style={{backgroundColor: 'var(--color-primary)', width: 'calc(var(--geo-scalar) * 0.6)', height: '100%', marginLeft: 'calc(var(--geo-scalar) * 0.2)', marginRight: 'var(--geo-scalar)'}}/>
        </div>
    )
}

AboutMeSection.propTypes = {

}

export default AboutMeSection

