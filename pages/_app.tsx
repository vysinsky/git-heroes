import App from 'next/app'
import { Container, CssBaseline, withStyles } from '@material-ui/core'
import theme from '../src/theme'
import { ThemeProvider } from '@material-ui/styles'
import * as React from 'react'

const styles = (theme: any) => ({
  main: {
    padding: theme.spacing(2),
  },
})

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // @ts-ignore
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    // @ts-ignore
    const { classes, Component, pageProps } = this.props

    return (
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className={classes.main}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withStyles(styles)(MyApp)
