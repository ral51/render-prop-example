import React from 'react';

export class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(evt) {
    this.setState({
      x: evt.clientX,
      y: evt.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '500px', width: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
