# React Search Operators
Search component based on search-operators

### Props
| Prop   | Type    | Description | Notes |
|--------|---------|-------------|-------|
|  as    | elementType  | an element type to render as input | See an example [here](https://github.com/fedemartinm/react-search-operators/blob/master/example/src/Examples/Highlighting/DraftInput.js).  |
|  text    | string  | search text  | Use it on controlled implementations.   |
|  icon    | elementType  |  an element type to render as icon  |   |
|  parser    | function  |  replace default parser implementation  |  |
|  parserOptions    | object  |  default parser options  | See default [search-opeartors](https://github.com/fedemartinm/search-operators#api) options. |
|  suggestions    | array  |  search suggestions  | See [suggestions example](https://github.com/fedemartinm/react-search-operators/blob/master/example/src/Examples/Suggestions/App.js). |
|  suggestionAs    | elementType  |  an element type to render as suggestion  | See  |
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
