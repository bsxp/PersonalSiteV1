import React from 'react'
import PropTypes from 'prop-types'
import { Button, makeStyles }  from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid var(--theme-mid)',
        color: 'var(--theme-mid)',
        textTransform: 'none',
        paddingLeft: '16px',
        paddingRight: '16px',
        fontSize: 16,
        marginTop: '32px',
        width: '150px',
        fontWeight: '400',
        margin: '0 auto',
        marginTop: '64px'
    }
}))

function LoadMoreButton({style, archivesSliced, ...props}) {

    const classes = useStyles()
    
    return (
        <Button className={classes.root} {...props}>
            {archivesSliced ? "Show more" : "Show less"}
        </Button>
    )
}

LoadMoreButton.propTypes = {

}

export default LoadMoreButton

