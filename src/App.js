import React from 'react';
import { StaticRenderer } from './StaticRenderer';

export default function App() {
  function render() {
    return <div> Hello World </div>;
  }

  return <StaticRenderer render={render} />;
}
