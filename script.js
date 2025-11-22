//your JS code here. If required.

const form=document.getElementById("form");

form.addEventListener("submit",()=>{
	e.preventDefault()
	alert(`First Name: ${e.target[0].value} Last Name: ${e.target[1].value} Phone Number: ${e.target[2].value} Email ID: ${e.target[3].value}`)
})
