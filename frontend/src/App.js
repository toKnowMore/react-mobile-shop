import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
        </Container>
      </main>
     
      <Footer></Footer>
    </Router>
  );
}

export default App;
