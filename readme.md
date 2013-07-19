EnyoJS/bbUI.js
==============

A bridge between [EnyoJS](http://enyojs.com) and
[bbUI.js](https://github.com/blackberry/bbUI.js/). Think onyx, only with
Blackberry styling.

**This is project is still "alpha" - don't use it in production!** Currently,
only Blackberry 10 and Blackberry Tablet OS (Playbook) are supported,
support for BB7/6/5 is _very_ unlikely.

Supported Widgets:
------------------

- [Action Bar](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.ActionBar) (bbUI.js: [Action Bars](https://github.com/blackberry/bbUI.js/wiki/Action-Bar))
- [TitleBar](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.ActionBar) (bbUI.js: [Title Bars](https://github.com/blackberry/bbUI.js/wiki/Title-Bars))
- [DropDown](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.Select) (bbUI.js: [DropDown](https://github.com/blackberry/bbUI.js/wiki/DropDowns))
- [Pill-Buttons](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.PillButtons) (bbUI.js: [Pill Buttons](https://github.com/blackberry/bbUI.js/wiki/Pill-Buttons))
- [Inputs](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.Input) (bbUI.js: [Inputs](https://github.com/blackberry/bbUI.js/wiki/Inputs))
- [Toggle Button](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.Toggle), compatible with [onyx.Toggle](http://enyojs.com/api/#onyx.ToggleButton) (bbUI.js: [Toggle Buttons](https://github.com/blackberry/bbUI.js/wiki/Toggle-Buttons))
- [Checkboxes](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.Checkbox) (bbUI.js: [Checkboxes](https://github.com/blackberry/bbUI.js/wiki/Checkboxes))
- [Button](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.Button) (bbUI.js: [Buttons](https://github.com/blackberry/bbUI.js/wiki/Buttons))
- [Spinner](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.Spinner) (bbUI.js: [Activity Indicator](https://github.com/blackberry/bbUI.js/wiki/Activity-Indicator))

Work in Progress:
-----------------

- [ProgressIndicator](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.Progress) (bbUI.js: [Progress Indicator](https://github.com/blackberry/bbUI.js/wiki/Progress-Indicator))
- [BBMBubbles](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.BBMbubbles) (bbUI.js: [BBM Bubbles](https://github.com/blackberry/bbUI.js/wiki/BBM-Bubbles))
- [RadioButtons](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.RadioButton) (bbUI.js: [Radio Buttons](https://github.com/blackberry/bbUI.js/wiki/Radio-Buttons))
- [ImageList](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.imageList) (bbUI.js: [Image List](https://github.com/blackberry/bbUI.js/wiki/Image-List))
- Label Control Container & [ControlGroup](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.ControlGroup)  (bbUI.js: [Label Control Container](https://github.com/blackberry/bbUI.js/wiki/Label-Control-Container))
- [Slider](http://johannjacobsohn.github.io/enyo-bbui/api/#bbUI.Slider) (bbUI.js: [Sliders](https://github.com/blackberry/bbUI.js/wiki/Sliders))

Soon:
-----

- ContextMenu (bbUI.js: [Context Menus](https://github.com/blackberry/bbUI.js/wiki/Context-Menus))
- GridList (bbUI.js: [Grid List](https://github.com/blackberry/bbUI.js/wiki/Grid-List))
- ScreenMenu (bbUI.js: [Screen Menu](https://github.com/blackberry/bbUI.js/wiki/Screen-Menus))

[ScrollPanel](https://github.com/blackberry/bbUI.js/wiki/Scroll-Panel) can
be easily done using [enyo layout panels](https://github.com/enyojs/enyo/wiki/Panels)
and thus won't be included here.

Usage:
------

Download or include as submodule

    $ git submodule add git@github.com:johannjacobsohn/enyo-bbui.git lib/enyo-bbui && git submodule update --init --recursive

and add ``../lib/enyo-bbui`` to your package.js.

Contributing:
-------------

Issues and pull requests are welcome!

Dependencies: 
-------------

- [Enyo](https://github.com/enyojs/enyo) (naturally)
- [bbui](https://github.com/blackberry/bbUI.js.git) (included as submodule)


Icons in the sampler are taken from the [bbUI.js sample
application](https://github.com/blackberry/bbUI.js/tree/master/samples) and
[Blackberrys "Blackberry 10
Icons"](https://developer.blackberry.com/design/bb10/).

