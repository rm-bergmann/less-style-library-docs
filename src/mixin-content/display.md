---
title: Display
slug: display
description: Designed to .....
---

## Display Mixins

Apply this mixin to the parent element which will align children from left to right with equal spacing.

```CSS
#display.flex(space);
```

To align children to left (start) or right (end) of a container apply the following mixin to the container element

```CSS
#display.flex(start);
#display.flex(end);
```

For a Grid like flexbox (works well for IE 11 as a flexbox fallback):

```CSS
#display.flex(grid);
```

To minimize common repeatition, this mixin takes color as the first param and background-color as the second param.
By default color is set to black and background color set to white. Pass in the colours of your choice.

```CSS
/* Default foreground and background colors: color: black; background-color: white */
#display.colors();

/* color: white; background-color: blue */
#display.colors(white, blue);
```

Width and height are common styles to add to elements, use this mixin if width and height are different values:
The first param is the width value, the second param is the hight value:

```CSS
#display.dimensions(200px, 50px);
```

If the width and height are the same values pass in the type 'equal', then the desired value (default is set to 100px)

```CSS
#display.dimensions(equal, 200px);
```

When you float an element's children left or right, apply this mixin so the parent can retain it's height:

```CSS
#display.clearfix();
```

When you target the :before and :after pseudo elements apply this mixin to display it.
This adds the following styles: display: block; content: '';
You can change the content value by passing it in:

```CSS
#display.pseudo();
#display.pseudo('&raquo;');
```

If you want to show / hide on specific devices you can use these mixins, as they will take care of the media queries:

```CSS
#display.mobile();
#display.tablet();
#display.desktop();
```

I have a mixin for a situation where Chrome doesn't render webfonts. (This may have been a bug and fixed in a later version).

```CSS
#display.webkit-delay();
```
