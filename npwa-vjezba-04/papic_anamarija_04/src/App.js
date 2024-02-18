import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Details';
import PopcornFilterForm from './FilterForm';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>NPWA - Vježba 4</h1>
          <h2>Popcorn Filter Form App</h2>

          <Routes>
            <Route
              path="/:flavor/:subFlavor/:productName"
              element={<Details />}
            />
            <Route path="/" element={<PopcornFilterForm />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
