enyo.kind({
	name: "bbUI.sample.ToggleButton",
	classes: "enyo-fit",
	handleChange: function(inSender, inEvent){
		this.$.second.setValue(inEvent.value);
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "bbUI.ToggleButton", name: "first", onChange: "handleChange"},
		{kind: "bbUI.ToggleButton", name: "second", onContent: "Do", offContent: "Don't"}
	]
});
