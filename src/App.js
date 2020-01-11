import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './layouts/Header';
import Alert from './components/Alert';
import PageSingleService from './pages/PageSingleService';

import { PAGES } from './consts';

import classes from './App.module.css';


function App(props) {
  const { alert } = props;
  return (
    <Router>
      { alert.message && <Alert /> }
      <Header />
      <main>
        <Switch>
          <Route path='/services/:id' component={ PageSingleService } />
          {
            PAGES.map((page) => (
              page.exact ?
                <Route exact path={ page.path } component={ page.component } key={ page.path } />
              :
                <Route path={ page.path } component={ page.component } key={ page.path } />
            ))
          }
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