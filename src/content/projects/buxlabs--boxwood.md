---
repo: "buxlabs/boxwood"
name: "boxwood"
description: "Server side templating engine written in JavaScript"
readmeQualityOk: true
url: "https://github.com/buxlabs/boxwood"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["javascript"]
stars: 134
forks: 6
openIssues: 0
closedIssues: 566
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2018-03-31T19:23:33Z"
lastCommitAt: "2026-07-05T20:17:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 39
maintainers: ["emilos"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebfc9f84154418bde7b9caa7a0c7edae6dd722bafec1d0bf74eecca09e9e82a0/buxlabs/boxwood"
fundingLinks: ["GITHUB:https://github.com/emilos"]
discussionCount: 1
---

# boxwood

> It's just JavaScript™ - A template engine that gets out of your way

## Why Boxwood?

Unlike traditional template engines, Boxwood templates are **just JavaScript functions**. No new syntax to learn, no parsing overhead, and full access to the JavaScript ecosystem.

```javascript
// This is your template - just a function that returns HTML nodes
const HomePage = ({ posts }) => {
  return Div([
    H1("Blog"),
    posts.map((post) => Article([H2(post.title), P(post.summary)])),
  ])
}
```

## Key Advantages

### Zero Learning Curve

If you know JavaScript, you already know Boxwood. Use `map`, `filter`, `if/else`, and all standard JS features naturally.

### IDE Support

Get autocomplete, refactoring, and go-to-definition out of the box. Your templates are just code, so your editor understands them.

### True Composition

Components are functions. Compose them like functions. No slots, no special APIs - just parameters and return values.

### Performance

No template parsing at runtime. Templates are already JavaScript functions, eliminating parsing overhead.

### Security Helpers

- Automatic HTML escaping by default
- Basic sanitization for loaded SVG/HTML files
-…
