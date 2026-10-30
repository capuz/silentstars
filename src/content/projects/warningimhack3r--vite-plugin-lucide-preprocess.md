---
repo: "WarningImHack3r/vite-plugin-lucide-preprocess"
name: "vite-plugin-lucide-preprocess"
description: "A Vite plugin to tree-shake your Lucide icons"
readmeQualityOk: true
url: "https://github.com/WarningImHack3r/vite-plugin-lucide-preprocess"
homepage: "https://www.npmx.dev/package/vite-plugin-lucide-preprocess"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["lucide", "lucide-icons", "vite", "vite-plugin", "tree-shaking"]
stars: 39
forks: 0
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-10T22:06:22Z"
lastCommitAt: "2026-10-30T11:02:45Z"
lastReleaseAt: "2024-11-22T08:59:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 42
maintainers: ["renovate[bot]", "WarningImHack3r"]
openGraphImageUrl: "https://opengraph.githubassets.com/326831ed402b4b36611e1209e9feed2d1bcf88f6c28a5c93c07008b0df0cff8b/WarningImHack3r/vite-plugin-lucide-preprocess"
---

# vite-plugin-lucide-preprocess

A [Vite](https://vite.dev) plugin to tree-shake your [Lucide icons](https://lucide.dev).

## What is this?

If you want to import Lucide icons in your project, you can (usually — depending on
the package) use two methods:

```js
import { IconName } from "@lucide/svelte";
// or
import IconName from "@lucide/svelte/icons/icon-name";
```

While the first method is more convenient (and may be the one used by auto-import features in your editor),
it is not tree-shakable.  
In fact, a single import from `"lucide-<framework>"` or `"@lucide/<framework>"`
[will import all icons](https://github.com/WarningImHack3r/vite-plugin-lucide-preprocess/issues/11#issuecomment-2445209558);
not ideal for Vite dev server performance and build time.

**This plugin will replace the first method with the second one, so you can keep the convenience of the first method
while benefiting from tree-shaking optimizations.** “Correct” imports will be kept as-is.

> [!NOTE]
> The plugin is primarily intended for `@lucide/svelte`, but it works with
> any Lucide package using Vite.
> If it doesn't support a Lucide implementation,
> [please open an…
