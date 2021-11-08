---
title: Font
slug: font
description: Designed to easily add any type of border to an element
---

# Font mixins

Turn 4 lines of code into 1 with the following mixin. It takes font-size, font-weight, line-height and text-align.
The defaults are set as: font-size: 1em; font-weight: 400; line-height: 1; and text-align: left;
To change the defaults, just pass in your custom values. Lets set a center-aligned, 14px bold font with 1.2 line height:

```CSS
#font.settings(); /* defaults */
#font.settings(14px, bold, 1.2, center);
```

We don't always use all of the styles, so there's another 3 mixins with the above styles broken down:
The first and default font sizing mixin will add font-size, font-weight and line-height, same default values as the font settings mixin.

```CSS
#font.size();
#font.size(20px, 700, 1.3);
```

For only font-size and font-weight, pass in 'font-weight':

```CSS
#font.size(font-weight);
#font.size(font-weight, 1.2rem, bold);
```

For only font-size and line-height, pass in 'line-height':

```CSS
#font.size(line-height);
#font.size(line-height, 18px, 1.2);
```
