import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import Slider from './components/Slider';
import Logo from './components/Logo';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sliders: [
        {
          'id' : 'first',
          'color': { r: 19, g: 21, b: 241, a: 1 }
        },
        {
          'id' : 'second',
          'color': { r: 241, g: 19, b: 98, a: 1 }
        }
      ]
    }

    this.onColorChange = this.onColorChange.bind(this)
  }
  onColorChange(color, id) {
    id = id == 'first' ? 0 : 1

    var state = this.state;
    var slider = state.sliders[id];
    slider.color = Object.assign({}, color.rgb);
    
    this.setState({
      sliders: state.sliders
    })
  }
  render() {
    var top = this.state.sliders[0].color,
      bottom = this.state.sliders[1].color;

    const container = {
      background: `linear-gradient(to bottom, rgba(${top.r}, ${top.g}, ${top.b}, 1), rgba(${bottom.r}, ${bottom.g}, ${bottom.b}, 1)`
    }

    return (
      <div className="container" style={container} >
        { this.state.sliders.map((item, index) => (
            <Slider key={item.id} slider={item} onColorChange={this.onColorChange}></Slider>
        ))}
        <Logo></Logo>
      </div>
    );
  }
}