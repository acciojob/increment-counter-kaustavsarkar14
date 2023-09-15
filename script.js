//your JS code here. If required.
const btn = document.getElementById('incrementBtn')
const c = document.getElementById('counter')
btn.addEventListener('click',()=>{
	alert(c.innerText)
	c.innerText = Number(c.innerText)+1
})