import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';

import { AuthProvider } from './context/auth';
import { AuthContext } from './context/auth';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}></Route>
            <Route
              exact
              path="/"
              element={
                user ? <Home /> : <Register />
              }></Route>
            <Route
              path="/login"
              element={
                user ? <Navigate to="/" /> : <Login />
              }></Route>
            <Route
              path="/register"
              element={
                user ? <Navigate to="/" /> : <Register />
              }></Route>
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
