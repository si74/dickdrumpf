var Extension = (function() {

	// this reference
	var _this;

	// Constructor
	function Extension() {
		_this = this;
		this.setupReceiver();
	}
	
	Extension.prototype = {
		constructor: Extension,
		getImages: function(){
			var divs = document.querySelectorAll('img');
			for (var i = 0; i < divs.length; i++){
				altStatus = (divs[i].getAttribute('alt') ? (divs[i].getAttribute('alt').toLowerCase().indexOf('trump') > -1): false);
				srcsetStatus = (divs[i].getAttribute('srcset') ? (divs[i].getAttribute('srcset').toLowerCase().indexOf('trump') > -1): false);
				srcStatus = (divs[i].getAttribute('src').toLowerCase().indexOf('trump') > -1);

				if (altStatus || srcsetStatus || srcStatus){
					divs[i].setAttribute('src', 'https://i.imgur.com/s4GHeaz.png');
				}
			}
		},
		setupReceiver : function() {
			chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

                //setup mouseicon listener
                if (request.method == "trumpcheck"){
                    _this.getImages();
                    sendResponse({message: "OK"});
                }
            });
		}
	}
	
	return Extension;
})();

window.extension = new Extension();
