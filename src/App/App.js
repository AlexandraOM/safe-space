import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '@material/button/dist/mdc.button.css';
import './App.css';
import { FAQs, Home, About, Report, Support, Review, Submit } from '../pages';
import { Footer } from '../components';
import SectionDivider from '../pages/SectionDivider';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/report/:index' render={() => <Report />} />
        <Route path='/report/dividers/:index' render={() => <Report />} />
        <Route path='/report/review' render={() => <Report />} />
        <Route path='/report/submit' render={() => <Report />} />
        <Route path='/frequently-asked-questions' render={() => <FAQs />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/support' render={() => <Support />} />
      </Switch>

      {/* <Footer /> */}
    </>
  );
}

export default App;
