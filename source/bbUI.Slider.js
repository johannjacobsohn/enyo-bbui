/**
	Renders a [bbUI.js slider](https://github.com/blackberry/bbUI.js/wiki/Sliders)
	interchangable with the [onyx slider](http://enyojs.com/api/#onyx.Slider).
*/

enyo.kind({
	name: "bbUI.Slider",
	//~ kind: "onyx.Slider", // could be implemented as a subkind of onyx.Slider, but would introduce onyx a dependency
	events: {
		//* Triggered when the value of the slide has changed
		onChange: "",
		//* Triggered while the knob is dragged
		onChanging: ""
	},
	published: {
		//* Minimum value
		min: 0,
		//* Maximum value
		max: 100,
		//* step value by which the value is in- or decremented
		increment: 1,
		//* Current value
		value: 0,
		//* If true, the the value can be set by tapping
		tappable: true
	},
	//* @protected
	tag: "input",
	attributes: {
		type: "range"
	},
	click: function(inEvent){
		if(this.tappable){
			var rel = inEvent.layerX/this.node.parentNode.offsetWidth;
			var value = this.min + rel*(this.max-this.min);
			this.setValue(value);
		}
	},
	handleChanging: function(){
		this.value = this.node.value;
		this.doChanging();
	},
	handleChange: function(){
		this.value = this.node.value;
		this.doChange();
	},
	valueChanged: function(){
		this.node.setValue(this.value);
		this.doChange();
	},
	create: function(){
		this.inherited(arguments);
		this.attributes.min = this.min;
		this.attributes.max = this.max;
		this.attributes.step = this.increment;
		this.attributes.value = this.value;
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.slider.apply([this.node]);
			enyo.dispatcher.listen(this.node.parentNode, "click", this.bindSafely("click"));
			enyo.dispatcher.listen(this.node, "change", this.bindSafely("handleChanging"));
		}
	}
});
