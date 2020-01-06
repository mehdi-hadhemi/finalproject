import React, { Component } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';


class CategorySelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{ name: 'Muisc', id: 1 }, { name: 'Movies', id: 2 }, { name: 'Community', id: 3 }, { name: 'Charity', id: 4 },{ name: 'Gaming', id: 5 }],
            selectedOptions: []

        }
    }
    render() {
        return (
            <div>
                <Multiselect
                    options={this.state.options}
                    selectedvalues={this.state.selectedValue}
                    onSelect={this.onSelect}
                    onRemove={this.onRemove}
                    displayValue="name"
                    onSelect={(e) => this.setState({ ...this.state, selectedOptions: e })}
                />


            </div>
        )
    }
}
export default CategorySelection