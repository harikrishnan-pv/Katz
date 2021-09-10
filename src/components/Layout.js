import { Typography, AppBar, makeStyles, Toolbar, ButtonGroup, Button, } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles(theme => ({

    page: {
        width: '100%',
    },
    title: {
        flexGrow: 1,
        padding: theme.spacing(3,3,3,10),
    },
    navbutton: {
        padding: theme.spacing(0, 10, 0)
    }
}))

export default function Layout({ children }) {
    const classes = useStyles()
    
    return (
        <div>
            <AppBar position='sticky'>
                <Toolbar >
                    <Typography color='secondary' className={classes.title} variant='h3' >
                        Katz Entertainment
                    </Typography>

                    <ButtonGroup className={classes.navbutton} size='large' aria-label="outlined primary button group">
                        <Button>
                            Classes
                        </Button>
                        <Button>Gallery</Button>
                        <Button>Contacts</Button>
                        <Button> Products</Button>

                    </ButtonGroup>
                    <ButtonGroup color='secondary' className={classes.navbutton} size='large' aria-label="outlined primary button group">
                        <Button>
                            Bookings
                        </Button>
                        <Button>Boobiekatz</Button>
                        <Button>Katz2</Button>
                       
                    

                    </ButtonGroup>

                </Toolbar>

            </AppBar>
            <div className={classes.page}>

                {children}
            </div>
        </div>
    )
}
