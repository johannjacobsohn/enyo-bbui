enyo.kind({
	name: "bbUI.sample.Checkbox",
	classes: "enyo-fit",
	handleChange: function(inSender, inEvent){
		this.$.second.setChecked(inSender.getValue());
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{content: "bbUI.Checkbox:"},
		{kind: "bbUI.Checkbox", onActivate: "handleChange"},
		{content: "onyx.Checkbox:"},
		{kind: "onyx.Checkbox", onActivate: "handleChange"},
		{content: "enyo.Checkbox:"},
		{kind: "enyo.Checkbox", onActivate: "handleChange"},
		{content: "Receiver:"},
		{kind: "bbUI.Checkbox", name: "second"}
	]
});
