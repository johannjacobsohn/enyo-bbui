/**
    A _bbUI.RadioButton_ renders an HTML Radio Button in either the
    BlackBerry 10 styling or the traditional Mozilla styling.

    **Usage:**

        {kind: "bbUI.RadioButton", onchange: "handleChange", group: "a", name: "first"},
        {kind: "bbUI.RadioButton", onchange: "handleChange", group: "a", name: "second", checked: true},
        {kind: "bbUI.RadioButton", onchange: "handleChange", group: "a", name: "third"},

*/
enyo.kind({
	name: "bbUI.RadioButton",
	kind: "enyo.Input",
	events: {
		//* Triggered when the radio button changes
		onchange: ""
	},
	published: {
		//* The checked status of the element
		checked: false,
		//* Value of this radio button
		value: "",
		//* Maps to the HTML name attribute of this radio button and therefore the group of button this control belongs to
		group: ""
	},
	//* @protected
	attributes: {
		type: "radio",
		onchange: "enyo.$[this.id].handleChange()"
	},
	handleChange: function(){
		this.checked = this.node.getChecked();
		this.doChange();
	},
	checkedChanged: function(inOldValue){
		this.node.setChecked(this.checked);
	},
	groupChanged: function(inOldValue){
		this.node.setAttribute("name", this.group);
	},
	create: function(){
		this.attributes.name = this.group;
		this.attributes.checked = this.checked;
		this.attributes.value = this.value;
		this.inherited(arguments);
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.radio.style( this.node );
		}
	}
});

