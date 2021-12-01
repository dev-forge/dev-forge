import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
// import Nav from './components/nav/Nav.jsx';
import Login from './components/login/Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/main" element={} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
