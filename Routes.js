import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConditions from './TermsConditions';
import FAQ from './FAQ';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/aboutus" component={Aboutus} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/privacypolicy" component={PrivacyPolicy} />
        <Route  path="/terms" component={TermsConditions} />
        <Route  path="/faq" component={FAQ} />
  
      </Switch >
    );
  };
}