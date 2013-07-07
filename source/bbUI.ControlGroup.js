/**
 * _bbUI.ControlGroup_
 *
 * https://github.com/blackberry/bbUI.js/wiki/Control-Groups
*/
enyo.kind({
	name: "bbUI.ControlGroup",
	attributes: {
		"data-bb-type": "round-panel"
	},
	components: [
		{attributes: {"data-bb-type": "panel-header"}, content: "My Header"},
		{name: "container", attributes: {"data-bb-type": "label-control-container"}, components: [
			{attributes: {"data-bb-type": "row"}, components: [
				{attributes: {"data-bb-type": "label"}, content: "Settings:"},
				{kind: "bbUI.Button", content: "Edit"}
			]}
		]}
	],
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode() && this.$.container.hasNode()){
			bb.roundPanel.apply( [this.node] );
			bb.labelControlContainers.apply( [this.$.container.node] );
		}
	}
});

