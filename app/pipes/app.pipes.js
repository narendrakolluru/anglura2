
(function(app) {
  app.DisplayKeystrokePipe = ng.core.Pipe({
	    name: "displayCardNumber"
	}).Class({

	    // Match class name
	    constructor: function DisplayKeystrokePipe () {},

	    // or simply using function() {}
	    //constructor: function() {},

	    transform: function(value) {
	    	console.log(value);
	        return "**** **** **** 1234";
	    }
	});
})(window.app || (window.app = {}));
