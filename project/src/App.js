import React from 'react'
import NavbarMenu from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import EventInfo from './components/EventInfo';
import CustomizedSteppers from './components/Profile/slidebar'

const App = () => {
    return(
        <BrowserRouter>
          <NavbarMenu/>
         <p>HELLo</p>
         <p>HELLo</p>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/event/:id' render={props => <EventInfo eventId={props.match.params.id}/>} />
            <Route exact path='/user/:id' component={CustomizedSteppers}/>
          </Switch>
        </BrowserRouter>
    )
}

export default App;