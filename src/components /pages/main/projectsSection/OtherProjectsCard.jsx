import React from 'react'
import PropTypes from 'prop-types'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'var(--theme-dark)',
        borderRadius: '4px',
        height: '300px',
        transition: '0.2s',
        boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
        padding: '16px',
        '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'
        }
    },
    title: {
        color: 'var(--theme-mid-light)',
        fontWeight: '700',
        fontSize: 24,
    }
}))

function OtherProjectsCard(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={classes.title}>
                        Hello world
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

OtherProjectsCard.propTypes = {

}

export default OtherProjectsCard

