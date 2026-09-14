---
repo: "gsxhq/gsx"
name: "gsx"
description: "JSX-style HTML templating for Go"
readmeQualityOk: true
url: "https://github.com/gsxhq/gsx"
homepage: "https://gsxhq.github.io/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "jsx", "templ", "template"]
stars: 57
forks: 2
openIssues: 1
closedIssues: 26
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-06-20T20:44:26Z"
lastCommitAt: "2026-09-14T09:12:45Z"
lastReleaseAt: "2026-09-03T10:04:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 40
maintainers: ["jackielii", "HoseinBahmany"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e4e02c5a6dc163dce102c41a69c238f7faf70d336be7fe3e1e9b187babdc221/gsxhq/gsx"
discussionCount: 0
---

# gsx

A JSX-like templating language for Go, compiled to plain Go that streams HTML.

> **Status — alpha, tagged.** gsx is used in production today and ships tagged
> releases from `v0.1.0`; language and API compatibility may change before 1.0.
> See [Status](https://github.com/gsxhq/gsx/blob/HEAD/docs/guide/status.md), the [changelog](https://github.com/gsxhq/gsx/blob/HEAD/CHANGELOG.md), and the
> [Roadmap](https://github.com/gsxhq/gsx/blob/HEAD/docs/ROADMAP.md).

## What is gsx

`.gsx` files hold ordinary Go (imports, types, funcs) plus `component`
declarations. A generator lowers each component to plain Go in a `.x.go` file the
Go compiler type-checks and builds:

```
.gsx → parser → AST → codegen → .x.go → go build → HTML
```

- **Checked by Go** — each component keeps its exact authored Go signature, and
  markup binds parameters by name.
- **HTML-shaped markup with ordinary Go** — use JSX-like markup for templates
  and ordinary Go for everything else.
- **Safe by context** — contextual HTML, URL, CSS, and JavaScript escaping with
  a **standard-library-only** runtime.
- **Go-native tooling** — generation and builds are Go; Node.js is needed only
  when your application…
