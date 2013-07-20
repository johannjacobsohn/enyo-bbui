/**
   A _bbUI.ToggleButton_ acts as a switch between two states.

   The bbUI.ToggleButton_ widget is api compatible to and thus interchangable with
   the [onyx.ToggleButton](http://enyojs.com/api/#onyx.ToggleButton) except
   for the [GroupItem API](http://enyojs.com/api/#enyo.GroupItem) (hence, no
   support for the active property).

   For more information see the [bbUI.js documentation on Toggle Buttons](https://github.com/blackberry/bbUI.js/wiki/Toggle-Buttons). 
 */
enyo.kind({
	name: "bbUI.ToggleButton",
	events: {
		/**
			Every time the toggle button is changed this event is fired.
			_inEvent.value_ contains the current state of the toggle button.
		*/
		onChange: ""
	},
	published: {
		//* current state of the toggle button
		value: true,
		//* the displayed "on" text
		onContent: "Yes",
		//* the displayed "off" text
		offContent: "No",
		//* when true, this components accepts no interaction and generates no events
		disabled: false
	},
	//@ protected
	attributes: {
		"data-bb-type": "toggle",
		onchange: "enyo.$[this.id].handleChange()"
	},
	handleChange: function(){
		this.value = this.node.getChecked();
		this.doChange({value: this.value});
	},
	valueChanged: function(){
		this.node.setChecked(this.value);
		this.doChange({value: this.value});
	},
	onContentChanged: function(){
		this.node.setOnCaption(this.onContent);
	},
	offContentChanged: function(){
		this.node.setOffCaption(this.offContent);
	},
	disabledChanged: function(){
		if(this.hasNode()){
			if(this.disabled){
				this.node.disable();
			} else {
				this.node.enable();
			}
		}
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.toggle.style(this.node);
		}
	},
	create: function(){
		this.attributes["data-bb-checked"] = this.value;
		this.attributes["data-bb-on"] = this.onContent;
		this.attributes["data-bb-off"] = this.offContent;

		this.inherited(arguments);
	}
});

