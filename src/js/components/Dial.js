import React, { Component } from 'react';

export default class Dial extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this.drawCanvas = this.drawCanvas.bind(this);
  }
  getAngle(e) {
    var bounds = this.canvas.getBoundingClientRect();
    
    var x = e.clientX - bounds.left,
      y = e.clientY - bounds.top,
      a = Math.atan2(x - this.props.size / 2, this.props.size / 2 - y);

    var val = a * 180 / Math.PI;
    return Math.round(val * 1000) / 1000;
  }
  componentDidMount() {
    this.drawCanvas();
  }
  componentDidUpdate() {
    this.drawCanvas();
  }
  handleMouseDown(e) {
    this.props.onChange(this.getAngle(e));
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }
  handleMouseMove(e) {
    e.preventDefault();
    this.props.onChange(this.getAngle(e));
  }
  handleMouseUp(e) {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }
  drawCanvas() {

    var arcAngle = 2 * Math.PI, 
      startAngle = 1.5 * Math.PI,
      endAngle = 1.5 * Math.PI + arcAngle;

    this.canvas.width = 200;
    this.canvas.height = 200;
    var ctx = this.canvas.getContext('2d');
    this.xy = this.props.size / 2;
    this.lineWidth = this.xy * '0.5';
    this.radius = this.xy - this.lineWidth / 2;
    ctx.lineWidth = this.lineWidth;

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.arc(this.xy, this.xy, this.radius, endAngle, startAngle, true);
    ctx.stroke();

    var fga = {};
    fga.startAngle = startAngle;
    fga.endAngle = startAngle + this.props.angle * arcAngle / 360;

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';

    // keeping foreground arc the same size.
    fga.startAngle = fga.endAngle - 0.3;
    fga.endAngle = fga.endAngle + 0.3;

    ctx.arc(this.xy, this.xy, this.radius, fga.startAngle, fga.endAngle, false);
    ctx.stroke();
  }
  render () {
    return(
      <div className='dial'>
        <canvas onMouseDown={this.handleMouseDown} ref={(_canvas) => {this.canvas = _canvas}}></canvas>
      </div>
    )
  }
}