import React, { Component } from 'react';

export class StaticRenderer extends Component {
  render() {
    return <div>{this.props.render()}</div>;
  }
}
