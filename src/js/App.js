import React, { Component } from 'react';
import Slider from './components/Slider';
import Dial from './components/Dial';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sliders: [
        {
          'id': 'first',
          'color': { r: 64, g: 66, b: 231, a: 1 }
        },
        {
          'id': 'second',
          'color': { r: 241, g: 19, b: 98, a: 1 }
        }
      ],
      angle: 28
    }

    this.onColorChange = this.onColorChange.bind(this)
    this.handleAngleChange = this.handleAngleChange.bind(this)
  }
  onColorChange(color, id) {
    id = id == 'first' ? 0 : 1

    this.setState((state, props) => {
      var slider = state.sliders[id];
      slider.color = Object.assign({}, color.rgb);
      
      return {
        sliders: state.sliders
      }
    })
  }
  handleAngleChange(angle) {
    this.setState({'angle': angle});
  }
  render() {
    var top = this.state.sliders[0].color,
      bottom = this.state.sliders[1].color;

    const container = {
      background: `linear-gradient(${this.state.angle}deg, rgba(${top.r}, ${top.g}, ${top.b}, ${top.a}), rgba(${bottom.r}, ${bottom.g}, ${bottom.b}, ${bottom.a})`
    }

    return (
      <div className="container" style={container} >
        { this.state.sliders.map((item, index) => (
            <Slider key={item.id} slider={item} onColorChange={this.onColorChange}></Slider>
        ))}
        <Dial angle={this.state.angle} onChange={this.handleAngleChange} />
        <div className="logo">gradientorama</div>
      </div>
    );
  }
}