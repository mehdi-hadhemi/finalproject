import React from 'react'
import NavbarMenu from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import EventInfo from './components/EventInfo';
import CustomizedSteppers from './components/Profile/slidebar'
import Sign from './components/SignUp'
import main from './components/Search/Main'
import Footer from './components/footer'


const App = () => {
    return(
        <BrowserRouter>
          <NavbarMenu/>
          
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/event/:id' render={props => <EventInfo eventId={props.match.params.id}/>} />
            <Route exact path='/user/:id' component={CustomizedSteppers}/>
            <Route exact path='/test' component ={Sign}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
    )
}

export default App;