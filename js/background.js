//check for new tab being loaded
//send message to content script to check for donald trump photos
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	if (changeInfo.status == "complete"){

		/*Send message to content script to look for trump photos*/
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id,{method: "trumpcheck", from: "background.js"},function(response){
				console.log('menu click message sent');
			});
		});

	}
});