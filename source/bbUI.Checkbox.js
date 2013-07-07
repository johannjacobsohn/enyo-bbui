enyo.kind({
	name: "bbUI.Checkbox",
	kind: "enyo.Checkbox",
	attributes: {
		onchange: "enyo.$[this.id].handleChange()"
	},
	handleChange: function(){
		this.checked = this.node.getChecked();
		this.doActivate();
	},
	checkedChanged: function(inOldValue){
		if(typeof inOldValue === "undefined") return;
		this.node.setChecked( this.checked );
	},
	disabledChanged: function(inOldValue){
		if(typeof inOldValue === "undefined") return;
		this.node[this.disabled ? "disable" : "enable"]();
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.checkbox.style(this.node);
		}
	}
});
