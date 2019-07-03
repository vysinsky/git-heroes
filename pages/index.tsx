import React from 'react'
import heroes, { Hero } from '../data'
import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    height: 400,
  },
  header: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
})

interface IndexProps {
  heroes: Array<Hero>
}

const Index: React.FC<IndexProps> = ({ heroes }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      {heroes.map((hero: Hero, i: number) => (
        <Grid item key={i} xs={3}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.header}
              title={hero.name}
              subheader={hero.subtitle}
            />
            <CardMedia
              className={classes.media}
              image={hero.image}
              title=""
            ></CardMedia>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

// @ts-ignore
Index.getInitialProps = async () => {
  return {
    heroes,
  }
}

export default Index
