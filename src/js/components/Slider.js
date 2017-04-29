import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

export default class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pickerDisplayed: false
    }

    this.handleColorChange = this.handleColorChange.bind(this);
    this.displayPicker = this.displayPicker.bind(this);
    this.handleClosePicker = this.handleClosePicker.bind(this);
  }
  handleColorChange(color, event) {
    this.props.onColorChange(color, this.props.slider.id)
  }
  displayPicker() {
    this.setState({ pickerDisplayed: !this.state.pickerDisplayed })
  }
  handleClosePicker() {
    this.setState({ pickerDisplayed: false })
  }
  render () {
    let slider = null;
    const isDisplayed = this.state.pickerDisplayed ? 'picker-is-visible' : '';
    const currentColor = this.props.slider.color;
    const btnStyle = {
      background: `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${currentColor.a})`
    }
    slider = <div className={`slider ${isDisplayed}`}>
              <ChromePicker color={currentColor} onChange={this.handleColorChange}></ChromePicker>
            </div>
    return(
      <div className={`slider-wrap slider-wrap-${this.props.slider.id}`} >
        <div className={`slider-btn ${isDisplayed}`} style={ btnStyle } onClick={ this.displayPicker }></div>
        { slider }
        <div className={`cover ${isDisplayed}`} onClick={ this.handleClosePicker }></div>
      </div>
    )
  }
}