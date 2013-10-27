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

    For more information, see the [bbUI.js Action Bar
    documentation](https://github.com/blackberry/bbUI.js/wiki/Action-Bar).

*/
enyo.kind({
	name: "bbUI.ActionBar",
	events: {
		/** The _onback_ event is fired when the user taps the back button */
		onback: ""
	},
	published: {
		/**
			The back buttons caption. If empty, the backbutton will not be
			shown. Won't usually be visible on Blackberry Q10 and similar devices.
		*/
		backCaption: "",
		/**
			Holds the name of the currently active tab.
			
			This currently active tab can be changed by calling
			``setSelectedTab( tabName )`` on the ActionBar or by calling
			``select()`` on any Action Item
		*/
		selectedTab: ""
	},
	//* @protected
	style: "position: static;", // overwrite bbUI.js default.
	backCaptionChanged: function(){
		if(this.hasNode()){
			this.node.setBackCaption( this.backCaption );
		}
	},
	selectedTabChanged: function(inOldValue){
		var l = this.children.length;
		while(l--){
			if(this.children[l].name === this.selectedTab){
				if(this.hasNode() && this.children[l].hasNode()){
					this.node.setSelectedTab( this.children[l].node );
				}
				this.children[l].selected = true;
			} else {
				this.children[l].selected = false;
			}
		}
	},
	handlers: {
		ontap: "handletap",
		onTabSelected: "handleTabSelected"
	},
	handletap: function(inSender, inEvent){
		if(inEvent.target.className.indexOf("bb-action-bar-back-button") !== -1){
			this.doBack();
			return true;
		}
	},
	handleTabSelected: function(inSender, inEvent){
		this.setSelectedTab(inEvent.name);
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

			// we need to bubble a resize event to trigger recalculation of
			// fittable layouts (actionBar.apply probably added classes which
			// changed the height of this element).
			// @FIXME: this seems somewhat expensive and unnecessary. 
			this.bubble("onresize");
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
    not generally used elsewhere.

    NOTE: The *img* property **must** be set.
 */
enyo.kind({
	name: "bbUI.Action",
	/**
		An Action Item can either be a button or a tab. A tab is meant for
		navigation and will usually open another view (eg. Settings) while a
		button corresponds to some kind of action that doesn't switch context
		(such as "reload", "send" etc).

		This property cannot be changed after rendering.
	*/
	type: "button",
	/**
		An overflowing tab or button is pushed to the secondary menu.

		This property cannot be changed after rendering.
	 */
	overflow: false,
	/**
		A pinned button is set apart from other buttons to denote special or
		destructive functionality.

		This only works for button actions in the overflow menu and cannot be
		changed after rendering.
	*/
	pin: false,
	/**
		A secondary caption which is shown below the main caption.

		This is only shown on tabs in the overflow menus and cannot be changed after rendering.
	*/
	accentText: "",
	published: {
		/** The icons's image path */
		img: "",
		/** The items caption - will not be displayed on Q10 and similar devices */
		caption: "",
		/** Indicate whether this item is selected or not. */
		selected: false,
		/** This item's visibility. Change with ``.setVisibility(true|false)``. Note: this is **not** the same as enyos *showing* property.*/
		visible: true
	},
	/** Shortcut for ``setSelected(true)`` */
	select: function(){
		this.setSelected(true);
	},
	//* @protected
	captionChanged: function(inOldValue){
		if(typeof inOldValue !== "undefined" && this.hasNode()){
			this.node.setCaption( this.caption );
		}
	},
	selectedChanged: function(){
		if(this.selected){
			this.bubble("onTabSelected", {name: this.name});
		}
	},
	visibleChanged: function(){
		if(this.hasNode()){
			if(this.visible){
				this.node.show();
			} else {
				this.node.hide();
			}
		}
	},
	imgChanged: function(inOldValue){
		if(typeof inOldValue !== "undefined" && this.hasNode()){
			this.node.setImage( this.img );
		}
	},
	attributes: {
		"data-bb-type": "action"
	},
	create: function(){
		this.inherited(arguments);
		this.content = this.caption;
		this.attributes["data-bb-visible"] = this.visible.toString();
		this.attributes["data-bb-style"] = this.type;
		this.attributes["data-bb-overflow"] = this.overflow;
		this.attributes["data-bb-img"] = this.img;
		this.attributes["data-bb-pin"] = this.pin;
		this.attributes["data-bb-accent-text"] = this.accentText;
		this.attributes["data-bb-selected"] = this.selected;
	}
});
