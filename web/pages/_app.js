//
import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { isServer } from '../helpers'

//
class GambitApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentWillMount() {
    // Provide game's dependencies to global scope
    if (!isServer) {
      window.React = React
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
      </Container>
    )
  }
}

export default GambitApp