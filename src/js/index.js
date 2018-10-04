import $ from 'jquery';
import _ from 'lodash';

import 'normalize-css';
import '../css/index.css';

import Bubble from './modules/Bubble';

const numberOfBubbles = 150;

let index = 1;

let bubbles = [];

function updateArray() {
	bubbles.forEach(element => {
		element.mount();
		element.updateCss();
		// element.activateAnimation();
		element.handleMouseover();
	});
}

for (index = 1; index < numberOfBubbles + 1; index++) {
	bubbles.push(new Bubble(index));
}

updateArray();

// $('#app').click(() => {
// 	index = index + 1;
// 	let newBubble = new Bubble(index, true);
// 	bubbles.push(newBubble);
// 	newBubble.mount();
// 	newBubble.updateCss();
// 	newBubble.handleMouseover();
// 	// newBubble.activateAnimation();
// });
