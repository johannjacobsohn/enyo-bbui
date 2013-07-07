enyo.kind({
	name: "bbUI.ActivityIndicator",
	size: "medium",// large, medium, small
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
