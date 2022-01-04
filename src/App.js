import React from 'react';
import './App.css';
import Form from './Form';
import Button from './Button';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <div>
            <Link to="/Form" path="/Form">
              Form
            </Link>
          </div>
          <div>
            <Link to="/Button" path="/Button">
              Button
            </Link>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/Form" component={Form}></Route>
            <Route exact path="/Button" component={Button}></Route>
          </div>
        </Routes>
      </Router>
    </>
  );
}
