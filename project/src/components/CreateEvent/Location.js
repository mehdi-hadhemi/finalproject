import React, { Component } from 'react'
import Select from 'react-select';
import { Form } from 'react-bootstrap'

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
                    <Select options={this.state.list} onChange={(e) => { this.setState({ ...this.state, city: e.label },  () => this.props.step1Text('city', e.target.value)) }} />

                    <Form.Text className="text-muted">
                        The city in which the event is held
                    </Form.Text>
                </div>
                <Form.Group controlId="formBasicEmail">

                    <Form.Control id='long-input' name='adresse' onChange={(e) => this.props.step1Text(e.target.name, e.target.value)} type="text" placeholder="exact address of the event " />

                    
                </Form.Group>
               
            </div>
        )
    }
}

export default Location 