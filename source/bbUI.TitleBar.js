/**
 * _bbUI.TitleBar_
 *
 * https://github.com/blackberry/bbUI.js/wiki/Title-Bars
 *
 * TODO: test setImg / implement imgChanged
 */
enyo.kind({
	name: "bbUI.TitleBar",
	events: {
		"onactiontap": ""
	},
	attributes: {
		"data-bb-type": "title",
		"onactionclick" : "enyo.$[this.id].doActiontap()"
	},
	published: {
		caption: "",
		backCaption: "",
		actionCaption: "",
		accentText: "",
		img: ""
	},
	captionChanged: function(){
		this.node.setCaption(this.caption);
	},
	backCaptionChanged: function(){
		this.node.setBackCaption(this.caption);
	},
	actionCaptionChanged: function(){
		this.node.setActionCaption(this.caption);
	},
	accentTextChanged: function(){
		// for some reason, this is not supported
		// this.node.setAccentText(this.accentText);
		// so we'll do it by hand
		this.node.querySelector(".bb-title-bar-accent-text").innerHTML = this.accentText;
	},
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-caption"] = this.caption;
		this.attributes["data-bb-back-caption"] = this.backCaption;
		this.attributes["data-bb-action-caption"] = this.actionCaption;
		this.attributes["data-bb-accent-text"] = this.accentText;
		this.attributes["data-bb-img"] = this.img;
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.titleBar.apply(this.node);
			if(this.node.onbbuidomready){
				this.node.onbbuidomready();
			}
		}
	}
});
