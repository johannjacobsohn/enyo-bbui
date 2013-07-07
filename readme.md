EnyoJS/bbUI.js
==========

A bridge between [EnyoJS](http://enyojs.com) and [bbUI.js](https://github.com/blackberry/bbUI.js/). Think onyx, only with Blackberry styling.

Supported Widgets:
----------------------------

- Action Bar [bbUI.js: Action Bars](https://github.com/blackberry/bbUI.js/wiki/Action-Bar)
- TitleBar [bbUI.js: Title Bars](https://github.com/blackberry/bbUI.js/wiki/Title-Bars)
- DropDown [bbUI.js: DropDown](https://github.com/blackberry/bbUI.js/wiki/DropDowns )
- Pill-Buttons [bbUI.js: Pill Buttons](https://github.com/blackberry/bbUI.js/wiki/Pill-Buttons)
- Inputs [bbUI.js: Inputs](https://github.com/blackberry/bbUI.js/wiki/Inputs)
- ToggleButton [bbUI.js: Toggle Buttons](https://github.com/blackberry/bbUI.js/wiki/Toggle-Buttons)
- Button [bbUI.js: Buttons](https://github.com/blackberry/bbUI.js/wiki/Buttons)
- Checkboxes [bbUI.js: Checkboxes](https://github.com/blackberry/bbUI.js/wiki/Checkboxes)
- ProgressIndicator [bbUI.js: Progress Indicator](https://github.com/blackberry/bbUI.js/wiki/Progress-Indicator)
- BBMBubbles [bbUI.js: BBM Bubbles](https://github.com/blackberry/bbUI.js/wiki/BBM-Bubbles)
- ActivityIndicator [bbUI.js: Pill Buttons](https://github.com/blackberry/bbUI.js/wiki/Activity-Indicator)
- RadioButtons [bbUI.js: Radio Buttons](https://github.com/blackberry/bbUI.js/wiki/Radio-Buttons)

Work in Progress:
--------------------------

- ImageList [bbUI.js: Image List](https://github.com/blackberry/bbUI.js/wiki/Image-List)
- Label Control Container & ControlGroup  [bbUI.js: Label Control Container](https://github.com/blackberry/bbUI.js/wiki/Label-Control-Container)
- Slider [bbUI.js: Sliders](https://github.com/blackberry/bbUI.js/wiki/Sliders)

Soon:
--------

- ContextMenu - [bbUI.js: Context Menus](https://github.com/blackberry/bbUI.js/wiki/Context-Menus)
- GridList [bbUI.js: Grid List](https://github.com/blackberry/bbUI.js/wiki/Grid-List)
- ScreenMenu [bbUI.js: Screen Menu](https://github.com/blackberry/bbUI.js/wiki/Screen-Menus)

[ScrollPanel](https://github.com/blackberry/bbUI.js/wiki/Scroll-Panel) can
be easily done using [enyo layout
panels](https://github.com/enyojs/enyo/wiki/Panels) and thus won't be
included here.

Usage:
----------

Download or include as submodule

    $ git submodule add git@github.com:johannjacobsohn/enyo-bbui.git lib/enyo-bbui && git submodule update --init --recursive

And add ``../lib/enyo-bbui`` to your package.js.

Dependencies: 
----

- [Enyo](https://github.com/enyojs/enyo) (naturally)
- [bbui](https://github.com/blackberry/bbUI.js.git) (included as submodule)


Icons in the sampler are taken from the [bbUI.js sample
application](https://github.com/blackberry/bbUI.js/tree/master/samples) and
[Blackberrys "Blackberry 10
Icons"](https://developer.blackberry.com/design/bb10/).

