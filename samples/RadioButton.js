enyo.kind({
	name: "bbUI.sample.RadioButton",
	classes: "enyo-fit",
	handleChange: function(inSender, inEvent){
		this.$.value.setContent(inSender.value);
	},
	check: function(inSender){
		this.$[inSender.target].setChecked(true);
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "bbUI.RadioButton", onchange: "handleChange", group: "a", name: "first", value:"First radio button"},
		{kind: "bbUI.RadioButton", onchange: "handleChange", group: "a", name: "second", value:"Second radio button", checked: true},
		{kind: "bbUI.RadioButton", onchange: "handleChange", group: "a", name: "third", value:"Third radio button"},
		{kind: "Button", content: "Check first", ontap: "check", target: "first"},
		{kind: "Button", content: "Check second", ontap: "check", target: "second"},
		{kind: "Button", content: "Check third", ontap: "check", target: "third"},
		{name: "value"}
	]
});
