let i = 0; //Start point
let images = [];
let time = 1000;

images[0] =
	"https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQzfHxjb2RlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

images[1] =
	"https://images.unsplash.com/photo-1557599443-2071a2df9c19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

images[2] =
	"https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMwfHxkZXZlbG9wZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

images[3] =
	"https://images.unsplash.com/photo-1525969400584-bdd69c615bfc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM0fHxjb2RlciUyMHNldHVwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

function changeImg() {
	document.slide.src = images[i];
	// Check If Index Is Under Max
	if (i < images.length - 1) {
		// Add 1 to Index
		i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	//Run image every sec
	setTimeout("changeImg()", time);
}

window.onload = changeImg;

// Opening the Modal
const viewbtn = document.querySelector("#viewProject");
const project = document.querySelector(".view-project");
const closebtn = document.getElementById("btnClose");

project.classList.add("hidden");
viewbtn.addEventListener("click", function () {
	project.classList.remove("hidden");
});

closebtn.addEventListener("click", function () {
	project.classList.add("hidden");
	project.style.display = "none";
});
