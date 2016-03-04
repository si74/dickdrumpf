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
			$("img").each(function(){
				if (this.src.toLowerCase().indexOf('trump') > -1 
					|| this.alt.toLowerCase().indexOf('trump') > -1
					|| ){
					$(this).attr('src', 'https://i.imgur.com/s4GHeaz.png');
				}
			});
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
