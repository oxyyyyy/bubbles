import $ from 'jquery';
import _ from 'lodash';

import 'normalize-css';
import '../css/index.css';

import Bubble from './modules/Bubble';

const numberOfBubbles = 200;

let bubbles = [];

for (let index = 1; index < numberOfBubbles + 1; index++) {
	bubbles.push(new Bubble(index));
}

bubbles.forEach(element => {
	element.render();
	element.activateAnimation();
});

// setInterval(() => {
//   bubbles.forEach(element => {
// 		element.animate();
// 		element.reRender();
// 	});
// }, animationTickMs);
