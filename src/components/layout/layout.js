import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = ({ children }) => {
  return (
    <main className={`layout`}>
      <Header appName={`{ Less Style Library }`} version={`3.1.0`} />
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