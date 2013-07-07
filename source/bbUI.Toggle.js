/**
 * _bbUI.Toggle_
 *
 */
enyo.kind({
	name: "bbUI.Toggle",
	attributes: {
		"data-bb-type": "toggle",
		onchange: "enyo.$[this.id].handleChange()"
	},
	components: [
		{kind: "Signals", webworksready: "ready"}
	],
	handlers: {
		onchange: "handlechange"
	},
	events: {
		onChange: ""
	},
	published: {
		value: true,
		onContent: "Yes",
		offContent: "No"
	},
	handleChange: function(){
		this.value = this.node.getChecked();
		this.doChange({value: this.value});
	},
	valueChanged: function(){
		this.node.setChecked(this.value);
		this.doChange({value: this.value});
	},
	onContentChanged: function(){
		this.node.setOnCaption(this.onContent);
	},
	offContentChanged: function(){
		this.node.setOffCaption(this.offContent);
	},
	ready: function(){
		if(this.hasNode()){
			bb.toggle.style(this.node);
		}
	},
	create: function(){
		this.attributes["data-bb-checked"] = this.value;
		this.attributes["data-bb-on"] = this.onContent;
		this.attributes["data-bb-off"] = this.offContent;

		this.inherited(arguments);
	}
});

