import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserContextProvider from '../store/contexts/UserContext';
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import LoginView from '../screens/Authentication/Login'
import CommitmentView from '../screens/common/Commitment';

function App() {
  return (
    <UserContextProvider>
    <Router>
       {/* <AppHeader /> */}
       <Switch>
         <Route exact path="/">
         <LoginView />
         </Route>
         <Route path="/commitment">
           <CommitmentView/>                     
         </Route>
       </Switch>
       {/* <AppFooter /> */}
    </Router>
    </UserContextProvider>
  );
}

export default App;
