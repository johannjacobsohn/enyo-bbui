enyo.kind({
	name: "bbUI.Button",
	bbStyle: "fit", // fit, stretch
	attributes: {
		"data-bb-type": "button"
	},
	published: {
		disabled: false,
		image: null
	},
	imageChanged: function(){
		this.node.setImage( this.image );
	},
	disabledChanged: function(){
		this.node[this.disabled ? "disable" : "enable"]();
	},
	contentChanged: function(){
		if(this.hasNode()){
			this.node.setCaption(this.content);
		}
	},
	create: function(){
		this.attributes["data-bb-style"] = this.bbStyle;
		this.inherited(arguments);
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.image){
			this.attributes["data-bb-img"] = this.image;
		}
		if(this.hasNode()){
			bb.button.style(this.node);
		}
	}
});
