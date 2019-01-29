---
model: post
title: Intro to Destructing
description: Simple intro to Destructing
path: destructing-es6
thumbnail: /img/destructing-assign.png
date: 2019-01-29T20:16:06.768Z
published: true
style: medium-img
tags:
  - es6
---

Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment).

```jsx
const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);
```

#Full post coming later
