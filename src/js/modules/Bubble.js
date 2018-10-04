import $ from 'jquery';
import _ from 'lodash';

const colorPalette = ['#31ffe0', '#6ec4c6', '#e6cca5', '#f395a5', '#fff6bd'];
const minRadius = 50;
const maxRadius = 200;

export default class Bubble {

	constructor(id, clicked) {
		this.id = id;
		this.radius = _.random(minRadius, maxRadius, false) + 'px';
		this.color = colorPalette[_.random(0, 4, false)];
		this.transitionDuration = _.random(7, 12, false) + 's';
		if (clicked) {
			this.posX = event.pageY - parseInt(this.radius) / 2 + 'px';
			this.posY = event.pageX - parseInt(this.radius) / 2 + 'px';
		} else {
			this.posX = _.random(-10, 100, false) + '%';
			this.posY = _.random(-10, 100, false) + '%';
		}
	}

	mount() {
		$('#app').append(`<div id="${this.id}" class="bubble"></div>`);
	}

	updateCss() {
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

	updatePosCritical() {
		this.posX = parseInt(this.posX) + _.random(-20, 20, false) + '%';
		this.posY = parseInt(this.posY) + _.random(-20, 20, false) + '%';
		this.transitionDuration = _.random(2, 5, false) + 's';
	}

	handleMouseover() {
		$('#' + this.id).mouseover(() => {
			this.updatePosCritical();
			this.updateCss();
			console.log('Mouse over element: ' + this);
		});
	}

	activateAnimation() {
		setInterval(() => {
			this.updatePos();
			this.updateCss();
		}, this.transitionDuration);
	}

}
