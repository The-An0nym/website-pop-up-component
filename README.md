# website-pop-up-component

Free to use pop-up design for websites.

Note that limited browsers support the `interpolate-size: allow-keywords;` property found in `:root` of `pop-up.css`, as of the time of writing this. Check out [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interpolate-size) if this is still the case.
<br>For browsers which do no support this property, the animation may look a bit janky at times.

To use this component for your web-project, simply copy over `pop-up.css` and `pop-up.js`, link the css and js files in your html file and include the following within your html:

```html
<div id="pop-up-container"></div>
```

You can create a pop-up by calling the function `createPopUp(message, type);` which takes in two arguments. The message (string) and type (integer).

The types are as follows:
<br> 0 = pass
<br> 1 = warn
<br> 2 = fail
