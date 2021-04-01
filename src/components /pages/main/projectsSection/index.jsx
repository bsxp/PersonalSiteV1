import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import FeaturedProject from './featuredProject'
import LexeauSS from '../../../../resources/images/lexeauHome.png'


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
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <Grid container>
                <Grid item md={3}/>
                <Grid item xs={6}>
                    <Typography style={{fontSize: 30, fontWeight: '500', marginBottom: '64px'}}>
                        Featured projects
                    </Typography>
                </Grid>
                <Grid item md={3}/>

                <Grid item md={3}/>
                <Grid item xs={6}>
                    {projects.map((project, index) => <FeaturedProject project={project} isLeft={index % 2}/>)}
                </Grid>
                <Grid item md={3}/>
            </Grid>
        </div>
    )
}

ProjectsSection.propTypes = {

}

export default ProjectsSection

