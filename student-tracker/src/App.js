import './App.css';
import Title from './components/Title'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Current from './components/Current/Current'
import Grads from './components/Grad/Grads'
import Grad from './components/Grad/Grad'
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      { <Router>
        <Welcome path="/" />
        {/* <Current path="/current-students" /> */}
        <Grads path="/graduates" />
        <Grad path="/graduates/:id" />
      </Router>}
    </div>
  );
}

export default App;
