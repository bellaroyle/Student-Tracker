
import './App.css';
import Title from './components/Title'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Current from './components/Current'
import Grads from './components/Grads'
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      <Router>
        <Welcome path="/" />
        <Current path="/current-students" />
        <Grads path="/graduates" />
      </Router>
    </div>
  );
}

export default App;
