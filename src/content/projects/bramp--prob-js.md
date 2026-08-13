---
repo: "bramp/prob.js"
name: "prob.js"
description: "Generate random numbers from different probability distributions."
readmeQualityOk: true
url: "https://github.com/bramp/prob.js"
homepage: "https://bramp.github.io/prob.js/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [75]
topics: ["javascript", "random", "probability-distributions"]
stars: 115
forks: 11
openIssues: 0
closedIssues: 3
watchers: 8
contributors: 1
recentReleases: 0
createdAt: "2016-03-26T20:37:09Z"
lastCommitAt: "2026-08-13T05:17:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 37
maintainers: ["dependabot[bot]", "bramp"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2a1baab52a758ab0a273afb6f941f650379a92c43aef94c622c9538fc1f1b60/bramp/prob.js"
fundingLinks: ["GITHUB:https://github.com/bramp", "BUY_ME_A_COFFEE:https://buymeacoffee.com/bramp"]
---

# Prob.js [](https://www.npmjs.com/package/prob.js) [](https://raw.githubusercontent.com/bramp/prob.js/main/LICENSE)

by [Andrew Brampton](https://bramp.net) 2016-2026

Generate random numbers from different probability distributions. [Demo](https://bramp.github.io/prob.js/).

## Use

**NPM**:

```shell
npm install prob.js
```

```js
var Prob = require('prob.js');
```

**Browser**:

```html
<script src="node_modules/random-js/lib/random.min.js" type="text/javascript"></script>
<script src="node_modules/prob.js/dist/prob-min.js" type="text/javascript"></script>
```

**Example**:

```js
var r = Prob.normal(0, 1.0); // μ = 0, σ = 1.0
r(); // Returns a random number from this distribution
r(); // Returns another random number
r(); // and again
```

## API

The following distribution are available:

```js
Prob.uniform(min, max); // Uniform distribution in range [min, max).
Prob.normal(μ, σ); // Normal distribution with mean and standard deviation.
Prob.exponential(λ); // Exponential distribution with lambda.
Prob.lognormal(μ, σ); // Log-normal distribution defined as ln(normal(μ, σ)).
Prob.poisson(λ); // Poisson distribution returning integers >= 0.
Prob.zipf(s, N); // Zipf's…
