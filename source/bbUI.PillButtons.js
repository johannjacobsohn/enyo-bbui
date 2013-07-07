enyo.kind({
	name: "bbUI.PillButtons",
	attributes: {
		"data-bb-type": "pill-buttons"
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.pillButtons.style( this.node );
		}
	}
});

enyo.kind({
	name: "bbUI.PillButton",
	selected: false,
	attributes: {
		"data-bb-type": "pill-button"
	},
	contentChanged: function(){
		if(this.hasNode()){
			this.node.setCaption( this.content );
		}
	},
	create: function(){
		this.inherited(arguments);
		this.attributes['data-bb-selected'] = this.selected;
	}
});
