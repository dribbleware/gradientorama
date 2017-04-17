import React, { Component } from 'react';
import { HuePicker } from 'react-color';

export default class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleColorChange = this.handleColorChange.bind(this);
  }
  handleColorChange(color, event) {
    this.props.onColorChange(color, this.props.slider.id)
  }
  render () {
    return(
      <div className={`slider-wrap slider-wrap-${this.props.slider.id}`}>
        <div className="slider">
          <HuePicker color={this.props.slider.color} onChange={this.handleColorChange} width="100%"></HuePicker>
        </div>
      </div>
    )
  }
}