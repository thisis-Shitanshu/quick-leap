import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Spinner from './components/Spinner/Spinner.component';

const HomePage = lazy(() => import('./pages/Home/Home.component'));
const AboutUsPage = lazy(() => import('./pages/About-Us/AboutUs.component'));
const JobSeekersPage = lazy(() => import('./pages/Jobseekers/Jobseekers.component'));
const ContactUsPage = lazy(() => import('./pages/ContactUs/ContactUs.component'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='content-wrap'> 
          <Header />
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/jobseekers' component={JobSeekersPage} />
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

export default App;
