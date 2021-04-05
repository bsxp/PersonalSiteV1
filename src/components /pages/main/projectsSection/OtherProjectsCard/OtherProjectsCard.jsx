import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import './styles.css'

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
        },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        color: 'var(--theme-mid-light)',
        fontWeight: '700',
        fontSize: 24,
        width: '100%',
        textAlign: 'left'
    },
    description: {
        color: 'var(--theme-light)',
        fontWeight: '300',
        width: '100%',
        textAlign: 'left',
        flexGrow: 1
    },
    tools: {
        textAlign: 'left',
        flexWrap: 'none',
        overflow: 'hidden',
        wordWrap: 'none',
        width: '100%',
    }
}))

function OtherProjectsCard(props) {

    const classes = useStyles()

    const { title, description, git, externalLink, tools } = props.project

    const toolClasses = clsx({
        [classes.tools]: true,
        "toolClass": true
    })

    return (
        <div className={classes.root}>
                <Typography className={classes.title}>
                    {title}
                </Typography>
                <Typography className={classes.description}>
                    {description}
                </Typography>
                <div className={toolClasses}>
                        {tools.slice(0, 3).map(tool => <span style={{color: 'var(--theme-mid)', marginRight: '16px', fontSize: 12, fontWeight: '500'}}><nobr>{tool}</nobr></span>)}
                </div>
        </div>
    )
}

OtherProjectsCard.propTypes = {
    project: PropTypes.object.isRequired
}

export default OtherProjectsCard

