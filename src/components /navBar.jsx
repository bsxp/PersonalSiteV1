import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import NavBarButton from './navBarButton'

const buttonOptions = [
    {
        label: "About"
    },
    {
        label: "Toolbelt"
    },
    {
        label: "Work"
    },
    {
        label: "Contact"
    }
]

export default function NavBar() {
    
    return (
        <AppBar
            position="sticky"
            style={{
                backgroundColor: 'transparent',
                height: 'calc(var(--geo-scalar) * 3)'
            }}
            elevation={0}
        >
            <Toolbar
            style={{display: 'flex', justifyContent: 'center'}}
                >
                {buttonOptions.map(({label}) => <NavBarButton label={label} key={label}/>)}
            </Toolbar>
        </AppBar>
    )

}