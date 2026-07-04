---
repo: "f12io/maple"
name: "maple"
description: "A variable-first, stack-agnostic CSS engine that generates atomic styles from utility classes only when they appear  in the DOM."
readmeQualityOk: true
url: "https://github.com/f12io/maple"
homepage: "https://maple.f12.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["css", "css-engine", "maple", "runtime-css", "utility-classes"]
stars: 30
forks: 0
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2020-05-13T12:31:56Z"
lastCommitAt: "2026-07-04T22:22:12Z"
lastReleaseAt: "2026-06-06T10:21:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 68
maintainers: ["onuradsay", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4200d879f7314be7cb036b6137c3f338b51fbcd9c1f2fb7d7c836c8e9fd2c72a/f12io/maple"
---

<h1>Maple</h1>
  <p>
    A variable-first, stack-agnostic runtime CSS engine.<br>
    Atomic. Tiny (~12kb gzipped). Delightfully intuitive.
  </p>

  <p>
    Zero build steps • Zero configuration • Zero dependencies
  </p>

  <p>
  </p>

</div>

## TL;DR

Maple is a runtime CSS engine that generates atomic styles from utility classes **only when they appear in the DOM**.

Instead of shipping pre-compiled stylesheets, Maple ships a small JavaScript file that observes the DOM and constructs CSSOM incrementally as your application renders. If a class is never used, its style is never generated.

This shifts styling cost from upfront network transfer to demand-driven runtime generation. It eliminates build steps, complex configuration, and unused CSS, while keeping styles encapsulated.

## Quick Start

Add Maple to your project by including the script below in the document `<head>` and start styling with utility classes.

```html
<!doctype html>
<html lang="en">
  <head>
    
    <script src="https://cdn.jsdelivr.net/npm/@f12io/maple/dist/maple.js"></script>
  </head>
  <body>
    
  </body>
</html>
```

> [!IMPORTANT]
> Load Maple as a blocking script in the document head.
>
> Maple…
