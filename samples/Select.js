enyo.kind({
	name: "bbUI.sample.Select",
	classes: "enyo-fit",
	handleChange: function(inSender, inEvent){
		this.$.second.setSelected(inSender.selected);
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "bbUI.Select", label: "first select", selected: 2, onchange: "handleChange", components: [
			{kind: "bbUI.Option", content: "First", accentText: "Subcaption"},
			{kind: "bbUI.Option", content: "Second"},
			{kind: "bbUI.Option", content: "Third"}
		]},
		{kind: "enyo.Select", onchange: "handleChange", components: [
			{kind: "enyo.Option", content: "First"},
			{kind: "enyo.Option", content: "Second"},
			{kind: "enyo.Option", content: "Third"}
		]},
		{kind: "bbUI.Select", label: "second select", name: "second", value: "Second", components: [
			{kind: "bbUI.Option", content: "First"},
			{kind: "bbUI.Option", content: "Second"},
			{kind: "bbUI.Option", content: "Third"}
		]}
	]
});
