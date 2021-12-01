import React, { createContext, useReducer } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.scss';
// import Nav from './components/nav/Nav.jsx';
import Login from './components/login/Login.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{state, dispatch}}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/create" element={<CreateUser />} />
            <Route path="/" element={<Feed />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
