enyo.kind({
	name: "bbUI.sample.Slider",
	classes: "enyo-fit",
	handleChange: function(inSender, inEvent){
		this.$.value.setContent("Value: " + inSender.value);
		this.$.onyx.setValue(inSender.value);
		if(this.$.html.hasNode()){
			this.$.html.node.value = inSender.value;
		}
	},
	htmlchange: function(inSender, inEvent){
		this.$.bbui.setValue(inEvent.target.value);
		this.$.onyx.setValue(inEvent.target.value);
	},
	onyxchange: function(inSender, inEvent){
		this.$.bbui.setValue(inEvent.value);
		if(this.$.html.hasNode()){
			this.$.html.node.value = inSender.value;
		}
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "bbUI.Slider", name: "bbui", onChange: "handleChange", onChanging: "handleChange"},
		{kind: "onyx.Slider", name: "onyx", onChanging: "onyxchange", onChange: "onyxchange"},
		{tag: "input", attributes: {type: "range"}, onchange: "htmlchange", name: "html", style: "width: 100%;"},
		{name: "value"}
	]
});
