import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import { authenticateToken } from './redux/user/user.actions';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Spinner from './components/Spinner/Spinner.component';

const HomePage = lazy(() => import('./pages/Home/Home.component'));
const AboutUsPage = lazy(() => import('./pages/About-Us/AboutUs.component'));
const ContactUsPage = lazy(() => import('./pages/ContactUs/ContactUs.component'));
const AdminPage = lazy(() => import('./pages/Admin/Admin.component'));

const App = ({ authenticateToken }) => {

  useEffect(() => {
    authenticateToken();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className='content-wrap'> 
          <Header />
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/admin' component={AdminPage} />
              <Route exact path='/about-us' component={AboutUsPage} />
              <Route exact path='/contact-us' component={ContactUsPage} />
            </Suspense>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  authenticateToken: () => dispatch(authenticateToken())
});

export default connect(null, mapDispatchToProps)(App);
