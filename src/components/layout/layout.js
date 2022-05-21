import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = ({ children }) => {
  return (
    <main className={`layout`}>
      <Header appName={`#less.style-library()`} version={`2.0.0`} />
      <div className={`layout__content`}>
        {children}
      </div>
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
