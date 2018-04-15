const draw = {
	x: '',
	y: '',
	per: false,
	bugB: document.querySelector('.bug'),
	colB: document.querySelectorAll('.boxCol'),
	colorN: 'black',
	clear: document.querySelector('#clear'),
	colors: ['black','red','blue','green','yellow','white'],
	field: document.querySelector('#field'),
	
	boxC: function(){
					for(let r=0;r<this.colB.length;r++){
					this.colB[r].style.backgroundColor = this.colors[r];
								}
					},
	
	clearing: function(){const divs = document.querySelectorAll('.dot');
							divs.forEach(x => this.field.removeChild(x));
							},
	
	changeR: function(e){
						this.colors.map(function(x){
							if(e.target.getAttribute('value') == x){draw.colorN = x}
							})
						},
	
	fixB: function(){this.per = !this.per},
	
	changePer: function(){this.per = !draw.per
						},
	
	boxAdd: function(){
			const divA = document.createElement('div');
			this.field.appendChild(divA);
			divA.classList.add('dot');
			divA.style.top = this.y + 'px';
			divA.style.left = this.x - (190) + 'px';
			divA.style.backgroundColor = this.colorN;
			},
	
	mouseDraw: function(e){
					e.preventDefault();
					if(draw.per == false){return}
					this.x = e.clientX;
					this.y = e.clientY;
					this.boxAdd();
				}
	
}
draw.field.addEventListener('mousemove',draw.mouseDraw.bind(draw));
document.body.addEventListener('mousedown',draw.changePer.bind(draw));
document.body.addEventListener('mouseup',draw.changePer.bind(draw));
draw.bugB.addEventListener('click',draw.fixB.bind(draw));
draw.colB.forEach(x => x.addEventListener('click',draw.changeR.bind(draw)));
draw.clear.addEventListener('click',draw.clearing.bind(draw));
draw.boxC();
document.body.addEventListener('mousemove',function(){event.preventDefault()})