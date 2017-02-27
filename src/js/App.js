import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import Logo from './components/Logo';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      colorFirst: { r: '19', g: '21', b: '241', a: '1'},
      colorSecond: { r: '241', g: '19', b: '98', a: '1'}
    }

    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeSecond = this.handleChangeSecond.bind(this);
  }
  handleChangeFirst(color, event) {
    this.setState({ colorFirst: color.rgb })
  }
  handleChangeSecond(color, event) {
    this.setState({ colorSecond: color.rgb })
  }
  render() {
    var rf = this.state.colorFirst.r,
        gf = this.state.colorFirst.g,
        bf = this.state.colorFirst.b,
        rs = this.state.colorSecond.r,
        gs = this.state.colorSecond.g,
        bs = this.state.colorSecond.b;

    const container = {
      background: `linear-gradient(to bottom, rgba(${rf}, ${gf}, ${bf}, 1), rgba(${rs}, ${gs}, ${bs}, 1)`
    }
    return (
      <div className="container" style={ container }>
        <div className="slider-wrap slider-wrap-first">
          <div className="slider">
            <HuePicker color={ this.state.colorFirst } onChange={ this.handleChangeFirst }  width="100%"></HuePicker>
          </div>
        </div>
        <div className="slider-wrap slider-wrap-second">
          <div className="slider">
            <HuePicker color={ this.state.colorSecond } onChange={ this.handleChangeSecond }  width="100%" ></HuePicker>
          </div>
        </div>
        <Logo></Logo>
      </div>
    );
  }
}