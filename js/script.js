let modal = document.getElementById('myModal'); 
let btn = document.getElementById('myBtn');
let img = document.getElementsByClassName('close')[0];

btn.onclick = function () {
	modal.style.display = 'block';
};

img.onclick = function () {
	modal.style.display = 'none';
};
