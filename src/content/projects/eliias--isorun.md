---
repo: "eliias/isorun"
name: "isorun"
description: "Run JavaScript applications embedded in your Rails application."
readmeQualityOk: true
url: "https://github.com/eliias/isorun"
homepage: "https://eliias.github.io/isorun"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["javascript", "rails", "react", "ruby", "ssr", "vue"]
stars: 41
forks: 0
openIssues: 24
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-10-18T11:39:49Z"
lastCommitAt: "2026-10-20T08:49:07Z"
lastReleaseAt: "2023-01-31T09:38:31Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 86
undervaluedScore: 25
maintainers: ["eliias"]
openGraphImageUrl: "https://opengraph.githubassets.com/5552ccbbee67e6184cf8c869018810fa2a9d70bfeb9045f9216bc74b408f9cd6/eliias/isorun"
---

---

> Run JavaScript applications in your Rails application.

## Features

* Import JavaScript functions, objects, or just values and use them in Ruby
* An EMCAScript like Ruby DSL to load modules and import items
* Automatically converts arguments and return values
* Send messages between *JavaScript*<->*Ruby* (allows to intercept network requests and avoid network round-trips for e.g. API calls)
* Automatically reload modules when updated in development
* Automatically extracts state (Apollo) and hydrates client-side 
* Supports server-side rendering of multiple apps on a single page
* Examples for [React](https://github.com/eliias/isorun/blob/HEAD/examples/rails-react-app), [Vue](https://github.com/eliias/isorun/blob/HEAD/examples/rails-vue-app), [D3](https://github.com/eliias/isorun/blob/HEAD/examples/rails-d3-app) and a [multi-app](https://github.com/eliias/isorun/blob/HEAD/examples/rails-multi-app) setup

## How to

### Plain JavaScript

```js
// module.js
export function say(word) {
  return word;  
}
```

```ruby
context = Isorun::Context.new

# import `export function say` from module 
say = context.import(:say).from("./module.js")
say.call("Hello!") # "Hello!"
```

###…
