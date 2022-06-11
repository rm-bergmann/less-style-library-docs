# About Less Style Library

Less Style Library is a library of namespaced mixins to help write css styles faster.

This library also includes variables for colour names and media queries

## This is a useful tool if:

* You like designing web pages or components using CSS instead of design software
* You like writing CSS in Less
* You like changing multiple values at once
* You like identifying where common style patterns are used in your code
* You like minimizing the number of lines of css rules in your files
* You like sharing mixins between projects

  

## Why is Less the chosen CSS preprocesser for this library?

Less is a declaritive language which extends CSS.


[This article](1) explains more about the details on how Less compares to other preprocessors such as Sass, however the main inspiration for writing this library is the way Mixins are declared in Less. Less allows to declare namespaced mixins using simple CSS like syntax (eg, the *#* and *.* characters which represent ID and class)

[1]: https://medium.com/@matthewdeaners/less-the-world-s-most-misunderstood-css-pre-processor-76273881cb03

  
  
## Are there any drawbacks when using this library?

Sure, as with any library there may be some things to be aware of, such as:

***Learning curve***  
A new style of code to learn... Like we don't have enough already!

***Inconsistencies in the css syntax***  
Mixins do make the syntax inconsistent but that could be used as an advantage because it's easy to identify where they are used in the code, and they are searchable.

***Additional maintenance when Library updates***  
Updates and improvements could break exisiting code and therefore error on the next compile. If there are errors you will need to check the changelog in github and then update the mixins if they have chaged in any way.

***Mixins can add additional unnecceary size to yours stylesheets***  
In general, when mixins are used in a certain way, they could add a lot of additional code to the css stylesheet. For example, when you have 2 seperate selectors and use a 5 line mixin in each selector, in theory it adds 12 lines of code to the stylesheet. If the values are identical, it is better to add 1 mixin to multiple selectors.
   
   
## But why not use a framework like Bootstrap?

Frameworks like Bootstrap and Tailwind are great and may be a better choice for your project. Bare in mind those frameworks may have a lot of CSS in the stylesheet
which you may not be using or may not need for your project.

This mixin library works best with a BEM style framework where you are more in control with naming classes how you want to name them, and adding styles to your classes, instead of adding pre-defined classes to your html. This method also allows you to be more in control of what styles are compiled in your stylesheet so
you can keep it as compact as possible.

## Tip

To speed up workflow it is a great idea to ensure you have a hot reload and watch tool set up in your project for development. Some frameworks like Gatsby have it built in. Depeneding on the project setup you can use Webpack and Recat hot loader or Gulp with Browsesync and HTML injection plugin. The ideal workflow is **make change** > **save** > **view change in browser**.  