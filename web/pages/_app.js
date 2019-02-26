//
import React from 'react'
import App, { Container } from 'next/app'
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
      </Container>
    )
  }
}

export default GambitApp