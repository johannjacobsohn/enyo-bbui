/**
    A _bbUI.Button_ implements an [bbUI
    Button](https://github.com/blackberry/bbUI.js/wiki/Buttons) as a
    [enyo.Button](http://enyojs.com/api/#enyo.Button). It's interchangeable
    with an [onyx.Button](http://enyojs.com/api/#onyx.Button) if you ignore
    the _image_ property. Cannot contain other components.

    If the content is left empty, the button will become an image button.
*/
enyo.kind({
	name: "bbUI.Button",
	kind: "enyo.Button",
	published: {
		//* An icon to be displayed alongside the content
		image: null
	},
	//* @protected
	tag: "div",
	attributes: {
		"data-bb-type": "button"
	},
	imageChanged: function(){
		this.node.setImage( this.image );
	},
	disabledChanged: function(){
		if(this.hasNode()){
			this.node[this.disabled ? "disable" : "enable"]();
		}
	},
	contentChanged: function(){
		if(this.hasNode()){
			this.node.setCaption(this.content);
		}
	},
	create: function(){
		this.inherited(arguments);
		if(this.image){
			this.attributes["data-bb-img"] = this.image;
		}
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.button.style(this.node);
		}
	}
});
