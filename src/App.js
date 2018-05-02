import React from 'react';
import { StaticRenderer } from './StaticRenderer';
import { MouseTracker } from './MouseTracker';

export default function App() {
  function render() {
    return <div> Hello World </div>;
  }

  return (
    <div>
      <StaticRenderer render={render} />
      <MouseTracker />
    </div>
  );
}
