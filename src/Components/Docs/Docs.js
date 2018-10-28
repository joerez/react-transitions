import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';




// Import the Markdown component
import Markdown from 'react-markdown';

class Docs extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="docs react-transition flip-in-y-reverse">
        <article className="docs-con">
          <h1>React Transitions</h1>
          <p>Many single page web applications don't use transitions for their different routes.</p>
          <p>React Transitions hopes to change that.</p>
          <h2>How does this work?</h2>
          <p>Even though this library was built with React in mind, it actually works with anything, and in the end, it's just a CSS Animation library.</p>
          <p>This means that you are free to use this with Angular, VanillaJS, really anything. </p>
          <p>All you have to do is add some class names to pages you want to have transitions on.</p>
          <p>The big difference between this and any other animation library, is that these transitions are designed for transitioning full pages. Not single elements.</p>
          <p>This documentation will act as a tutorial on how to use these animations with React Router.</p>
          <p>The <Link to="/">Demo page</Link> will also show use cases for each transition and should act as a handy guide.</p>

          <h2>Let's get started!</h2>
          <p>Inside of our component where we store routes (usually <b>App.js</b>), we first need to import our <b>react-transitions.css</b> file. Then we will add a parent <b>div</b> with the <b>className</b>: <b>transition-container</b></p>
          <p>Our file should look something like this:</p>

          <SyntaxHighlighter showLineNumbers language='javascript' style={dark}>
          {
`import React, { Component } from 'react';
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
            `}
          </SyntaxHighlighter>


          <h2>Looking Good</h2>

          <p>Next, we will actually add the transition inside of our PageTwo component. It will only take 2 classes.</p>
          <p>First we add in the parent <b>div</b> the className: <b>react-transition</b>.</p>
          <p>The second className we use is the name of the transition we wish to use. All of them are kabob-cased.</p>

          <SyntaxHighlighter showLineNumbers language='javascript' style={dark}>
            {
`import React, { Component } from 'react';

class PageTwo extends Component {
  render() {
    return (
      <div className="react-transition swipe-down">
        Page Two
      </div>
    )
  }
}

export default PageTwo;`
            }
          </SyntaxHighlighter>

          <p>For more classNames, you can use the list below, or you can check out the <Link to="/">DemoPage</Link>.</p>
          <h2>All Animation Classes</h2>
          <ul>
            <li>swipe-up</li>
            <li>swipe-left</li>
            <li>swipe-right</li>
            <li>swipe-down</li>
            <li>fade-in</li>
            <li>scale-in</li>
            <li>scale-in-left</li>
            <li>scale-in-right</li>
            <li>drop-in</li>
            <li>drop-in-right</li>
            <li>drop-in-left</li>
            <li>flip-in-x</li>
            <li>flip-in-x-reverse</li>
            <li>flip-in-y</li>
            <li>flip-in-y-reverse</li>
            <li>rotate-in</li>
            <li>rotate-in-reverse</li>
            <li>woah</li>
          </ul>

          <h2>Custimization</h2>
          <p>You may wish to change the animation duration. You can do this with an in-line style.</p>

          <SyntaxHighlighter showLineNumbers language='javascript' style={dark}>
{`class PageTwo extends Component {
  render() {
    return (
      <div className="react-transition swipe-down" style={{animationDuration: '2s'}}>
        Page Two
      </div>
    )
  }
}  `}
          </SyntaxHighlighter>
          <p>Nice.</p>
          <h2>Tips and tricks</h2>
          <p>It helps to set the background property on your <b>body</b> element to the same color that most of your components will have. If you're unsure, just keep it white or black.</p>
          <h2>That's all</h2>
          <p>Really. That's it. It's as simple as any other css animation library. If you wish to support this project, please star the repo.</p>
          <p>Feel free to check out my website for more cool stuff! <a href="http://www.joerezendes.com">joerezendes.com</a></p>
          <br />
        </article>
      </div>
    );
  }
}

export default Docs
