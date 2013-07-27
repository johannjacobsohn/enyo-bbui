enyo.kind({
	name: "bbUI.sample.Spinner",
	classes: "enyo-fit",
	handleChange: function(inSender, inEvent){
		this.$.second.setValue(inEvent.value);
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true},
		{content: "small Spinner:"},
		{kind: "bbUI.Spinner", size: "small"},
		{content: "medium Spinner:"},
		{kind: "bbUI.Spinner", size: "medium"},
		{content: "large Spinner:"},
		{kind: "bbUI.Spinner", size: "large"},
		{content: "onyx.Spinner:"},
		{kind: "onyx.Spinner", classes: "onyx-light"}
	]
});
