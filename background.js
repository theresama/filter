window.onload = function(){
	 
		chrome.extension.sendMessage({
			type: "clickedPostButton"
		)
	}
}
alert("i'm the background")


var postButton = function(){
	chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.sendMessage(tab.id, {type: "clickedPostButton"});
	})
}