enyo.kind({
	name: "bbUISample",
	classes: "enyo-fit",
	fit: true,
	action: function(){
		var comment = this.$.input.value;
		if(comment){
			this.$.input.setValue("");

			this.$.me.createComponent({content: comment, image: "assets/bbmBubbles/bullet.png"});
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
		enyo.log("saved");
	},
	components:[
		{kind: "bbUI.Init", controlsDark: true, listsDark: false},
		{kind: "Panels", arrangerKind: "CollapsingArranger", draggable: false, fit:true, style: "height: 100%", components: [

			// contactlist view
			{kind: "FittableRows", components:[
				{kind: "bbUI.TitleBar", caption: "bbUI.js/EnyoJS"},
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
				{kind: "bbUI.ActionBar", onback: "openList", components: [
					{kind: "bbUI.Action", type: "tab", selected: true, caption: "Contacts", img:"assets/ic_info.png"},
					{kind: "bbUI.Action", type: "tap", caption: "Settings", img:"assets/ic_settings.png", ontap: "openSettings"},
					{kind: "bbUI.Action", type: "button", caption: "Delete History", overflow: true, accentText: "Cannot be undone!", img:"assets/ic_delete.png"}
				]}
			]},

			// Conversation view
			{style: "background: #fff", kind: "FittableRows", components: [
				{kind: "bbUI.TitleBar", caption: "Eric", accentText: "Talk to me!", img: "assets/avatars/alec.png"},
				{kind: "enyo.Scroller", fit: true, horizontal: "hidden", components: [
					{kind: "bbUI.BBMbubbles", alignment: "left", components: [
						{content: "Hey there", image: "assets/bbmBubbles/read.png"}
					]},
					{kind: "bbUI.BBMbubbles", alignment: "right", components: [
						{content: "Hi :)", image: "assets/bbmBubbles/read.png"}
					]},
					{kind: "bbUI.BBMbubbles", alignment: "left", components: [
						{content: "Whats up?", image: "assets/bbmBubbles/read.png"}
					]},
					{kind: "bbUI.BBMbubbles", alignment: "right", name: "me", components: [
						{content: "nothin'", image: "assets/bbmBubbles/read.png"}
					]}
				]},
				{kind: "bbUI.ActionBar", onback: "openList", backCaption: "back", components: [
					{kind: "bbUI.Action", overflow: true, caption: "Delete History", pin: true, img:"assets/ic_settings.png"}
				]}
			]},

			// settings view
			{style: "background: #fff", kind: "FittableRows", components: [
				{kind: "bbUI.TitleBar", caption: "Settings", actionCaption: "Save", onback: "openList", backCaption: "Cancel", onactiontap: "saveSettings"},
				{kind: "enyo.Scroller", fit: true, horizontal: "hidden", components: [
					{kind: "bbUI.ControlGroup"}
				]}
			]}
		]}
	]
});
