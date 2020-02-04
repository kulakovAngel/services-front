import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Alert from './components/Alert';

import PageHome from './pages/PageHome';
import PageServices from './pages/PageServices';
import PageAbout from './pages/PageAbout';
import PageAuth from './pages/PageAuth';
import PageAdmin from './pages/PageAdmin';
import PageSingleService from './pages/PageSingleService';
import PageNotFound from './pages/PageNotFound';

import classes from './App.module.css';


function App({ alert, auth }) {
  return (
    <Router>
      { alert.message && <Alert /> }
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={ PageHome } />
          <Route exact path='/services' component={ PageServices } />
          <Route path='/services/:id' component={ PageSingleService } />
          <Route path='/about' component={ PageAbout } />
          <Route path='/auth' component={ PageAuth } />
          {
            auth.rights === '2' && <Route path='/admin' component={ PageAdmin } />
          }
          <Route path='*' component={ PageNotFound } />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

const mapStateToProps = state => ({
  alert: state.alert,
  auth: state.auth,
})

export default connect(mapStateToProps)(App);