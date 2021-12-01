import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.scss';
import Nav from './components/nav/Nav.jsx';
import Login from './components/login/Login.jsx';
// import Feed from './components/feed/Feed.jsx';

const App = () => {
  // declaring state here
  const [state, setState] = useState({
    isLoggedIn: false,
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Nav isLoggedIn={state.isLoggedIn} />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home" element={<Feed />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
