---
model: post
title: Intro to Destructing
description: Simple intro to Destructing
path: destructing-es6
thumbnail: /img/destructing-assign.png
date: 2019-01-29T20:16:06.768Z
published: true
style: full-image
tags:
  - es6
---

Hello, I want to share my list that consists of some practices that I use to write components in React, surely you already know some of them. Of course this is my point of view, you can recommend some practice that you do not find in the list or suggest an improvement in the comments. I hope they serve you.

1.- Importing components and libraries
When importing components what I do is to separate with a blank line the components that are external and those of my project. For example:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import plyr from 'plyr'
import 'plyr/dist/plyr.css'

import Header from './components/Header'
import Footer from './components/Footer'
import initialState from './data'
import './css/styles.css'

class MyComponent extends React.Component {
	...
}
```

#Full post coming later
