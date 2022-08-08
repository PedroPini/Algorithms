## What is memoization

"Memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again." - freecodecamp

## How it works

Using fancy words like optimization an caching we tend to think is a complex algorithm, but in fact is simple, let's say we have an API call function the response time is good for now, but your team leader has asked you to find alternatives to improve this time response considering a future time frame the database tables tend to get bigger and the user requests to get higher.

Now we have 2 options, first use a library on npm which already does the memoization for you or create your own function.

### Using a npm library

In this case I'll go with Memoizee, so below there's a simple function where we wrap memoize on it, making our call faster as the value will be cached once called, having said that if you first call takes 200 milli seconds, very likely your second call will take 50 milli seconds as the values will be stored.

```
var memoize = require("memoizee");

var fn = function(one, two, three) {
	/* ... */
};

memoized = memoize(fn);

memoized("foo", 3, "bar");
memoized("foo", 3, "bar"); // Cache hit
```

### Using a normal function

Here we will go with the fibonacci

```
const memoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

const fibonacci = memoize((n) => {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  } else return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10));
console.log(fibonacci(50));
```
