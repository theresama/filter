// var pressed = false
// var lastInput = ""

// window.onkeydown = function(e) {   
// 	var e = window.event||e;
//    	var key = e.keyCode ? e.keyCode : e.which;

//    	console.log(pressed +", " + key + ", " + document.activeElement.value + ", " + lastInput)
//    	if (key == 13 && document.activeElement.name == "add_comment_text_text" && !pressed && document.activeElement.value.trim()=="" && lastInput.trim()!="") {
//    		//alert("serdtfygvbhj")
//    		pressed = true
//    		e.preventDefault()
//        	if(isOffensive(lastInput)){
//        		    var r = window.confirm("Are you sure you want to comment this?");
//     			if( !r ){ac
//     				e.preventDefault()
//     				pressed = false
//     			}
//        	}pressed=false
//    	}
//    	lastInput = document.activeElement.value
// }


setInterval(function(){
  if (document.activeElement.name == "add_comment_text_text"){

  	document.activeElement.addEventListener('keydown', commentFunction);
	}
}, 500);

var commentFunction = function(e){
		var e = window.event||e;
   		var key = e.keyCode ? e.keyCode : e.which;
   		
   		if (key === 13 && isOffensive(document.activeElement.value) && !window.confirm("Are you sure you want to comment this?")){
   				e.preventDefault()
   				e.stopPropagation();
   				return false;
   			}
}




var clickedPost = function(event)
{
	console.log(event);
	var element = a
	//event.preventDefault();
	if (isOffensive(element)){
    var r = window.confirm("Are you sure you want to post this?");
    if( !r )
    	event.preventDefault();
	}
}

setTimeout(function() {
	//from the home page
	element = document.querySelectorAll('button[value="1"][type="submit"]')[0]
	parent = element.parentNode
	element.addEventListener('click', clickedPost)

	//from profile page
	element2 = document.querySelectorAll('button[value="1"][type="submit"]')[2]
	parent2 = element2.parentNode
	element2.addEventListener('click', clickedPost)




}, 500);

var isOffensive = function(comment){

	var bad = new Array();
	bad[0] = /\w*fuck\w*/
 	bad[1] = /\w*fck\w*/
 	bad[2] = /\w*fuk\w*/
 	bad[3] = /\w*shit\w*/
 	bad[4] = /\w*penis\w*/
 	bad[5] = /\w*fag\w*/
 	bad[6] = /\w*ass\w*/
 	bad[7] = /\w*nigger\w*/
 	bad[8] = /\w*dick\w*/
 	bad[9] = /\w*cunt\w*/

 	for (var i = bad.length - 1; i >= 0; i--) {
 		if (bad[i].test(comment))
 			return true;
 	};
 	return false;
}






