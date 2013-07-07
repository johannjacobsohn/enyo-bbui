enyo.kind({
	name: "bbUI.Slider",
	//~ kind: "onyx.Slider",
	tag: "input",
	attributes: {
		type: "range",
		min:"0",
		max:"100",
		step:"10",
		value:"10"
		//~ onchange: "enyo.$[this.id].handleChange()",
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.slider.apply([this.node]);
		}
	}
	//~ <input type="range" min="0" max="100" step="10" value="10" onchange="doSomething(this.value)" />
});
