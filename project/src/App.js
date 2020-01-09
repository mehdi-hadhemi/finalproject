import React from 'react'
import NavbarMenu from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import EventInfo from './components/EventInfo';
import CustomizedSteppers from './components/Profile/slidebar'
import Sign from './components/SignUp/SignUp'
import main from './components/Search/Main'
import Alerts from './components/HomePage/Alert'

import Footer from './components/footer'


import CreateEvent from './components/CreateEvent/CreateEvent'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token){
  setAuthToken(localStorage.token)
}
const App = () => {
    return(
        <BrowserRouter>
          <NavbarMenu/>
          <Alerts/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/event/:id' render={props => <EventInfo eventId={props.match.params.id}/>} />
            <Route exact path='/user/:id' component={CustomizedSteppers}/>
            <Route exact path='/login' component ={Sign}/>

          </Switch>
          <Footer/>
        </BrowserRouter>
    )
}

export default App;