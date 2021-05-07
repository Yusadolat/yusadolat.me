---
model: post
title: Optional chaining in NodeJS
description: "Demonstrating Optional Chaining in NodeJS "
path: optional-chaining-node
thumbnail: /img/optional-chaining.png
date: 2020-11-04T15:59:50.721Z
published: true
style: default
tags:
  - nodejs
  - optional chaining
---


\
\
Optional chaining is one of the new JavaScript language features that are available as of Node.js 14. Optional chaining allows you to read the value of a nested property without having to check whether each preceding reference is valid.

We can demonstrate this syntax in the REPL. First, we'll define a JSON object that has nested properties. Copy and paste the following into the REPL:

`const person = {
    name : 'Beth',
    dog : { name : 'Laddie' }
};`

Now, we can demonstrate the optional chaining operator. The optional chaining operator is [](<>)denoted by the `?.` syntax. The optional chaining operator allows you to read the value of a nested property without having to check whether each preceding reference is valid. We can use the sample object to demonstrate this.

 First, enter the following, not using the optional chaining operator:



`person.cat.name
Uncaught TypeError: Cannot read property 'name' of undefined`

``

This fails, as expected, as the object we created does not have the property `cat`.

Now, let's use the optional chaining operator:



> `person.cat?.name
> undefined`

Observe that we no longer experience `TypeError`. The optional chaining operator should be used in cases where you wish to check the value of a nested property but do not want to throw an error if a preceding property is not defined.