import React from 'react';
import { Mouse } from './Mouse';
import { Cat } from './Cat';

export class MouseTracker extends React.Component {

	render() {
		return (
			<Mouse render={ mouse => <Cat mouse={mouse} /> } /> 
		)
	}

}