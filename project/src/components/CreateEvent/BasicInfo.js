import React, { Component } from 'react'
import { Form, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap'
import { Multiselect } from 'multiselect-react-dropdown';
import InputNumber from 'react-input-just-numbers';
import {Button} from 'react-bootstrap'
class BasicInfo extends Component {
    constructor(props){
        super(props) 
        this.state={
            tittle: '',
            description: '',
            price: null,
            maxparticipent : null,
            payfree: false,
            img: '',
            options: [{ name: 'Muisc', id: 1 }, { name: 'Movies', id: 2 }, { name: 'Community', id: 3 }, { name: 'Charity', id: 4 },{ name: 'Gaming', id: 5 }],
            selectedOptions: []
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value } );
        if(e.target.name === 'price'){
            e.target.value > 0 ? this.setState({...this.state, payfree : true}) : this.setState({...this.state, payfree : false});
            this.setState({ [e.target.name]: Number(e.target.value) });
            e.target.value < 0 && this.setState({...this.state, price : 0})
            
        }
        if(e.target.name === 'maxparticipent'){
            this.setState({ [e.target.name]: Number(e.target.value) });
            e.target.value < 0 && this.setState({...this.state, maxparticipent : 0})
            
        }
        
        
    };

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><h2>Event name</h2></Form.Label>
                        <Form.Control name='tittle' onChange={(e) => this.props.step1Text(e.target.name, e.target.value)} type="text" placeholder="Enter event name" />
                        <Form.Text className="text-muted">
                            Be clear and descriptive.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><h2>Tell us what the event is about</h2></Form.Label>
                        <Form.Control onChange={(e) => this.props.step1Text(e.target.name, e.target.value)} name='description' type="text" placeholder="Desciption" />
                       
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><h2>Add tags to your event</h2></Form.Label>
                        <div>
                        <Multiselect
                    options={this.state.options}
                    selectedvalues={this.state.selectedValue}
                    onSelect={this.onSelect}
                    onRemove={this.onRemove}
                    displayValue="name"
                    onSelect={(e) => this.setState({ ...this.state, selectedOptions: e }, () => this.props.step1Text('selectedOptions', e))}
                />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label><h2>Set the maximum number of participants </h2></Form.Label>
                    <InputNumber value={this.state.maxparticipent} onChange={(e) => this.props.step1Text(e.target.name, e.target.value)} name='maxparticipent'/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label><h2>Set a price for your event</h2></Form.Label>
                    <InputNumber value={this.state.price} onChange={(e) => this.props.step1Text(e.target.name, e.target.value)} name='price'/>
                    
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label><h2>Url of your event's picture</h2></Form.Label>
                    <Form.Control name='img' onChange={(e) => this.props.step1Text(e.target.name, e.target.value)} type="text"  />
                    
                    </Form.Group>
                </Form>
            <Button onClick={() => this.props.addBasicInfo(this.state)}>click me</Button>
            </div>
        )
    }
}

export default BasicInfo