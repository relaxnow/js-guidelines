This document represents the official policy on writing JavaScript code at Ibuildings.

Version 0.1
The Authoritive version can be found at: https://github.com/relaxnow/js-guidelines/edit/master/docs/rfc_jsguide.md .

Authors:
* Boy Baukema <boy@ibuildings.nl>

# Introduction

These coding guidelines have been composed with the following in mind:
* [Zend Framework Coding Guidelines for PHP](http://framework.zend.com/manual/en/coding-standard.html)
* [PHP Standards Recommendation 2 Coding Style Guide](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
* Heavy usage of Ext.js
* Heavy usage of jQuery

And takes inspiration from:
* [The Drupal JavaScript Coding Guidelines](http://drupal.org/node/172169)
* [Code Conventions for the JavaScript Programming Language by Douglas Crockford](http://javascript.crockford.com/code.html)
* [JQuery Core Style Guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines)
* [The Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)

And is built to work with [JSHint](http://jshint.com).

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", 
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be 
interpreted as described in [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt).

## Prefer a CDN for loading in JavaScript, but have a fallback

## Place external JavaScript in vendor/

## Files containing JQuery plugins must start with jquery.plugin.

## Document using [JSDoc-Toolkit](http://code.google.com/p/jsdoc-toolkit/) or [JSDuck](https://github.com/senchalabs/jsduck) compatible tags

## Minify JavaScript for production

## Include ECMAScript 5 polyfill

## Production JavaScript may not refer to the 'console' or 'debugger' object.

## Use descriptive names for variables and functions

## Keep functions short (preferably < 15 lines)

## Don't nest code more than 5 levels


## Comments must be removed or updated when the code they apply to get's modified

## MAY use humor in comments.

## MUST NOT use curse words or express frustrations

## Low level descriptions of what code does is bad, high level descriptions are okay, why code does what it does is great.

## Don't comment out code, remove it and keep it in source control

## MUST declare all variables with 'var'

## MUST namespace all variables and functions (MUST NOT pollute the global namespace)

## MUST NOT use eval

## MUST NOT use with

## MUST NOT use void

## MUST NOT use of single letter variables is forbidden.

## MUST use curly braces around blocks in loops and conditionals.

## MUST NOT modify prototypes of built in objects UNLESS it is to add / modify methods with clearly defined semantics

## SHOULD use Strict mode

## SHOULD NOT use global Strict mode

## SHOULD use literal expressions

## SHOULD NOT use ==, use === instead

## SHOULD NOT use bitwise operators

## SHOULD protect for...in loops with hasOwnProperty

## MUST wrap immediate function execution in parenthesis

## Namespace objects MUST be in ALL_CAPS_WITH_CAMEL_CASING

## MUST NOT define functions in conditionals

## MUST NOT use Array as a associative array (use Object instead)

## MUST NOT use IE Conditional Comments

## Constructors MUST start with an uppercase letter

## Non-constructors MUST NOT start with an uppercase letter

## SHOULD NOT use arguments.caller and arguments.callee

## SHOULD NOT have trailing whitespace

## MUST NOT rely on Automatic Semicolon Insertion

## SHOULD NOT use ES5 only features

## MUST declare variables in the same or higher block structure

## MUST use comma last JSON

## SHOULD NOT use multiline strings

## MUST NOT use escape function

## SHOULD use the dot notation where possible

## Indentation
Indentation should consist of 4 spaces. Tabs are not allowed.

## A space between function keyword and parentheses or function name
## A space between function parentheses and opening brace
## No spaces between function identifier and parentheses

## JavaScript Keywords MUST be in lowercase

## Opening braces for JSON MUST be on the same line, closing braces MUST go on the next line after the body

## Opening braces for conditionals MUST be on the same line, closing braces MUST go on the next line after the body

## Function arguments MUST fit on one line, or each argument should get it's own line

```javascript
var tekno = function (a, b, c) {
};

var tekno = function (
  prxyModelFactory,
  bullshitFlyweight
) {
}
```

## Use newlines to group logically related lines of code (but view it as a smell that a function might be better)

## Prefer single quotes over double quotes



## Maximum Line Length

The target line length is 80 characters. That is to say, Ibuildings developers should strive keep each line of their code under 80 characters where possible and practical. However, longer lines are acceptable in some circumstances. The maximum length of any line of JavaScript code is 120 characters.
Minified code is excluded from this.

## Line Termination

Line termination follows the Unix text file convention. Lines must end with a single linefeed (LF) character. 
Linefeed characters are represented as ordinal 10, or hexadecimal 0x0A.

Note: Do not use carriage returns (CR) as is the convention in Apple OS's (0x0D) or the carriage return - 
linefeed combination (CRLF) as is standard for the Windows OS (0x0D, 0x0A).

## Use lowerCamelCasing

## Identifiers must contain only alphanumeric characters or _, use of $ sign is forbidden.

## Private methods / properties should start with _

# File and Directory structure

## JavaScript programs should be stored in and delivered as .js files.

## File names MUST be all lowercase wtih - as a word separator