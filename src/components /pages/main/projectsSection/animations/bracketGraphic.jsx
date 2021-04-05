import React from 'react'
import PropTypes from 'prop-types'
import  './bracketStyles.css'


function changeColor(index) {

    let clrIdx = index % 3

    let color = 'var(--theme-mid-light)'

    switch (clrIdx) {
        case 0:
            color = 'var(--theme-mid)'
            break
        case 1:
            color = 'var(--theme-mid-dark)'
            break
        default:
            color = 'var(--theme-mid-light)'
            break
    }

    setTimeout(() => {
        document.getElementById("dots").style.setProperty('--first-dot-color', color)
    }, 50)

    setTimeout(() => {
        document.getElementById("dots").style.setProperty('--second-dot-color', color)
    }, 250)

    setTimeout(() => {
        document.getElementById("dots").style.setProperty('--third-dot-color', color)
    }, 450)


}

function BracketGraphic(props) {

    const { style } = props

    const [index, set] = React.useState(0)

    const [seconds, setSeconds] = React.useState(0);
    const [isActive, setIsActive] = React.useState(true);

    React.useEffect(() => {
        let interval = null;

        setTimeout(() => {
            if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                changeColor(seconds)
            }, 10000);
            } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
            }
            return () => clearInterval(interval);
        }, 50)
      }, [isActive, seconds]);


    return (
        <svg width="67" height="40" viewBox="0 0 98 58" fill="none" xmlns="http://www.w3.org/2000/svg" style={{...style}}>
            <g id="lettering">
                <path id="left-bracket" d="M17.5156 57.7227C14.0586 56.7461 11.4512 55.1348 9.69336 52.8887C7.95508 50.6621 7.08594 47.7129 7.08594 44.041V38.2109C7.08594 33.4648 5.01562 31.0918 0.875 31.0918V26.8438C5.01562 26.8438 7.08594 24.4805 7.08594 19.7539V13.6602C7.125 10.0859 7.99414 7.20508 9.69336 5.01758C11.4121 2.81055 14.0195 1.20898 17.5156 0.212891L18.6289 3.58203C14.5469 4.89062 12.5059 8.29883 12.5059 13.8066V19.7246C12.5059 24.1582 10.875 27.2441 7.61328 28.9824C10.875 30.7402 12.5059 33.8555 12.5059 38.3281V44.3633C12.5645 49.7344 14.6055 53.0645 18.6289 54.3535L17.5156 57.7227Z" fill="black"/>
                <path id="right-bracket" d="M79.5566 54.3535C83.5215 53.084 85.5723 49.8516 85.709 44.6562V38.2109C85.709 33.6992 87.4766 30.623 91.0117 28.9824C87.4766 27.3809 85.709 24.3047 85.709 19.7539V13.8066C85.709 8.29883 83.668 4.89062 79.5859 3.58203L80.6992 0.212891C84.1562 1.18945 86.7539 2.78125 88.4922 4.98828C90.2305 7.17578 91.1094 10.0762 91.1289 13.6895V19.8418C91.1289 24.5098 93.1992 26.8438 97.3398 26.8438V31.0918C93.1992 31.0918 91.1289 33.4648 91.1289 38.2109V44.1289C91.1289 47.8008 90.2402 50.7402 88.4629 52.9473C86.7051 55.1543 84.1172 56.7461 80.6992 57.7227L79.5566 54.3535Z" fill="black"/>
                <g id="dots">
                    <path id="first-dot" d="M30.2188 52.1582C30.2188 51.2207 30.4922 50.4395 31.0391 49.8145C31.6055 49.1895 32.4453 48.877 33.5586 48.877C34.6719 48.877 35.5117 49.1895 36.0781 49.8145C36.6641 50.4395 36.957 51.2207 36.957 52.1582C36.957 53.0566 36.6641 53.8086 36.0781 54.4141C35.5117 55.0195 34.6719 55.3223 33.5586 55.3223C32.4453 55.3223 31.6055 55.0195 31.0391 54.4141C30.4922 53.8086 30.2188 53.0566 30.2188 52.1582Z" fill="black"/>
                    <path id="second-dot" d="M46.0391 52.1582C46.0391 51.2207 46.3125 50.4395 46.8594 49.8145C47.4258 49.1895 48.2656 48.877 49.3789 48.877C50.4922 48.877 51.332 49.1895 51.8984 49.8145C52.4844 50.4395 52.7773 51.2207 52.7773 52.1582C52.7773 53.0566 52.4844 53.8086 51.8984 54.4141C51.332 55.0195 50.4922 55.3223 49.3789 55.3223C48.2656 55.3223 47.4258 55.0195 46.8594 54.4141C46.3125 53.8086 46.0391 53.0566 46.0391 52.1582Z" fill="black"/>
                    <path id="third-dot" d="M61.8594 52.1582C61.8594 51.2207 62.1328 50.4395 62.6797 49.8145C63.2461 49.1895 64.0859 48.877 65.1992 48.877C66.3125 48.877 67.1523 49.1895 67.7188 49.8145C68.3047 50.4395 68.5977 51.2207 68.5977 52.1582C68.5977 53.0566 68.3047 53.8086 67.7188 54.4141C67.1523 55.0195 66.3125 55.3223 65.1992 55.3223C64.0859 55.3223 63.2461 55.0195 62.6797 54.4141C62.1328 53.8086 61.8594 53.0566 61.8594 52.1582Z" fill="black"/>
                </g>
            </g>
        </svg>
    )
}

BracketGraphic.propTypes = {

}

export default BracketGraphic

