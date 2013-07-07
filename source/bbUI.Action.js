/**
 * _bbUI.ActionBar_
    {kind: "bbUI.ActionBar", components: [
        {kind: "bbUI.Action"},
        {kind: "bbUI.Action", ontap: "handle"},
        {kind: "bbUI.Action"}
    ]}
*/
enyo.kind({
	name: "bbUI.ActionBar",
	backCaption: "",
	events: {
		onback: ""
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
	//* @protected
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
 * _bbUI.Action_
 *
 * @TODO: document
 * @TODO: default icon
 * @TODO: img, accent-text, overflow(?) and pin (?) as published properties
 *
 */
enyo.kind({
	name: "bbUI.Action",
	//* action | tab
	bbStyle: "button", // or tap
	overflow: true, 
	pin: false, // NOTE: true is only supported for button actions
	img: "", // Path to image to be used in the action item
	accentText: "", // Secondary text to show on an actionNOTE: this is only supported on tab actions for display in the tab overflow
	content: "",
	//* @protected
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

