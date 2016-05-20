import React from 'react';
// =========================
// LIGHT LABEL COMPONENT
// =========================
import { Toggle } from './bo/toggleLight';
// =========================
// TOGGLE BUTTON COMPONENT
// =========================

import { Light } from './bo/light';


 // =========================
// App
// =========================
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: {
        0: false,
        1: true,
        2: false,
      }
    };
    this.update = this.update.bind(this);
  }

  update(params) {
    console.log (params)
    const lights = Object.assign({}, this.state.lights);
    lights[params.index] = !lights[params.index];
    this.setState({ lights });
  }

  render() {
    const { lights } = this.state;
    return (<div>
      <div className="btn-group">
        <Toggle index={0}
                enabled={lights[0]}
                label="Kitchen"
                onToggle={this.update}/>
        <Toggle index={1}
                enabled={lights[1]}
                label="Living Room" onToggle={this.update}/>
        <Toggle index={2}
                enabled={lights[2]}
                label="Garage" onToggle={this.update}/>
      </div>
      <hr />
      <Light enabled={lights[0]} label="Kitchen" />
      <Light enabled={lights[1]} label="Living Room" />
      <Light enabled={lights[2]} label="Garage" />
    </div>);
  }
}

// =========================
// Mount
// =========================




// -------------
// ESERCIZIO (avanzato):
// -------------

