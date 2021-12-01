import React, { createContext, useReducer } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
// import Nav from './components/nav/Nav.jsx';
import Login from './components/login/Login.jsx';
import { initialState, reducer } from './store/reducer'

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{state, dispatch}}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/create" element={<CreateUser />} />
            <Route path="/" element={<Feed />} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
