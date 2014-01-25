
var clickedPost = function(event)
{
	console.log(event);
	//event.preventDefault();
    var r = window.confirm("Are you sure you want to post this?");
    if( !r )
    	event.preventDefault();
    
}

setTimeout(function() {
	// var element = document.querySelectorAll("button[value='1'][type='submit']")[0]
	// if (element) {
	// 	console.log(element);
	// 	element.onClick = clickedPost;
	// }

	element = document.querySelectorAll('button[value="1"][type="submit"]')[0]
	parent = element.parentNode
	newButton = document.createElement("button")
	newButton.textContent = "Post with Caution"
	parent.appendChild(newButton)
	newButton.type = "submit"
	element.remove()
	newButton.className = '_42ft _42fu _11b selected _42g'
	newButton.addEventListener('click', clickedPost)
	

}, 500);

console.log('the console works too');




//document.getElementsByClassName('_42ft _42fu _11b selected _42g-').onClick = clickedPost;