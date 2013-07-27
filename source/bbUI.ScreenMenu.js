/**
    _bbUI.Menu_

*/
enyo.kind({
	name: "bbUI.ScreenMenu",
	//* @protected
	attributes: {
		"data-bb-type": "menu"
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.menuBar.apply(this.node, document.body);
		}
	}
});

//* @public
/**
    _bbUI.MenuItem_


*/
enyo.kind({
	name: "bbUI.ScreenMenuItem",
	//*
	img: "",
	//*
	caption: "",
	//* @protected
	attributes: {
		"data-bb-type": "menu-item"
	},
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-img"] = this.img;
		this.content = this.caption;
	}
});
