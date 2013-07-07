enyo.kind({
	kind: "enyo.Select",
	name: "bbUI.Select",
	attributes: {
		"data-bb-style": "fit"
	},
	//~ data-bb-style stretch fit
	//~ data-bb-label
	components: [
		{content: "Descending", value: "d", attributes: {"data-bb-accent-text": "Subtext"} },
		{content: "Ascending", value: "a"}
	],
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.dropdown.style(this.node);
		}
	}
});
