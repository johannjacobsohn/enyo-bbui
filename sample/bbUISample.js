enyo.kind({
	name: "bbUISample",
	classes: "enyo-fit",
	fit: true,
	action: function(){
		var comment = this.$.input.value;
		if(comment){
			this.$.input.setValue("");

			var c = this.$.me.createComponent({content: comment, image: "assets/bbmBubbles/bullet.png"});
			this.$.me.reload();
			this.$.me.render();
		}
	},
	openList: function(){
		this.$.panels.setIndex(0);
	},
	openConversation: function(){
		this.$.panels.setIndex(1);
	},
	openSettings: function(){
		this.$.panels.setIndex(2);
	},
	saveSettings: function(){
		alert("saved");
	},
	components:[
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "Panels", arrangerKind: "CollapsingArranger", draggable: false, fit:true, style: "height: 100%", components: [

			// contactlist view
			{kind: "FittableRows", components:[
				{style: "height: 92px", components: [
					{kind: "bbUI.TitleBar", caption: "bbUI.js/EnyoJS"},
				]},
				{kind: "enyo.Scroller", fit: true, horizontal: "hidden", components: [
					{kind: "bbUI.ImageList", ontap: "openConversation", components: [
						{kind: "bbUI.ListItem", title: "Alec", content: "Talk to me!", img: "assets/avatars/alec.png"},
						{kind: "bbUI.ListItem", title: "Dallas", content: "stiff and mechanic", img: "assets/avatars/dallas.png"},
						{kind: "bbUI.ListItem", title: "Anders", content: "absolut maniac", img: "assets/avatars/anders.png"},
						{kind: "bbUI.ListItem", title: "Brian", img: "assets/avatars/brian.png"},
						{kind: "bbUI.ListItem", title: "Eric", content: "Chillin':)", img: "assets/avatars/erik.png"},
						{kind: "bbUI.ListItem", title: "Tim", img: "assets/avatars/tim.png"}
					]}
				]},
				{style: "height: 109px", components: [
					{kind: "bbUI.ActionBar", onback: "openList", components: [
						{kind: "bbUI.Action", bbStyle: "tap", content: "Settings", ontap: "openSettings", img:"assets/ic_settings.png"},
						{kind: "bbUI.Action", bbStyle: "tap", content: "About", img:"assets/ic_info.png"},
						{kind: "bbUI.Action", bbStyle: "tap", content: "Delete History", pin: true, img:"assets/ic_delete.png"}
					]}
				]}
			]},

			// Conversation view
			{style: "background: #fff", kind: "FittableRows", components: [
				{style: "height: 92px", components: [
					{kind: "bbUI.TitleBar", caption: "Eric", accentText: "Talk to me!", onactiontap: "action", img: "assets/avatars/alec.png"},
				]},
				{kind: "enyo.Scroller", fit: true, horizontal: "hidden", components: [
					{kind: "bbUI.BBMbubbles", alignment: "left", components: [
						{content: "Hey there", image: "assets/bbmBubbles/read.png"},
					]},
					{kind: "bbUI.BBMbubbles", alignment: "right", components: [
						{content: "Hi :)", image: "assets/bbmBubbles/read.png"},
					]},
					{kind: "bbUI.BBMbubbles", alignment: "left", components: [
						{content: "Whats up?", image: "assets/bbmBubbles/read.png"},
					]},
					{kind: "bbUI.BBMbubbles", alignment: "right", name: "me", components: [
						{content: "nothin'", image: "assets/bbmBubbles/read.png"},
					]}
				]},
				{style: "height: 189px", components: [
					{kind: "bbUI.Input", value:"New Message"},
					{kind: "bbUI.ActionBar", onback: "openList", backCaption: "back", components: [
						{kind: "bbUI.Action", content: "Delete History", pin: true, img:"assets/ic_settings.png"}
					]}
				]}
			]},

			// settings view
			{style: "background: #fff", kind: "FittableRows", components: [
				{style: "height: 92px", components: [
					{kind: "bbUI.TitleBar", caption: "Settings", actionCaption: "Save", onactiontap: "saveSettings"},
				]},
				{kind: "enyo.Scroller", fit: true, horizontal: "hidden", components: [
					{kind: "bbUI.ControlGroup"}
				]},
				{style: "height: 109px", components: [
					{kind: "bbUI.ActionBar", onback: "openList", backCaption: "back"}
				]}
			]}
		]}
	]
});
