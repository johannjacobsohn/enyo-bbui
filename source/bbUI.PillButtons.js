/**

    _bbUI.PillButtons_ provides a row of buttons, implementing the [bbUI.js
    Pill Buttons Widget](https://github.com/blackberry/bbUI.js/wiki/Pill-Buttons).

    This control is similar to, but not interchangeable with, an [enyo group
    of buttons](http://enyojs.com/api/#enyo.Group) or an [onyx.RadioGroup](http://enyojs.com/api/#onyx.RadioGroup)
    and only accepts [bbUI.PillButton](#bbUI.PillButton) components as children.

    **Usage**:

        {kind: "bbUI.PillButtons", components: [
            {kind: "bbUI.PillButton", content: "First"},
            {kind: "bbUI.PillButton", content: "Second"},
            {kind: "bbUI.PillButton", content: "Third"}
        ]}
*/
enyo.kind({
	name: "bbUI.PillButtons",
	published: {
		//* The index of the currently active pill button
		selectedIndex: ""
	},
	events: {
		//* Triggered when the selected pill button has changed
		onSelect: ""
	},
	//* @protected
	handlers: {
		ontap: "taphandler"
	},
	taphandler: function(inSender, inEvent){
		this.selectedIndex = this.children.map(function(item){return item.name;}).indexOf(inSender.name);
		this.doSelect(this.selectedIndex);
	},
	selectedIndexChanged: function(){
		var selected = this.children[this.selectedIndex];
		if(selected.hasNode()){
			// emulate tap
			selected.node.dotouchstart();
			selected.node.dotouchend();
		}
	},
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

//* @public

/**
    A "bbUI.PillButton" is meant to be used within a [bbUI.PillButtons](#bbUI.PillButtons)
    widget and is generally not used elsewhere.
*/
enyo.kind({
	name: "bbUI.PillButton",
	//* If true, this button is initially selected. Can be changed by setting the selectedIndex on the parent [bbUI.PillButtons](#bbUI.PillButtons) controll.
	selected: false,
	//* @protected
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
		this.attributes["data-bb-selected"] = this.selected;
	}
});
