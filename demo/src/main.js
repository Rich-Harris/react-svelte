import * as React from 'react';
import { render } from 'react-dom';
import SvelteComponent from './SvelteComponent.js';
import SvelteThing from './SvelteThing.html';
import SvelteThing2 from './SvelteThing2.svelte';

function App(props) {
	return (
		<div>
			<p>this is a Svelte component inside a React app:</p>
			<SvelteComponent this={SvelteThing} count={props.count}/>
			<SvelteComponent this={SvelteThing2} count={props.count}/>
		</div>
	)
}

const main = document.querySelector('main');
let i = 0;

function update() {
	render(<App this={SvelteThing} count={i++}/>, main);
	setTimeout(update, 1000);
}

update();