![React Transitions](https://image.ibb.co/gMW8qq/React-Transitions.gif "React Transitions")

Live Demo: http://www.joerezendes.com/projects/react-transitions

# React transitions

Many single page web applications don't use transitions for their different routes.

React Transitions hopes to change that.

## How does this work?
Even though this library was built with React in mind, it actually works with anything, and in the end, it's just a CSS Animation library.

This means that you are free to use this with Angular, VanillaJS, really anything.

All you have to do is add some class names to pages you want to have transitions on.

The big difference between this and any other animation library, is that these transitions are designed for transitioning full pages. Not single elements.

This documentation will act as a tutorial on how to use these animations with React Router.

The Demo page will also show use cases for each transition and should act as a handy guide.

## Let's get started!

Download the library here: http://www.joerezendes.com/react-transitions.css

Inside of our component where we store routes (usually App.js), we first need to import our `react-transitions.css` file. Then we will add a parent `div` with the className: `transition-container`

Our file should look something like this:

```js
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//this is the file that gives us our transitions
import './react-transitions.css';

import PageTwo from './PageTwo';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          //Don't forget our className
          <div className="transition-container">

            <Route exact to="/route" component={PageTwo}/>

          </div>
        </BrowserRouter>
    );
  }
}

export default App;
```
Awesome.

## Moving on...
Next, we will actually add the transition inside of our `PageTwo` component. It will only take 2 classes.

First we add in the parent `div` the className: `react-transition`.

The second className we use is the name of the transition we wish to use. All of them are kabob-cased.

```js
import React, { Component } from 'react';

class PageTwo extends Component {
  render() {
    return (
      <div className="react-transition swipe-down">
        Page Two
      </div>
    )
  }
}

export default PageTwo;

```

For more classNames, you can use the list below, or you can check out the DemoPage.

## All Animation Classes

- swipe-up
- swipe-left
- swipe-right
- swipe-down
- fade-in
- scale-in
- scale-in-left
- scale-in-right
- drop-in
- drop-in-right
- drop-in-left
- flip-in-x
- flip-in-x-reverse
- flip-in-y
- flip-in-y-reverse
- rotate-in
- rotate-in-reverse
- woah

## Custimization

You may wish to change the animation duration. You can do this with an in-line style.

```js
class PageTwo extends Component {
  render() {
    return (
      <div className="react-transition swipe-down" style={{animationDuration: '2s'}}>
        Page Two
      </div>
    )
  }
}  
```
Nice.

# Tips and tricks

It helps to set the background property on your body element to the same color that most of your components will have. If you're unsure, just keep it white or black.

# That's all
Really. It's that simple.



