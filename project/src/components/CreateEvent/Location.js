import React, { Component } from 'react'
import Select from 'react-select';
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { addLocation} from '../../actions/actions'
import {Button} from 'react-bootstrap'
class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adresse: '',
            list: [
                { label: "Sousse", value: 1 },
                { label: "Tunis", value: 2 },
                { label: "Mehdia", value: 3 },
                { label: "Monaster", value: 4 },
                { label: "Sfax", value: 5 },
                { label: "Gabes", value: 6 },
            ],
            city: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Where is the event being held</h2>
                <div className="container push-down">
                    <Select options={this.state.list} onChange={(e) => { this.setState({ ...this.state, city: e.label }) }} />

                    <Form.Text className="text-muted">
                        The city in which the event is held
                    </Form.Text>
                </div>
                <Form.Group controlId="formBasicEmail">

                    <Form.Control id='long-input' name='adresse' onChange={this.handleChange} type="text" placeholder="exact address of the event " />

                    
                </Form.Group>
                <Button onClick={() => this.props.addLocation(this.state)}>click me</Button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addLocation: (x) => dispatch(addLocation(x))
    }
}
export default connect(null, mapDispatchToProps) (Location) 