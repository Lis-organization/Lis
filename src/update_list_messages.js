function newElement(text) {
	var li = document.createElement("li");
	var t = document.createTextNode(text);
	li.appendChild(t);
	document.getElementById("messagesList").appendChild(li);
}