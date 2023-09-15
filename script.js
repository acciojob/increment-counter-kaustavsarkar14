//your JS code here. If required.
const btn = document.getElementById('incrementBtn')
const counter = document.getElementById('counter')
btn.addEventListener('click',()=>{
	alert(Number(counter.innerText))
	counter.innerText = Number(counter.innerText)+1
})