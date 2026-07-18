---
repo: "zest-ssg/zest"
name: "zest"
description: "F#-powered static site generator with template-as-code & ZCSS styles (no YAML, no Node.js)"
readmeQualityOk: true
url: "https://github.com/zest-ssg/zest"
homepage: "https://zest.discourse.group"
language: "F#"
languages: ["F#"]
languagePcts: [81]
topics: ["blog-generator", "dotnet", "fsharp", "markdown-to-html", "no-nodejs", "ssg", "static-site-generator"]
stars: 60
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-20T12:17:49Z"
lastCommitAt: "2026-07-18T05:46:25Z"
lastReleaseAt: "2026-07-17T17:16:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 35
maintainers: ["exyone-js"]
openGraphImageUrl: "https://opengraph.githubassets.com/b313c40227315f019c5adab5704dbe955cf2fd38f5fcec0845fdde0b723dbb33/zest-ssg/zest"
discussionCount: 1
---

</p>

<h1 align="center">Zest SSG</h1>

</p>

---

**Zest** is a hybrid F# + C# static site generator where templates are real code — not strings. Built on the philosophy that your templating language and your host language should be one and the same.

## Features

- **Template as Code** — `.zest.fsx` are real F# scripts executed at build time via `dotnet fsi`. Full F#: list comprehensions, pattern matching, string interpolation, arbitrary computation.
- **`.zhtml` Lightweight Pages** — Pure HTML pages with optional Nunjucks template syntax. No FSI overhead.
- **HTML DSL** — Compose HTML declaratively: `render [ h1 []; p [] ]`.
- **Markdown** — Standard `.md` files with frontmatter support.
- **ZCSS** — A CSS superset with nesting, F#-style `let` bindings, math expressions, color functions, and mixins — compiled to standard CSS.
- **11ty-Compatible Templates** — Full Nunjucks (.njk), Liquid (.liquid), Handlebars (.hbs), Mustache (.mustache), HAML (.haml), Pug (.pug), and WebC (.webc) support — all with auto-conversion to Nunjucks engine for filters, macros, template inheritance, and Zest API integration.
- **`_init.fsx`** — Optional initialization script (runs before build) to…
