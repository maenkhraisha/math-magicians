import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Quote from './pages/Quote';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
