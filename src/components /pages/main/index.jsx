import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import TransitionText from './transitionText'
import { grey } from '@material-ui/core/colors'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AboutMeSection from './AboutMeSection'
import ToolbeltSection from './toolbeltSection'
import styles from '../../styles.module.css'
import AccentLines from '../geometry/accentLines'
import ProjectsSection from './projectsSection'
import CodeIcon from '@material-ui/icons/Code';
import GithubSquares from './Hero/GithubSquares'


const useStyles = makeStyles(theme => ({
    heroPreText: {
        fontSize: 24,
        fontFamily: "var('--font-primary')",
        color: 'var(--theme-mid)'
    },
    heroMainText: {
        fontSize: 56,
        fontWeight: '700',
        fontFamily: "var('--font-primary')"
    },
    heroSubText: {
        fontSize: 56,
        fontFamily: "var(--font-primary)"
    },
    heroContainer: {
        height: 'calc(var(--geo-scalar) * 30)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20%',
        paddingRight: '20%'
    },
    locationContainer: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        marginTop: '32px'
    },
    location: {
        color: grey[400],
        fontWeight: '400',
        fontSize: 20
    },
    locationIcon: {
        width: 'auto',
        height: '20px',
        color: grey[400],
        marginRight: '8px',
    }
}))

function MainPage(props) {

    const classes = useStyles()

    const [index, set] = React.useState(0)

    React.useEffect(() => {
        const ivl = void setInterval(() => set(state => (state + 1) % 3), 5000)

        return () => {
            clearTimeout(ivl);
          };
    }, [])


    return (
        <div style={{position: 'relative'}}>
            <div className={classes.heroContainer}>
                <Grid container style={{height: '100%'}}>
                    <Grid item xs={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 'calc(var(--geo-scalar) * 6)' }}>
                        <Typography className={classes.heroPreText}>
                            Hello world,
                        </Typography>
                        <Typography className={classes.heroMainText}>
                            My name is Chris Porter.
                        </Typography>
                        <Typography className={classes.heroSubText}>
                            I am a&nbsp;
                            <TransitionText label="problem solver." showOn={0} currentIndex={index}/>
                            <TransitionText label="software engineer." showOn={1} currentIndex={index}/>
                            <TransitionText label="programming envangelist." showOn={2} currentIndex={index}/>
                        </Typography>
                        <div className={classes.locationContainer}>
                            <LocationOnIcon className={classes.locationIcon}/>
                            <Typography className={classes.location}>
                                Tacoma, WA, USA
                            </Typography>
                        </div>
                        <Button style={{border: '1px solid var(--theme-mid)', color: 'var(--theme-mid)', textTransform: 'none', paddingLeft: '16px', paddingRight: '16px', fontSize: 16, marginTop: '32px', width: '150px', fontWeight: '400'}}>
                            Reach out
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <GithubSquares />
                    </Grid>
                </Grid>
            </div>
            <div>
                <AboutMeSection/>
            </div>
                <ToolbeltSection />
            <div>
                <ProjectsSection />
            </div>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

