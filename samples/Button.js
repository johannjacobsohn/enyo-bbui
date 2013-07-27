enyo.kind({
	name: "bbUI.sample.Button",
	classes: "enyo-fit",
	handleTap: function(inSender, inEvent){
		enyo.log("Tapped: " + inSender.content);
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true},
		{kind: "bbUI.Button", content: "disabled button", disabled: true, ontap: "handleTap"},
		{kind: "bbUI.Button", content: "some button", ontap: "handleTap"},
		{kind: "bbUI.Button", content: "icon button", image: "ic_settings.png", ontap: "handleTap"},
		{kind: "bbUI.Button", image: "ic_settings.png", ontap: "handleTap"},
		{kind: "onyx.Button", content: "onyx button", ontap: "handleTap"},
		{kind: "onyx.Button", ontap: "handleTap", components:[
			{kind: "Image", src: "ic_settings.png"},
			{content: "onyx button with image"}
		]}
	]
});
