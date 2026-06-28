---
repo: "shreeve/rip-lang"
name: "rip-lang"
description: "A modern language that compiles to JavaScript"
url: "https://github.com/shreeve/rip-lang"
homepage: "https://shreeve.github.io/rip-lang/"
language: "CoffeeScript"
languages: ["CoffeeScript", "JavaScript"]
languagePcts: [47, 45]
stars: 28
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-07T13:50:06Z"
lastCommitAt: "2026-06-28T06:55:30Z"
lastReleaseAt: "2026-03-17T21:08:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 44
maintainers: ["shreeve", "philiplindberg", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1152184903/419842e4-d2a3-4f95-a882-5bdce3cf885c"
---

</p>

<h1 align="center">Rip</h1>

  <strong>A modern language that compiles to JavaScript</strong>
</p>

</p>

---

Rip is a modern language inspired by CoffeeScript. It compiles to **ES2022** (classes, `?.`, `??`, modules), adds about a **dozen new operators**, includes **built-in reactivity**, and sports a self-hosting compiler with **zero dependencies** — all in about 11,000 lines of code.

> **No imports. No hooks. No dependency arrays. Just write code.**

```coffee
data = fetchUsers!                  # Dammit operator (call + await)
user = User.new name: "Alice"       # Ruby-style constructor
squares = (x * x for x in [1..10])  # List comprehension

str =~ /Hello, (\w+)/               # Regex match
log "Found: #{_[1]}"                # Captures in _[1], _[2], etc.

get '/users/:id' ->                 # RESTful API endpoint, comma-less
  name = read 'name', 'string!'     # Required string
  age  = read 'age' , [0, 105]      # Simple numeric validation
```

---

**What makes Rip different:**
- **Modern output** — ES2022 with native classes, `?.`, `??`, modules
- **New operators** — `!`, `//`, `%%`, `=~`, `.new()`, and more
- **Reactive operators** — `:=`, `~=`, `~>` as…
