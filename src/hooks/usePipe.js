/**
 * Use Pipe
 *
 * The output of each function is passed directly as input to the next one.
 *
 * @example
 * const write = usePipe(parse,highlight,search);
 * console.log("Searching",write('how to use react'));
 */
export function usePipe(...nodes) {
  return function (input) {
    return nodes.reduce((data, next) => next.call(this, data), input)
  }
}
