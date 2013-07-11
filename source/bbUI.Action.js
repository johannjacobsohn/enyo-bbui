/**

    A _bbUI.ActionBar_ is a kind toolbar which is fixed at the bottom of the
    screen. It can contain a backbutton, which triggers a onback event when
    tapped.

    An ActionBar can only contain [bbUI.Action](#bbUI.Action) components, which cannot have
    child components themself.

    **Usage:**

        {kind: "bbUI.ActionBar", components: [
            {kind: "bbUI.Action"},
            {kind: "bbUI.Action", ontap: "handle"},
            {kind: "bbUI.Action"}
        ]}


    **Limitations:**

    - the backbutton only works with Action buttons of type button


    For more information, see the [bbUI.js Action Bar
    documentation](https://github.com/blackberry/bbUI.js/wiki/Action-Bar).

*/
enyo.kind({
	name: "bbUI.ActionBar",
	events: {
		/** Fired when */
		onback: ""
	},
	published: {
		/**
		The back buttons caption. If empty, the backbutton will not be
		shown. Won't usually be visible on Blackberry Q10 and similar devices.
		*/
		backCaption: ""
	},
	//* @protected
	backCaptionChanged: function(){
		// @TODO: implement
	},
	handlers: {
		ontap: "handletap"
	},
	handletap: function(inSender, inEvent){
		if(inEvent.target.className.indexOf("bb-action-bar-back-button") !== -1){
			this.doBack();
			return true;
		}
	},
	rendered: function(){
		this.inherited(arguments);
		bb.screen.currentScreen = document.body;
		if(this.hasNode()){
			bb.screen.currentScreen = bb.screen.currentScreen || {};
			bb.screen.currentScreen.outerScrollArea = {};
			bb.screen.currentScreen.outerScrollArea.style = {};
			bb.actionBar.apply(this.node, document.body);
			var backbutton = this.node.querySelector(".bb-action-bar-back-button");
			if(backbutton){
				backbutton.setAttribute("onclick", "");
			}
		}
	},
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-back-caption"] = this.backCaption;
	},
	attributes: {
		"data-bb-type": "action-bar"
	}
});

//* @public
/**
    A _bbUI.Action_ is a tappable element within an [bbUI.ActionBar](#bbUI.ActionBar) and is
    not generally used in application code elsewhere.

    NOTE: The _img_ property _must_ be set.

 */
enyo.kind({
	name: "bbUI.Action",
	/** @TODO: write documentation  action | tab */
	bbStyle: "button",
	/** @TODO:: write documentation */
	overflow: true,
	/** @TODO: NOTE: true is only supported for button actions */
	pin: false,
	published: {
		/** @TODO: Path to image to be used in the action item */
		img: "",
		/** @TODO:Secondary text to show on an action..  NOTE: this is only supported on tab actions for display in the tab overflow */
		accentText: "",
		/** @TODO: write documentation */
		content: ""
	},
	//* @protected
	contentChanged: function(){
		//*TODO: implement
	},
	imgChanged: function(){
		//*TODO: implement
	},
	accentTextChanged: function(){
		//*TODO: implement
	},
	attributes: {
		"data-bb-type": "action"
	},
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-style"] = this.bbStyle;
		this.attributes["data-bb-overflow"] = this.overflow;
		this.attributes["data-bb-img"] = this.img;
		this.attributes["data-bb-pin"] = this.pin;
		this.attributes["data-bb-accent-text"] = this.accentText;
	}
});

