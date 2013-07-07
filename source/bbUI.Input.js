enyo.kind({
	name: "bbUI.Input",
	kind: "enyo.Input",
	clearButton: true,
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-clear"] = this.clearButton ? "" : "none";
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.textInput.style( this.node );
		}
	}
});
