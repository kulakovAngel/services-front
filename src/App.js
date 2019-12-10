import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './layouts/Header';
import Alert from './components/Alert';
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageAuth from './pages/PageAuth';

import './App.css';


function App(props) {
  const { alert } = props;
  return (
    <Router>
      { alert.message && <Alert /> }
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={ PageHome } />
          <Route path='/about' component={ PageAbout } />
          <Route path='/auth' component={ PageAuth } />
        </Switch>
      </main>
      <footer>
        footer
      </footer>
    </Router>
  )
}

const mapStateToProps = state => ({
  alert: state.alert,
})

export default connect(mapStateToProps)(App);