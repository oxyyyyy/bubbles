import $ from 'jquery';
import _ from 'lodash';

const colorPalette = ['#31ffe0', '#6ec4c6', '#e6cca5', '#f395a5', '#fff6bd'];
const maxRadius = 200;

export default class Bubble {

	constructor(id) {
		this.id = id;
		this.radius = _.random(10, maxRadius, false) + 'px';
		this.posX = _.random(-10, 100, false) + '%';
		this.posY = _.random(-10, 100, false) + '%';
		this.color = colorPalette[_.random(0, 4, false)];
		this.transitionDuration = _.random(10, 15, false) + 's';
	}

	_generateInlineStyles() {
		return `style="width: ${this.radius}; height: ${this.radius}; top: ${this.posY}; left: ${this.posX}; background-color: ${this.color}; transition-duration: ${this.transitionDuration}"`;
	}

	render() {
		$('#app').append(`<div id="${this.id}" class="bubble"></div>`);
	}

	reRender() {
		$('#' + this.id).css({
			'width': this.radius,
			'height': this.radius,
			'top': this.posX,
			'left': this.posY,
			'background-color': this.color,
			'transition-duration': this.transitionDuration
		})
	}

	updatePos() {
		this.posX = parseInt(this.posX) + _.random(-1, 1, false) + '%';
		this.posY = parseInt(this.posY) + _.random(-1, 1, false) + '%';
	}

	activateAnimation() {
		setInterval(() => {
			this.updatePos();
			this.reRender();
		}, this.transitionDuration);
	}

}
