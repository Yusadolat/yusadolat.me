---
model: post
title: Stateless or Stateful- React Component
description: >-
  In a simple definition, it can be explained as


  If the behavior of a component is dependent on the state of the component then
  it can be termed as a stateful component and if the behavior is independent of
  its state then it can be a stateless component.
path: react-state-or-stateful
thumbnail: /img/defining-stateful-vs-stateless-web-services.png
date: 2019-06-13T10:14:36.225Z
published: true
style: default
tags:
  - state
  - stateful
  - react
---
Stateless or Stateful- React Component.



In a simple definition, it can be explained as



If the behavior of a component is dependent on the state of the component then it can be termed as a stateful component and if the behavior is independent of its state then it can be a stateless component.



When something is “stateful”, it is a central point that stores information in memory about the app/component’s state. When something is “stateless”, it calculates its internal state but it never directly mutates it.



The stateless components are sometimes referred to as dumb components



The main advantage stateless over stateful component is scalability and reusability.



Functional Component or Stateless component



A functional component is like pure function in JavaScript.

A functional component is also called as a stateless component.

The functional component only receives props from parent component and return you JSX elements.

The functional component doesn’t play with any lifecycle methods of React and doesn’t play with the component state.

Class component or stateful component



React class component is called as a stateful component.

Stateful component plays with all life cycle methods of React.

This component will modify state.

That’s the major differences



If you have knowledge about pure function in JavaScript then you can understand functional or stateless component easily.





30



Yes, that is sort of the difference. Except with the stateful component you can also change the state, using this.setState for example:



```
var React = require('react');
```

```

```

```
var Header = React.createClass({
```

```

```

```
    getInitialState: function() {
```

```
        return {
```

```
            imageSource: "mypicture.png"
```

```
        };
```

```
    },
```

```

```

```
    changeImage: function() {
```

```

```

```
        this.setState({imageSource: "differentpicture.png"});
```

```
    },
```

```

```

```
    render: function() {
```

```
        return(
```

```
            <img src={this.state.imageSource} onClick={this.changeImage.bind(this)} />
```

```
        );
```

```
    }
```

```
});
```

```

```

```
module.exports = Header;
```

So, in the example above, the changeImage manages the state of the component (which would also cause all child/dependent components to be re-rendered).



Somewhere in the application, you need to bind data or remember things. Stateless components are dumb (and that is good), they cannot remember and they cannot give context to other parts of the UI. Stateful components provide the necessary context glue.



On the other hand, stateless components just get passed context (usually through this.props:



```
var React = require('react');
```

```

```

```
var Header = React.createClass({
```

```
    render: function() {
```

```
        return(
```

```
            <img src={this.props.imageSource} />
```

```
        );
```

```
    }
```

```
});
```



ReactDOM.render(<Header imageSource="myImage.png"/>, document.body);

In the example above, you can see that during the render, imageSource is passed in as an attribute and is then added to the stateless components this.props object.
