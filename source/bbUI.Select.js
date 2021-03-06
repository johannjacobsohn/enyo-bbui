/**
	_bbUI.Select_ implements [the bbUI.js Dropdown](https://github.com/blackberry/bbUI.js/wiki/DropDowns) as a
	[enyo.Select](http://enyojs.com/api/#enyo.Select). This is similar to, but not interchangable with, the onyx.Menu.

	**Usage:**

		{kind: "bbUI.Select", label: "first select", selected: 2, onchange: "handleChange", components: [
			{kind: "bbUI.Option", content: "First", accentText: "Subcaption"},
			{kind: "bbUI.Option", content: "Second"},
			{kind: "bbUI.Option", content: "Third"}
		]},
	
*/
enyo.kind({
	name: "bbUI.Select",
	kind: "enyo.Select",
	events: {
		onchange: ""
	},
	published: {
		//* The main label for this dropdown box
		label: "",
		//* The value of the currently active option
		value: "",
		//* The index of the selected value
		selected: 0,
		//* Disables the widget
		disabled: false
	},
	//* @protected
	handleChange: function(){
		if(this.hasNode()){
			this.setValue(this.node.value);
		}
		this.doChange({originator: this});
	},
	disabledChanged: function(){
		if(this.disabled){
			this.node.disable();
		} else {
			this.node.enable();
		}
	},
	labelChanged: function(){
		if(this.hasNode()){
			this.node.setCaption(this.label);
		}
	},
	selectedChanged: function(){
		if(this.hasNode() && this.node.setSelectedItem){
			this.node.setSelectedItem(this.selected);
		}
		this.value = this.children[this.selected].content;
	},
	valueChanged: function(){
		var c = this.children, l = c.length;
		if(this.hasNode() && this.node.setSelectedItem){
			this.node.setSelectedItem(this.selected);
		}
		while(l--){
			if(c[l].content === this.value){
				this.selected = l;
				break;
			}
		}
	},
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-label"] = this.label;
		this.attributes.disabled = this.disabled;
		this.valueChanged();
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.dropdown.style(this.node);
			this.node.setSelectedItem(this.selected);
			enyo.dispatcher.listen(this.node, "change", this.bindSafely("handleChange"));
		}
	}
});

//* @public

/**
    A _bbUI.Option_ implements _enyo.Option_ for the [bbUI.Select](#bbUI.Select).
*/
enyo.kind({
	name: "bbUI.Option",
	kind: "enyo.Option",
	/**
	    additional text to be displayed alongside an option caption.
	    Note: this property cannot be changed after rendering.
	*/
	accentText: "",
	//* @protected
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-accent-text"] = this.accentText;
	}
});
