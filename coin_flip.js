var pre_ang = 0;

function flip_coin(){
	coin = document.getElementById('coin');
	var angl;
	coin.style.transitionDuration = '5s';
	coin.style.transformStyle  = 'preserve-3d';
	coin.style.perspective = '500px';
	if (pre_ang <= 0)
		angl =pre_ang + (180*Math.floor(20+Math.random()*21));
	else
		angl =pre_ang - (180*Math.floor(20+Math.random()*2));
	pre_ang = angl;
	coin.style.transform = "rotateX("+angl.toString()+"deg)";
}

var c_card = document.getElementById('coin_card');
c_card.id = 'c_card';
var coin_card = document.createElement('div');
var text_area = document.createElement('h1');
var coin = document.createElement('div');
var head = document.createElement('div');
var head_text = document.createElement('div');
head_text.className = 'face_text';
var tail_text = document.createElement('div');
tail_text.className = 'face_text';
head.id = 'head';
head.className = 'face';
var tail = document.createElement('div');
tail.className = 'face';
tail.id = 'tail';
coin.setAttribute('id','coin');
text_area.style.textAlign = "center";
text_area.innerHTML = 'Flip the coin';
coin_card.style.width = '400px';
coin_card.style.height = '250px';
var line = document.createElement('hr');
line.style.width = '90%';
head_text.innerHTML = 'HEAD';
tail_text.innerHTML = 'TAIL';
head.appendChild(head_text);
tail.appendChild(tail_text);
coin.appendChild(head);
coin.appendChild(tail);
c_card.appendChild(coin_card);
coin_card.appendChild(coin);
c_card.appendChild(line);
c_card.appendChild(text_area);
text_area.addEventListener('click',flip_coin,false);
text_area.style.cursor = 'pointer';