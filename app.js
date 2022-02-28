var btn1 = document.getElementById('increase');
var btn2 = document.getElementById('decrease');

var count = 0;
btn1.onclick = function() {
	count = count + 1;
	btn1.innerHTML = count;
}

btn2.onclick = function() {
	count = count - 1;
	btn2.innerHTML = count;
}