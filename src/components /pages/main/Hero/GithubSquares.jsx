import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import styles from './squares.module.css'
import { Octokit } from '@octokit/rest'


const fetchContributions = () => {
    const github = new Octokit({
        timezone: "USA/Seattle"
    })

    return github.rest.activity.listPublicEventsForUser({
        username: 'chris-a-porter'
    })
}

function calculateFourWeeksAgo() {

    let d = new Date()
     
    var priorDate = new Date().setDate(d.getDate()-30)

    console.log({priorDate})

   return priorDate;
 
}

// Generates a placeholder history object for last 28 days 
function generateHistoryObject() {

    let o = {}

    for (let i = 0; i < 28; i++) {
        o[i] = []
    }

    return o

}

function GithubSquares(props) {

    const [ events, setEvents ] = React.useState([])

    const [ eventCountByDateLag, set ] = React.useState(generateHistoryObject())

    React.useEffect(() => {
        fetchContributions()
        .then(res => {
            console.log({res})

            if (res.status === 200) {
                setEvents(res.data)

                const fourWeeksAgo = calculateFourWeeksAgo()

                let eventsLastFourWeeks = res.data.filter(event => {
                    const eventTimestamp = new Date(event.created_at).getTime()

                    return eventTimestamp > fourWeeksAgo

                })

                console.log({eventsLastFourWeeks})

                for (let event of eventsLastFourWeeks) {

                    const ts = new Date(event.created_at).getTime()
                    
                    const numDaysAgo = Math.floor(ts - fourWeeksAgo)

                    console.log({event})

                }

            } 
            
        })
        .catch(err => {
            console.log({err})
        })
    }, [fetchContributions])

    return (
        <div className={styles.graph}>
            <ul className={styles.months}>
                <li></li>
                <li/>
                <li/>
                <li/>
            </ul>
            <ul className={styles.days}>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
            </ul>
            <ul className={styles.squares}>
                {new Array(31).fill(Math.random() * 3).map(item => <li data-level={item}/>)}
            </ul>
        </div>
    )
}

GithubSquares.propTypes = {

}

export default GithubSquares

