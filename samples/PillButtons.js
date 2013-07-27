enyo.kind({
	name: "bbUI.sample.PillButtons",
	classes: "enyo-fit",
	handleChange: function(inSender, inEvent){
		this.$.second.setSelectedIndex(inSender.selectedIndex);
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "bbUI.PillButtons", name: "first", ontap: "handleChange", components: [
			{kind: "bbUI.PillButton", content: "Mo"},
			{kind: "bbUI.PillButton", content: "Tu"},
			{kind: "bbUI.PillButton", content: "We", selected: false},
			{kind: "bbUI.PillButton", content: "Th"},
			{kind: "bbUI.PillButton", content: "Fr"},
			{kind: "bbUI.PillButton", content: "Mo"},
			{kind: "bbUI.PillButton", content: "Tu"},
			{kind: "bbUI.PillButton", content: "We"},
			{kind: "bbUI.PillButton", content: "Th"},
			{kind: "bbUI.PillButton", content: "Fr"}
		]},
		{kind: "bbUI.PillButtons", name: "second", components: [
			{kind: "bbUI.PillButton", content: "Mo"},
			{kind: "bbUI.PillButton", content: "Tu"},
			{kind: "bbUI.PillButton", content: "We"},
			{kind: "bbUI.PillButton", content: "Th"},
			{kind: "bbUI.PillButton", content: "Fr"},
			{kind: "bbUI.PillButton", content: "Mo"},
			{kind: "bbUI.PillButton", content: "Tu"},
			{kind: "bbUI.PillButton", content: "We"},
			{kind: "bbUI.PillButton", content: "Th"},
			{kind: "bbUI.PillButton", content: "Fr"}
		]}
	]
});
