/**
 * Some of Draft's code and that of its dependencies make use of ES2015 language features.
 * Syntax features like class are compiled away via Babel when Draft is built,
 * but it does not include polyfills for APIs now included in many modern browsers
 */
;(function () {
  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
      value: function (search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0
        return this.substring(pos, pos + search.length) === search
      },
    })
  }
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
      var subjectString = this.toString()
      if (
        typeof position !== 'number' ||
        !isFinite(position) ||
        Math.floor(position) !== position ||
        position > subjectString.length
      ) {
        position = subjectString.length
      }
      position -= searchString.length
      var lastIndex = subjectString.indexOf(searchString, position)
      return lastIndex !== -1 && lastIndex === position
    }
  }
})()
