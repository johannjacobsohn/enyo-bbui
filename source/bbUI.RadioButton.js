enyo.kind({
	name: "bbUI.RadioButton",
	tag: "input",
	group: "",
	attributes: {
		type: "radio",
		onchange: "enyo.$[this.id].handleChange()"
	},
	published: {
		checked: false,
		value: ""
	},
	handleChange: function(){
		this.checked = this.node.getChecked();
	},
	checkedChanged: function(inOldValue){
		this.node.setChecked( this.checked );
	},
	create: function(){
		this.attributes.name = this.group;
		this.attributes.checked = this.checked;
		this.attributes.value = this.value;
		this.inherited(arguments);
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.radio.style( this.node );
		}
	}
});

