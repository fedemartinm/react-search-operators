# React Search Operators
Search component based on [search-operators](https://github.com/fedemartinm/search-operators), where users can type search queries and apply filters.

- complete set of operators 
- sentence tokenization
- complete theming freedom
- highly customizable through composition


Use this package when you want to parse a search query. If you don't need parse input and you need advanced features in suggestions maybe you are looking for [react-autosuggest](https://github.com/moroshko/react-autosuggest).

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

### Supported browsers
Minimum **confirmed** browser requirements to run React-Search-Operators. Testing was done using the sample project.


| Chrome | Firefox | Safari | Opera | Edge | IE |
|--------|---------|--------|-------|------|----|
| 38     |    31   |   9.1  |   25  |  16  | 11 |

## Licence 
[MIT](https://github.com/fedemartinm/react-search-operators/blob/master/LICENSE) do whatever you want to do!

