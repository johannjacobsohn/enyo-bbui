/**
	The _bbUI.Checkbox_ implements a [bbUI.js
	Checkbox](https://github.com/blackberry/bbUI.js/wiki/Checkboxes) as a
	[enyo.Checkbox](http://enyojs.com/api/#enyo.Checkbox) which is
	interchangable with [onyx.Checkbox](http://enyojs.com/api/#onyx.Checkbox).
 */
enyo.kind({
	name: "bbUI.Checkbox",
	kind: "enyo.Checkbox",
	//* @protected
	handleChange: function(){
		this.checked = this.active = this.node.getChecked();
		this.doActivate({originator: this});
	},
	checkedChanged: function(inOldValue){
		if(typeof inOldValue === "undefined"){
			return;
		}
		this.node.setChecked( this.checked );
	},
	disabledChanged: function(inOldValue){
		if(typeof inOldValue === "undefined"){
			return;
		}
		this.node[this.disabled ? "disable" : "enable"]();
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.checkbox.style(this.node);
			enyo.dispatcher.listen(this.node, "change", this.bindSafely("handleChange"));
		}
	}
});
