import $ from 'jquery';
import _ from 'lodash';
import 'popper.js';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css';

import Bubble from './modules/Bubble';

let numberOfBubblesInput = $('#numberOfBubbles');
let numberOfBubbles = $('#numberOfBubbles').val();

let index = 1;

let bubbles = [];

function updateArray() {
	for (index; index < numberOfBubbles + 1; index++) {
		bubbles.push(new Bubble(index));
	}
	bubbles.forEach(element => {
		element.mount();
		element.updateCss();
		// element.activateAnimation();
		element.handleMouseover();
	});
}

updateArray();

numberOfBubblesInput.change(() => {
	numberOfBubbles = $('#numberOfBubbles').val();
	bubbles = [];
	$('#app').empty();
	index = 1;
	updateArray();
})

$('#app').click(() => {
	index = index + 1;
	let newBubble = new Bubble(index, true);
	bubbles.push(newBubble);
	newBubble.mount();
	newBubble.updateCss();
	newBubble.handleMouseover();
	// newBubble.activateAnimation();
});
