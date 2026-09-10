---
repo: "peerigon/angular-expressions"
name: "angular-expressions"
description: "Angular expressions as standalone module"
readmeQualityOk: true
url: "https://github.com/peerigon/angular-expressions"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 100
forks: 24
openIssues: 3
closedIssues: 16
watchers: 8
contributors: 16
recentReleases: 0
createdAt: "2014-03-12T00:01:12Z"
lastCommitAt: "2026-09-10T08:19:57Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 43
maintainers: ["edi9999", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54282a804e6c2c4c593dcf2bc50f37e98220c9a40601a5a99f79d5c42896b5ad/peerigon/angular-expressions"
---

# angular-expressions

**[angular's nicest part](https://github.com/angular/angular.js/blob/6b049c74ccc9ee19688bb9bbe504c300e61776dc/src/ng/parse.js) extracted as a standalone module for the browser and node.**

**angular-expressions** exposes a `.compile()`-method which can be used to compile evaluable expressions:

```javascript
var expressions = require("angular-expressions");

evaluate = expressions.compile("1 + 1");
evaluate(); // returns 2
```

You can also set and get values on a given `scope`:

```javascript
evaluate = expressions.compile("name");
scope = { name: "Jenny" };
evaluate(scope); // returns 'Jenny'

evaluate = expressions.compile("ship.pirate.name = 'Störtebeker'");
evaluate(scope); // won't throw an error because angular's expressions are forgiving
console.log(scope.ship.pirate.name); // prints 'Störtebeker'
```

For assigning values, you can also use `.assign()`:

```javascript
evaluate = expressions.compile("ship.pirate.name");
evaluate.assign(scope, "Störtebeker");
console.log(scope.ship.pirate.name); // prints 'Störtebeker'
```

Check out [their readme](http://docs.angularjs.org/guide/expression) for further information.

<br />

## Setup

<br />

##…
