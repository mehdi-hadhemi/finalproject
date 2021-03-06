import React from 'react'
import NavbarMenu from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import EventInfo from './components/EventInfo';
import UsersProfile from './components/Profile/UsersProfile'
import Sign from './components/SignUp/SignUp'
import Main from './components/Search/Main'
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
        { window.location.href=== 'http://localhost:3000/' ? <div className='homenav'><NavbarMenu  /></div> :<NavbarMenu  /> }
          <Alerts/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/event/:id' component ={EventInfo} />} />
            {/* <Route exact path='/event' render={props => <EventInfo eventId={props.match.params.id}/>} /> */}
            <Route exact path='/user/:id' component={UsersProfile}/>

            <Route exact path='/login' component ={Sign}/>
            <Route exact path='/browse-event' component={Main}/>
            <Route exact path='/create-event' component={CreateEvent}/>


          </Switch>
          <Footer/>
        </BrowserRouter>
    )
}

export default App;