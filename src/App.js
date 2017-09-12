import React, { Component } from 'react'

import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Info from './components/info'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Info />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
