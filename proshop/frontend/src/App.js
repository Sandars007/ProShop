import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <React.Fragment>
    <Router>
    <Header/>
    <main className="py-3">
    <Container>
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/product/:id" component={ProductScreen}/>
    </Container>
    </main>
    <Footer/>
    </Router>
    </React.Fragment>
  )
}
export default App