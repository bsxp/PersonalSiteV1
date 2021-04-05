import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Typography, makeStyles } from '@material-ui/core'
import FeaturedProject from './featured'
import StackGraphic from './animations/stackGraphic'
import BracketGraphic from './animations/bracketGraphic'
import OtherProjectsCard from './OtherProjectsCard/OtherProjectsCard'
import LoadMoreButton from './LoadMoreButton'
import { featuredProjects, archiveProjects } from './projects'

function ProjectsSection(props) {

    const [archivesSliced, setArchivesSliced] = React.useState(true)

    const switchArchiveDisplay = () => {
        setArchivesSliced(!archivesSliced)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', backgroundColor: '#0e1736', paddingTop: '128px', paddingBottom: '128px'}}>
            <Grid container>
                <Grid item md={3}/>
                <Grid item xs={6} style={{display: 'flex', alignItems: 'center'}}>
                    <StackGraphic style={{marginRight: '32px'}}/>
                    <Typography style={{fontSize: 30, fontWeight: '500', color: 'var(--theme-mid-light)'}}>
                        Featured projects
                    </Typography>
                </Grid>
                <Grid item md={3}/>

                <Grid item md={1}/>
                <Grid item container xs={10}>
                    {featuredProjects.map((project, index) => <FeaturedProject project={project} index={index}/>)}
                </Grid>
                <Grid item md={1}/>
                <Grid item md={3}/>
                <Grid item container md={6} xs={12}>
                    <Grid item xs={12}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '64px'}}>
                            <BracketGraphic style={{marginRight: '32px'}}/>
                            <Typography style={{color: 'var(--theme-mid-light)', fontSize: 36, fontWeight: '700'}}>
                                Other projects
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container spacing={3}>
                        {archiveProjects.slice(0, archivesSliced ? 3 : archiveProjects.length - 1).map((project, index) => (
                            <Grid item xs={4}>
                                <OtherProjectsCard key={index} project={project}/>
                            </Grid>
                            ))}
                    </Grid>
                    <LoadMoreButton onClick={switchArchiveDisplay} archivesSliced={archivesSliced}/>
                </Grid>
                <Grid item md={3}/>
            </Grid>
        </div>
    )
}

ProjectsSection.propTypes = {

}

export default ProjectsSection

