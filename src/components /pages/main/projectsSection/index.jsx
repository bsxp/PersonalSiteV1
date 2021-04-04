import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Typography, makeStyles } from '@material-ui/core'
import FeaturedProject from './featured'
import LexeauSS from '../../../../resources/images/lexeauHome.png'
import StackGraphic from './animations/stackGraphic'
import BracketGraphic from './animations/bracketGraphic'
import OtherProjectsCard from './OtherProjectsCard'
import LoadMoreButton from './LoadMoreButton'


const projects = [
    {
        title: "Lexeau",
        description: "A SaaS platform for adaptive web content",
        image: LexeauSS,
        git: "https://github.com/",
        externalLink: "https://lexeau.com/",
        tools: [
            "React",
            "Node.js",
            "Python",
            "AWS"
        ]
    },
    {
        title: "PopOver",
        description: "An iOS platform to connect college students with gig work demand",
        image: null,
        git: "https://github.com/",
        tools: [
            "Swift",
            "Firebase",
            "Stripe API"
        ]
    }
]

function ProjectsSection(props) {
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

                <Grid item md={3}/>
                <Grid item container xs={6}>
                    {projects.map((project, index) => <FeaturedProject project={project} index={index}/>)}
                </Grid>
                <Grid item md={3}/>
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
                        {new Array(6).fill(0).map((_, index) => (
                            <Grid item xs={4}>
                                <OtherProjectsCard key={index}/>
                            </Grid>
                            ))}
                    </Grid>
                    <LoadMoreButton />
                </Grid>
                <Grid item md={3}/>
            </Grid>
        </div>
    )
}

ProjectsSection.propTypes = {

}

export default ProjectsSection

