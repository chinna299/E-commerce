import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Navigation from './routing/Navigation'
import "../src/index.css"
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      <Header/>
      <Navigation />
      <Footer/>
    </div>
  )
}
//this is my app.jsx component i want to render all my common  commponents in all pages 