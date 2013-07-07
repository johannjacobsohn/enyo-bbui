enyo.kind({
	name: "bbUI.Progress",
//	kind: "onyx.ProgressBar",
	published: {
		max: 100,
		progress: 20,
		state: "normal"
	},
	stateChanged: function(){
		this.node.setState(bb.progress[this.state.toUpperCase()]);
	},
	progressChanged: function(){
		if(this.hasNode()){
			this.node.setValue( this.progress );
		}
	},
	create: function(){
		this.inherited(arguments);
		this.attributes.max = this.max;
		this.attributes.value = this.progress;
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.progress.style( this.node );
		}
	}
});
