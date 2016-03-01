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
