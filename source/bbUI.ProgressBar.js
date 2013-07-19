/**
    _bbUI.ProgressBar_ implements a [bbUI.js Progress Indicator](https://github.com/blackberry/bbUI.js/wiki/Progress-Indicator)
    interchangeable with [onyx.ProgressBar](http://enyojs.com/api/#onyx.ProgressBar).
    
    Currently, ``animateProgressTo`` doesn't animate the ProgressBar and the ``min`` property is unsupported.
 */
enyo.kind({
	name: "bbUI.ProgressBar",
//	kind: "onyx.ProgressBar", // bbUI.ProgressBar could be a direct subkind of onyx.ProgressBar, but this would introduce an dependency on onyx
	published: {
		//* The maximum progress
		max: 100,
		//* The current progress
		progress: 0,
		//* The state of the current progress, eg. normal, paused or error
		state: "normal"
	},
	events: {
		//* ``onAnimateProgressFinish`` is triggered after ``animateProgressTo`` has been called. Nothing is animated, this is included for compatibility with onyx.Progress.
		onAnimateProgressFinish: ""
	},
	//* Doesn't acutally animates the progress bar but sets the progress directly. This is included for compatibility with onyx.Progress.
	animateProgressTo: function(inValue){
		this.setProgress(inValue);
		window.setTimeout(this.bindSafely("doAnimateProgressFinish"), 1);
	},
	//* @protected
	stateChanged: function(){
		this.node.setState(bb.progress[this.state.toUpperCase()]);
	},
	progressChanged: function(){
		if(this.hasNode()){
			this.node.setValue( this.progress );
		}
	},
	create: function(){
		this.inherited(arguments);
		this.attributes.min = this.min;
		this.attributes.max = this.max;
		this.attributes.value = this.progress;
	},
	rendered: function(){
		this.inherited(arguments);
		if(this.hasNode()){
			bb.progress.style( this.node );
			this.stateChanged();
		}
	}
});
