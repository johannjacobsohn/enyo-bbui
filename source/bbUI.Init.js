enyo.kind({
	name: "bbUI.Init",
	kind: "Component",

	controlsDark: false,       // If set to true, the controls will use the dark theme
	listsDark: false,          // If set to true, lists will use the dark theme (you need a dark background)
	coloredTitleBar: false,    // If set to true, the title bar will be colored based on the highlight color
	highlightColor: '#00A8DF', // A highlight color to use when a user selects an item   
/*
	{
		onbackkey: null,                   // Custom handler for back key on BlackBerry 5/6/7 smartphones
		onscreenready: null,               // Manipulate your screen before it's inserted into the DOM
		ondomready: null,                  // Manipulate your screen after it's inserted into the DOM
	}
*/
	create: function(){
		this.inherited(arguments);

		var config = {
			controlsDark    : this.controlsDark,
			listsDark       : this.listsDark,
			coloredTitleBar : this.coloredTitleBar,
			highlightColor  : this.highlightColor
		};

		bb.init(config);

		document.addEventListener('webworksready', function(e) {
			enyo.Signals.send("webworksready");
		});
	}
});
