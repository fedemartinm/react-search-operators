//process suggestions
export function suggest(state) {
  let { prev, next } = state
  let { suggestions } = this
  if (!Array.isArray(suggestions)) {
    suggestions = []
  }
  let filtered = suggestions
    .map((suggestion) => {
      let calculated = { ...suggestion }
      calculated.show = get(calculated.show, [suggestion, next])
      calculated.text = get(suggestion.text, [suggestion, next])
      return calculated
    })
    .filter((s) => s.show)

  next = { ...next, suggestions: filtered }
  return { prev, next }
}

function get(property, args) {
  if (typeof property === 'function') {
    return property.apply(null, args)
  } else {
    return property
  }
}
