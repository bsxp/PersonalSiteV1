import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Button, GridListTile, GridList, Tab, Tabs, withStyles, Fade } from '@material-ui/core'
import styles from '../../../styles.module.css'
import images from '../../../../resources/logos'
import HoverableImage from './hoverableImage'
import { useTransition, animated } from 'react-spring'
import { grey } from '@material-ui/core/colors'


const technologies = [
    {
        category: "Languages & Frameworks",
        items: [
            {
                name: "Node.js",
                image: images.NodeLogo
            },
            {
                name: "React",
                image: images.ReactLogo
            },
            {
                name: "Python",
                image: images.PythonLogo
            },
            {
                name: "HTML",
                image: images.HTMLLogo
            },
            {
                name: "CSS",
                image: images.CSSLogo
            },
            {
                name: "JavaScript",
                image: images.JSLogo
            },
            {
                name: "Swift",
                image: images.SwiftLogo
            },
        ]
    },
    {
        category: "Cloud",
        items: [
            {
                name: "AWS Lambda",
                image: images.LambdaLogo
            },
            {
                name: "AWS API Gateway",
                image: images.APIGatewayLogo
            },
            {
                name: "AWS Route 53",
                image: images.Route53Logo
            },
            {
                name: "AWS RDS",
                image: images.RDSLogo
            },
            {
                name: "AWS DynamoDB",
                image: images.DDBLogo
            },
            {
                name: "Google Firebase",
                image: images.FirebaseLogo
            },
            {
                name: "Heroku",
                image: images.HerokuLogo
            },
        ]
    },
    {
        category: "Database",
        items: [
            {
                name: "AWS RDS",
                image: images.RDSLogo
            },
            {
                name: "AWS DynamoDB",
                image: images.DDBLogo
            },
            {
                name: "Google Firebase",
                image: images.FirebaseLogo
            },
            {
                name: "PostgreSQL",
                image: images.PostgresLogo
            },
        ]
    },
    {
        category: "Design",
        items: [
            {
                name: "Sketch",
                image: images.SketchLogo
            },
            {
                name: "Adobe XD",
                image: images.XDLogo
            },
        ]
    },
]

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: '70%',
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: 'var(--color-primary)',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);

function ToolbeltSection(props) {

    const [ index, set ] = React.useState(0)

    const handleChange = (event, newValue) => {
        set(newValue)
    }

    const SkillTransition = ({index}) => {
        const transitions = useTransition(technologies[index].items, item => item.name + technologies[index].category, {
            from: { opacity: 0},
            enter: { opacity: 1 },
            leave: { opacity: 0},
        })

        return transitions.map(({ item, props, key }) => {

            const { name, image } = item

            return (
                <animated.div key={key} style={props}>
                    <GridListTile style={{width: '80px', marginRight: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <HoverableImage image={image} className={styles.logoImage} label={name}/>
                    </GridListTile>
                </animated.div>
            )
        })
    }

    return (
        <div style={{height: 'calc(var(--geo-scalar) * 30)', padding: '32px', marginTop: 'calc(var(--geo-scalar) * 16)', position: 'relative'}}>
            <div style={{backgroundColor: 'var(--color-primary)', height: '120px', width: '200px', marginLeft: 'calc(var(--geo-scalar) * 1)', top: 0, position: 'absolute'}}/>
            <div style={{backgroundColor: 'var(--color-secondary)', height: '120px', width: '200px', marginLeft: 'calc(var(--geo-scalar) * 2)', top: 'calc(var(--geo-scalar) * 1)', position: 'absolute'}}/>
            <div style={{backgroundColor: 'var(--color-tertiary)', height: '120px', width: '200px', marginLeft: 'calc(var(--geo-scalar) * 3)', top: 'calc(var(--geo-scalar) * 2)', position: 'absolute'}}/>
            <div style={{backgroundColor: 'var(--color-quarternary)', height: '120px', width: '200px', marginLeft: 'calc(var(--geo-scalar) * 4)', top: 'calc(var(--geo-scalar) * 3)', position: 'absolute'}}/>
            <div style={{marginLeft: 'calc(var(--geo-scalar) * 5)', marginRight: 'calc(var(--geo-scalar) * 5)', marginTop: 'calc(var(--geo-scalar) * 0)', minWidth: '760px'}}>
                <Grid container>
                    <Grid item xs={12} style={{display: 'flex', alignItems: 'center', marginLeft: '20%', marginRight: '20%'}}>
                        <Typography className={styles.sectionHeader} style={{ fontWeight: 500}}>
                            My toolbelt
                        </Typography>
                        {/* <div style={{height: '1px', flexGrow: 1, marginLeft: '16px', marginRight: '16px', backgroundColor: 'var(--color-tertiary)'}}/> */}
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div style={{display: 'flex', justifyContent: 'center', overflow: 'hiddden', flexWrap: 'wrap', marginTop: '32px', marginBottom: '32px'}}>
                                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <StyledTabs value={index} onChange={handleChange}>
                                        {technologies.map((item, index) => {
                                            return (
                                                <StyledTab label={item.category}/>
                                            )
                                        })}
                                        </StyledTabs>
                                    </div>
                                    <GridList cellHeight={160} style={{flexWrap: 'nowrap', transform: 'translateZ(0)', marginTop: '32px'}}>
                                        {index === 0 && <SkillTransition index={0}/>}
                                        {index === 1 && <SkillTransition index={1}/>}
                                        {index === 2 && <SkillTransition index={2}/>}
                                        {index === 3 && <SkillTransition index={3}/>}
                                    </GridList>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

ToolbeltSection.propTypes = {

}

export default React.memo(ToolbeltSection)

