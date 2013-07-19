enyo.kind({
	name: "bbUI.sample.Input",
	classes: "enyo-fit",
	handleChange: function(inSender, inEvent){
		this.$.text.setContent(inSender.value);
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "bbUI.Input", name: "first", oninput: "handleChange", placeholder: "Placeholder", selectOnFocus: true},
		{name: "text"}
	]
});
