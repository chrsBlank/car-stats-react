import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DataEntryPage from './components/DataEntryPage';
import StatisticsPage from './components/StatisticsPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/data-entry" component={DataEntryPage} />
          <Route path="/statistics" component={StatisticsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
