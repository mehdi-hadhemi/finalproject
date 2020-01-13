import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class Sponsoring extends Component {
    constructor(props){
        super(props)
        this.state = {
            sponsored: false
        }
    }
    Change = (e) =>{
        this.props.step1Text(e.target.name, !this.state.sponsored)
        this.setState({sponsored: !this.state.sponsored})
    }
    render() {
        return (
            <div >
                <InputGroup className='mb-3 '>
                    <InputGroup.Prepend className='Sponsoring'>
                    <h2>Would you like to sponor your event?</h2>
                    <h5 style={{color: 'grey'}}>Sponsored events are featured in our homepage </h5>
                        <InputGroup.Checkbox name='sponsored'  onChange={(e) => this.Change(e)}  aria-label="Checkbox for following text input" />
                    </InputGroup.Prepend>

                </InputGroup>
               
            </div>
        )
    }
}

export default Sponsoring