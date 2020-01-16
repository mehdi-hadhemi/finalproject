import React, { Component } from 'react'
import Main from './Main'
import EventList from '../EventList'
import {loadUser}from "../../actions/AuthActions"
import {connect}from 'react-redux'
class Search extends Component {
    componentDidMount() {
        this.props.loadUser()
      }
      
      componentWillReceiveProps = (nextProps) => {
        this.setState(nextProps.auth.user)
      }
    render() {
        return (
            <div>
                <Main/>
                <EventList/>
            </div>
        )
    }
}

export default connect(loadUser)(Search)