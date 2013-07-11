/**
    _bbUI.imageList_
    
    https://github.com/blackberry/bbUI.js/wiki/Image-List
 */
enyo.kind({
	name: "bbUI.ImageList",
	//~ kind: "enyo.List",
	bbStyle: "arrowbuttons",
	bbimageLoading: "",
	attributes: {
		"data-bb-type": "image-list"
	},
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-image-loading"] = this.bbimageLoading;
		this.attributes["data-bb-style"] = this.bbStyle;
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.imageList.apply([this.node]);
		}
	}
});

/**
 * _bbUI.listItem_
 *
 * https://github.com/blackberry/bbUI.js/wiki/Image-List
 *
 */
enyo.kind({
	name: "bbUI.ListItem",
	title: "",
	img: "",
	attributes: {
		"data-bb-type": "item"
		//onbtnclick="addItem()"
	},
	create: function(){
		this.inherited(arguments);
		this.attributes["data-bb-title"] = this.title;
		this.attributes["data-bb-img"] = this.img;
	}
});
