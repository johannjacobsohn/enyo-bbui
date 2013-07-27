/**
    A _bbUI.Input_ implements a [bbUI.js Input](https://github.com/blackberry/bbUI.js/wiki/Inputs)
    as an [enyo.Input](http://enyojs.com/api/#enyo.Input).
*/
enyo.kind({
	name: "bbUI.Input",
	kind: "enyo.Input",
	//* If true, _clearButton_ adds a clear button to the input. Note: this property cannot be changed after rendering.
	clearButton: true,
	//* @protected
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-clear"] = this.clearButton ? "" : "none";
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.textInput.style(this.node);
		}
	}
});
