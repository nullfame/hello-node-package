# Simple "Hello, World" Node Package

A simple “Hello, World” node package for educational purposes:

* Exposes a simple hello function that accepts an optional name parameter (usage below)
* Transpiles ES6 to ES5 with Babel (exposes the ES5 code base to consumers)
* Marked as “private” so it won’t accidentally get published to NPM
* Includes an .npmignore in case you want to publish it to NPM
* Trivial test script to see how it works

I include the build/ directory because my anticipated use case is to store this package in a private Github repo and I don’t want to force the consumer to compile it (i.e., bring in Babel themselves).



## Usage

(in your own node app)

Of course you need to `npm install https://github.com/nullfame/hello-node-package.git`

```javascript
const hello = require('Hello')

console.log(hello())
console.log(hello("You"))
```

Result:

```
Hello, World
Hello, You
```

## Scripts

(assuming you have cloned this repo)

* `npm test` runs [tests/test.js](tests/test.js), which outputs the above
* `npm run build` runs the Babel transpiling from src/ to build/
* `npm run clean` nukes the build/ directory
* The preversion hook runs clean and build when using `npm version [major|minor|patch]` to bump the version number
* The prepublish hook runs the same when publishing to NPM, if that’s your thing


## Disclaimers

Probably the property of my employer, Northwestern University, though I doubt they would mount a vigorous defense.  Do not use in a manner contrary to the labeling.  Safe for use around pets.