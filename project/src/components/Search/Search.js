import React, { Component } from 'react'
import Main from './Main'
import EventList from '../EventList'
class Search extends Component {
    render() {
        return (
            <div>
                <Main/>
                <EventList/>
            </div>
        )
    }
}

export default Search