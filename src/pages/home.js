import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Button, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import bg from "../pages/bg.jpg";
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-css';

const useStyles = makeStyles(theme => ({

  bg: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '70vh',

  },
  root: {
    backgroundColor: '#000',
  },
  media: {
    height: '25vh'
  },

  media1: {
    height: '68vh',
    width: '50vw'
  },
  grid2: {
    margin: (0, 0, 0, 0),
    width: '99vw'
  },
  maingrid: {
    backgroundColor: '#212121'

  }

}))


export default function Home() {

  const classes = useStyles()

  const breakpoint = {
    default: 2,
    1100: 2,
    700: 1
  }

  return (
    <Grid className={classes.maingrid} >
      <Grid>
        <Grid item className={classes.bg}>
        </Grid>
      </Grid>
    <Grid justifyContent="center" container>
    <Masonry
        breakpointCols={breakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <div >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1542892770-3e6a09c7a7da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Gallery
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>

              <Button size="small" color="">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div  >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media1}
                image="https://images.unsplash.com/photo-1526631134603-8d692d622f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Services/Classes
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>

              <Button size="small" color="">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1526631134603-8d692d622f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Kabaret
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>

              <Button size="small" color="">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>


      </Masonry>
    </Grid>
      
    </Grid>
  )
}
