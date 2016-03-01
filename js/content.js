var Extension = (function() {

	// this reference
	var _this;

	// Constructor
	function Extension() {
		_this = this;
		this.setupReceiver();
	}
	
	Extension.prototype = {
	}
	
	return Extension;
})();

window.extension = new Extension();
