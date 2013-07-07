/**
 * _bbUI.BBMbubbles_
 *
 * https://github.com/blackberry/bbUI.js/wiki/BBM-Bubbles
 * 
 *
    {kind: "bbUI.BBMbubbles", alignment: "left", components: [
        {content: "Hey there", image: "assets/bbmBubbles/read.png"},
    ]}
 * 
 */
enyo.kind({
	name: "bbUI.BBMbubbles",
	alignment: "left",
	reload: function(){
		var c = this.children || [], l = c.length;
		while(l--){
			c[l].attributes = {'data-bb-type': 'item', 'data-bb-img': c[l].image};
		}
	},
	//* @protected
	attributes: {
		'data-bb-type': 'bbm-bubble',
	},
	create: function(){
		this.attributes['data-bb-style'] = this.alignment;
		this.inherited(arguments);
		this.reload();
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.bbmBubble.style( this.node );
		}
	}
});
