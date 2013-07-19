/**
    Implements a [bbui activity indicator](https://github.com/blackberry/bbUI.js/wiki/Activity-Indicator)
    similar to - but not interchangeable with - the [onyx.Spinner](http://enyojs.com/api/#onyx.Spinner).
*/
enyo.kind({
	name: "bbUI.Spinner",
	//* The size of the spinner: large, medium or small. Medium is default, small is similar to onyx.Spinner
	size: "medium",
	//* @protected
	attributes: {
		"data-bb-type": "activity-indicator"
	},
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-size"] = this.size;
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.activityIndicator.apply( [this.node] );
		}
	}
});
