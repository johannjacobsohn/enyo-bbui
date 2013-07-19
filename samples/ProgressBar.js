enyo.kind({
	name: "bbUI.sample.ProgressBar",
	random: function(inSender, inEvent){
		var rnd = Math.random() * 100;
		this.$.normal.setProgress(rnd);
		this.$.error.setProgress(rnd);
		this.$.paused.animateProgressTo(rnd);
		this.$.onyx.animateProgressTo(rnd);
	},
	components: [
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "bbUI.ProgressBar", progress: 40, name: "normal", state: "normal"},
		{kind: "bbUI.ProgressBar", progress: 40, name: "paused", state: "paused"},
		{kind: "bbUI.ProgressBar", progress: 40, name: "error",  state: "error"},
		{kind: "onyx.ProgressBar", progress: 40, name: "onyx"},
		{kind: "enyo.Button", content: "Change progress", ontap: "random"}
	]
});
