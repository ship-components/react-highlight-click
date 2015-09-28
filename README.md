# react-highlight-click
[React](http://facebook.github.io/react/) component that generates a visual hightlight of a click. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/) or [browserify](http://browserify.org/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

[![Build Status](http://img.shields.io/travis/ship-components/react-highlight-click/master.svg?style=flat)](https://travis-ci.org/ship-components/react-highlight-click)
[![Code Quality](https://img.shields.io/codeclimate/github/ship-components/react-highlight-click.svg?style=flat)](https://codeclimate.com/github/ship-components/react-highlight-click)
[![Code Coverage](https://img.shields.io/codeclimate/coverage/github/ship-components/react-highlight-click.svg?style=flat)](https://codeclimate.com/github/ship-components/react-highlight-click)

## Usage

### With Babel (Recommended)
The component is written using ES6/JSX therefore Babel is required to directly use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import { Component } from 'react';
import HighlightClick from 'react-highlight-click';

export default class Button extends Component {
  render() {
    return (
        <HighlightClick
          className='button-container'>
          <button
            onClick={this.handleClick.bind(this)} >
            Submit
          </button>
        </HighlightClick>
    );
  }
}
```

## Tests

1. `npm install`
2. `npm test`

## License
The MIT License (MIT)

Copyright (c) 2015 Isaac Suttell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
