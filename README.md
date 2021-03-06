![npm](https://img.shields.io/npm/v/react-search-operators)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-search-operators?color=green)

# React Search Operators
Search component based on [search-operators](https://github.com/fedemartinm/search-operators), where users can type search queries and apply filters.

- complete set of operators 
- sentence tokenization
- complete theming freedom
- highly customizable through composition


Use this package when you want to parse a search query. If you don't need parse input but you need advanced features in suggestions maybe you are looking for [react-autosuggest](https://github.com/moroshko/react-autosuggest).

### Installation
```shell
yarn add react-search-operators
```

or

```shell
npm install react-search-operators --save
```

### Basic Usage
```javascript
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Search from 'react-search-operators'
import 'react-search-operators/dist/index.css';

const App = () => {
  const [state, setState] = useState({})
  console.log(state);
  return (
    <div className='app'>
      <Search onChange={setState} onSearch={onSearch}/>
    </div>
  )
}

// write "I need +results" on input, then
// open debug console:
//{
//  {
//    "filters": [{ "type": "exact", "value": "results" }],
//    "terms": ["I","need"]
//  }
//  "text": "I need +results"
//}

ReactDOM.render(<App/>, document.getElementById('root'))

```
Check out [github-page](https://fedemartinm.github.io/react-search-operators/) to see more examples!

### Operators
 - exact word or phrase
 - exclude word
 - match
 - inverse match

Complete documentation [here](https://github.com/fedemartinm/search-operators#operators).

### Props
| Prop   | Type    | Description | Notes |
|--------|---------|-------------|-------|
|  as    | elementType  | an element type to render as input | See an example [here](https://github.com/fedemartinm/react-search-operators/blob/master/example/src/Examples/Highlighting/DraftInput.js).  |
|  text    | string  | search text  | Use it on controlled implementations.   |
|  icon    | elementType  |  an element type to render as icon  |   |
|  parser    | function  |  replace default parser implementation  |  |
|  parserOptions    | object  |  default parser options  | See default [search-opeartors](https://github.com/fedemartinm/search-operators#api) options. |
|  suggestions    | array  |  search suggestions  | See [suggestions example](https://github.com/fedemartinm/react-search-operators/blob/master/example/src/Examples/Suggestions/App.js). |
|  suggestionAs    | elementType  |  an element type to render as suggestion  |   |
|  id    | string    | IDs used in ARIA |  If component is used more than once to be sure each is unique.  |
|  theme    | object, array    | style your search component  |  CSS Modules, Inline Styles, etc. See [react-themeable](https://github.com/markdalgleish/react-themeable) |
|  placeholder    | string  | input placeholder text  |   |
|  onSearch    | function  |  called after user clicks search or types enter   |   |
|  onSelect    | function  |  called when a suggestion is clicked |   |
|  onChange    | function  |  called every time search is parsed  |   |
|  onTextChange    | function  |  called every time search text change  | Use it on controlled implementations.  |

### API

#### Events:
- onSearch(searchQuery)
```js
searchQuery: {
  text, // search text
  parsed, // ParseResult object
  tokens, // Token array
  suggestions //Suggestion array
}
```
- onChange(searchParseResult)
```js
searchParseResult: {
  text, // search text
  parsed // ParseResult object
}
```

- onSelect(suggestion)
```js
// user defined suggestion object
```

- onTextChange(text)
```js
// text string
```

#### Types:

- ParseResult (default implementation)
```js
{
  filters: [
    { 
      type, //one of 'match' | 'not-match' | 'exact' | 'exclude',
      value, //value 
      in //optional, used by match and not-match operator
    }
  ],
  terms: [] // search terms
}
```


- Token (default implementation)
```js
{
  type, // token type, one of: TEXT, INCLUDE_WORD, EXCLUDE_WORD, EXACT_PHRASE, MATCH, NOT_MATCH,
  value, // matched string
  // Token location data
  startOffset, 
  endOffset, 
  startLine,
  endLine,
  startColumn,
  endColumn,
}
```

### Supported browsers
Minimum **confirmed** browser requirements to run React-Search-Operators. Testing was done using the sample project.


| Chrome | Firefox | Safari | Opera | Edge | IE |
|--------|---------|--------|-------|------|----|
| 38     |    31   |   9.1  |   25  |  16  | 11 |

## Licence 
[MIT](https://github.com/fedemartinm/react-search-operators/blob/master/LICENSE) do whatever you want to do!

