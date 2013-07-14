/**
    The _bbUI.TitleBar_ acts a the main title for the entire app or each view.

    See also [Title-Bars in the bbUI.js wiki](https://github.com/blackberry/bbUI.js/wiki/Title-Bars).
 */
enyo.kind({
	name: "bbUI.TitleBar",
	published: {
		/** The main title */
		caption: "",
		/** The subtitle. Will not be displayed if either backCaption or actionCaption is set. */
		accentText: "",
		/** An additional icon image to be displayed on the left side. If this is set, neither a backbutton nor an action button will be displayed.*/
		img: "",
		/** If set, a back button will be displayed which tap event will be captured in the _onback_ event. */
		backCaption: "",
		/** If set, an additional button will be displayed on the right side. If tapped, if will trigger the onactiontap event. */
		actionCaption: ""
	},
	events: {
		/** An _onactiontap_ event is generated when the action button (the one on the right) is tapped */
		onactiontap: "",
		/** The _onback_ event is triggered when the back button is tapped */
		onback: ""
	},
	//* @protected
	captionChanged: function(){
		this.node.setCaption(this.caption);
	},
	backCaptionChanged: function(){
		this.node.setBackCaption(this.caption);
	},
	actionCaptionChanged: function(){
		this.node.setActionCaption(this.caption);
	},
	imgChanged: function(){
		if(this.hasNode()){
			this.node.img.src = this.img;
		}
	},
	accentTextChanged: function(){
		// for some reason, this is not supported:
		// this.node.setAccentText(this.accentText);
		// so we'll do it by hand
		this.node.querySelector(".bb-title-bar-accent-text").innerHTML = this.accentText;
	},
	attributes: {
		"data-bb-type": "title",
		"onactionclick" : "enyo.$[this.id].doActiontap()"
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

			var backbutton = this.node.querySelector(".bb-titlebar-button-container");
			if(backbutton){
				backbutton.trappedClick = this.doBack.bind(this);
			}
		}
	}
});
