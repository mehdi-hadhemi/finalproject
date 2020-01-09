import React, { Component } from "react";

import Select from "react-select";

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { label: "Sousse", value: 1 },
        { label: "Tunis", value: 2 },
        { label: "Mahdia", value: 3 },
        { label: "Monastir", value: 4 },
        { label: "Sfax", value: 5 },
        { label: "Gabes", value: 6 }
      ],
      selectedCity: ""
    };
  }
  render() {
    return (
      <div className="">
        <Select className="selectWhere"
          options={this.state.list}
          onChange={e => {
            this.setState({ ...this.state, selectedCity: e.label });
          }}
        />
      </div>
    );
  }
}

export default LocationSearch;
