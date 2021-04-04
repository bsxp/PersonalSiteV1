import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import ImageGridA from './ImageGridA/imageGrid'
import ImageGridB from './ImageGridB/imageGrid'


function FeaturedProject(props) {

    const { index } = props

    const { title, description, images, externalLink, git, tools } = props.project

    return (
        <Grid container spacing={4} item xs={12} style={{marginTop: '64px'}}>
            <Grid item xs={2}>
                <Typography style={{textTransform: 'uppercase', color: 'var(--theme-mid)', textAlign: 'right', fontSize: 14, fontWeight: '700'}}>
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography style={{color: 'var(--theme-light)'}}>
                    {description}
                </Typography>
                <Typography>
                    {tools.map(tool => <span style={{color: 'var(--theme-mid-light)', marginRight: '16px'}}>{tool}</span>)}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {index === 0 && <ImageGridA images={images} />}
                {index === 1 && <ImageGridB images={images} />}
            </Grid>
        </Grid>
    )
}

FeaturedProject.propTypes = {

}

export default FeaturedProject

