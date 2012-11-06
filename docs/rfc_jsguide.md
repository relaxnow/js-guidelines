This document represents the official policy on writing JavaScript code at Ibuildings.


Versions
========
Version 0.1

The Authoritative version can be found at: https://github.com/relaxnow/js-guidelines/edit/master/docs/rfc_jsguide.md .


Authors
=======
* Boy Baukema <boy@ibuildings.nl>


Status of this document
=======================
This document is in DRAFT and UNPUBLISHED.


Introduction
============

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

Furthermore tools may imply the following mapping:
* ERROR = MUST, MUST NOT, REQUIRED
* WARNING = SHALL, SHALL NOT, SHOULD, SHOULD NOT
* NOTICE = RECOMMENDED, MAY, OPTIONAL

See also: [RFC 5424](http://tools.ietf.org/html/rfc5424#page-11)


Usage
=====

The intended usage of this document is twofold:

1. Introduction / refresher for (new) Ibuildings developers on JavaScript development practices
2. Authoritative reference for code reviews


1. Syntax
=========

### Indentation MUST consist of 4 spaces
### Tabs MUST NOT be used
### Line length SHOULD not be longer than 80 characters (excluding minified code)
### Line length MUST not be longer than 120 characters (excluding minified code)
### Lines MUST end with a single linefeed (LF) character.
### MUST NOT use carriage returns (CR) or the carriage return - linefeed combination (CRLF)
### Keywords MUST be in lowercase
### Opening braces for JSON MUST be on the same line, closing braces MUST go on the next line after the body
### Opening braces for conditionals MUST be on the same line, closing braces MUST go on the next line after the body
### Function arguments MUST fit on one line, or each argument should get it's own line
### There SHOULD be a space between function keyword and parentheses or function name
### There SHOULD be a space between function parentheses and opening brace
### There SHOULD be no spaces between function identifier and parentheses
### Identifiers MUST contain only alphanumeric characters or _, use of $ sign is forbidden.

```javascript
var tekno = function (a, b, c) {
};

var tekno = function (
  prxyModelFactory,
  bullshitFlyweight
) {
}
```

2. Language usage
==============
### SHOULD Use descriptive names for variables and functions
### SHOULD Keep functions short (preferably < 15 lines)
### SHOULD NOT nest code more than 5 levels
### Production JavaScript SHOULD NOT refer to the 'console' or 'debugger' object.
### MUST namespace all variables and functions (MUST NOT pollute the global namespace)
### MUST NOT use eval
### MUST NOT use with
### MUST NOT use void
### MUST NOT use of single letter variables is forbidden.
### MAY NOT refer explicitly to the window object
### SHOULD prefer single quotes over double quotes
### SHOULD Use lowerCamelCasing
### Private methods / properties SHOULD start with _
### MUST use curly braces around blocks in loops and conditionals.
### MUST declare all variables with 'var'
### MUST NOT modify prototypes of built in objects UNLESS it is to add / modify methods with clearly defined semantics
### SHOULD use literal expressions
### SHOULD NOT use ==, use === instead
### SHOULD NOT use bitwise operators
### SHOULD protect for...in loops with hasOwnProperty
### MUST wrap immediate function execution in parenthesis
### Namespace objects MUST be in ALL_CAPS_WITH_CAMEL_CASING
### MUST NOT define functions in conditionals
### MUST NOT use Array as a associative array (use Object instead)
### MUST NOT use IE Conditional Comments
### Constructors MUST start with an uppercase letter
### Non-constructors MUST NOT start with an uppercase letter
### SHOULD NOT use arguments.caller and arguments.callee
### SHOULD NOT have trailing whitespace
### MUST NOT rely on Automatic Semicolon Insertion
### MUST declare variables in the same or higher block structure
### MUST use comma last JSON
### SHOULD NOT use multi-line strings
### MUST NOT use escape function
### SHOULD use the dot notation where possible
### SHOULD use newlines to group logically related lines of code (but view it as a smell that a function might be better)


3. ECMAScript 5
============
### SHOULD use Strict mode
### SHOULD NOT use global Strict mode
### SHOULD NOT use ES5 only features


4. Comments
========
### Document SHOULD use either [JSDoc-Toolkit](http://code.google.com/p/jsdoc-toolkit/) or [JSDuck](https://github.com/senchalabs/jsduck) compatible tags
### Comments SHOULD be removed or updated when the code they apply to gets modified
### Source control SHOULD NOT contain commented out code
### Comments SHOULD NOT descriptions of what code does at a low level
### Comments MAY describe what code does at a high level
### Comments are RECOMMENDED to describe why it does what it does
### MAY use humor in comments.
### MUST NOT use curse words or express frustrations


5. Files
=====
### SHOULD place external JavaScript in vendor/
### Files containing JQuery plugins MUST start with jquery.plugin.
### JavaScript programs SHOULD be stored in and delivered as .js files.
### File names MUST be all lowercase with - as a word separator


6. Libraries
=========
### MAY prefer a [CDN](http://cdnjs.com) for loading well known libraries in JavaScript, but SHOULD have a local fallback
### MAY include ECMAScript 5 polyfill


7. Builds
======
### Documentation MAY be generated using JSDuck
### Minify JavaScript for production