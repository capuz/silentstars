---
repo: "gram-lang/gram"
name: "gram"
description: "[MIRROR] Official mirror of the Gram markup language. Main repo & contributions: https://git.gram-lang.org/gram-lang/gram"
readmeQualityOk: true
url: "https://github.com/gram-lang/gram"
homepage: "https://gram-lang.org"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [66, 21]
topics: ["cooking", "cooking-recipes", "language", "lsp", "markup-language", "recipes"]
stars: 43
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2025-12-28T19:39:17Z"
lastCommitAt: "2026-10-04T10:01:58Z"
lastReleaseAt: "2026-08-25T21:18:23Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["abiwab"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cea48b53d29d42d023cf154837b7484219a11c380ae570967a38e17d291d2bc/gram-lang/gram"
---

An open-source declarative and computational recipe DSL. Built to handle complex culinary logic, Gram compiles your plain-text instructions into structured, calculated, and relational data.

> [!NOTE]
> I develop **Gram** on my primary [Forgejo instance](https://git.gram-lang.org/gram-lang/gram), with automatic mirrors on [GitHub](https://github.com/gram-lang/gram) and [Codeberg](https://codeberg.org/gram-lang/gram).  

> Contributions, issues, and discussions are welcome on any of these platforms.

Please see [CONTRIBUTING.md](https://github.com/gram-lang/gram/blob/HEAD/CONTRIBUTING.md) for more information on how to get involved.

---

## Design Philosophy & Key Features

Gram turns plain-text recipes into structured, queryable data while keeping them easy to read and write.

* **Plain Text**: Recipes are saved as simple `.gram` text files, so you can track changes with Git and use any text editor.
* **Modular Recipes (`@use`)**: Import and compose external base recipes (`@use "./bases/shortcrust.gram" as &crust`) with automatic yield scaling, timeline interleaving, and unified shopping lists.
* **Dynamic Calculations**: Declare Baker's percentages, relative quantities…
