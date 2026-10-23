---
repo: "browser-specs/browser-specs.github.io"
name: "browser-specs.github.io"
description: "🌏 Browser specs"
readmeQualityOk: true
url: "https://github.com/browser-specs/browser-specs.github.io"
homepage: "https://browser-specs.github.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["documentation", "ietf", "reference", "w3c", "web-development", "web-standards", "whatwg", "wicg", "specifications", "web-platform"]
stars: 50
forks: 12
openIssues: 1
closedIssues: 2
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2022-08-22T04:20:54Z"
lastCommitAt: "2026-10-23T09:32:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 53
maintainers: ["sideshowbarker", "sideshowbarkerbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cbc5e7f0e71200c884ab665c09c039a3b1b2e52044cc2716e6fe1269d80978b/browser-specs/browser-specs.github.io"
---

# Browser specs

The sources for https://browser-specs.github.io/: a list of every browser spec in [browser-specs](https://github.com/w3c/browser-specs), one row per level — showing which engines implement it, its WPT pass rates, its MDN articles and Can I Use features, and its “platform footprint” (how many other specs build on it).

The list starts with the most-recently-updated specs, and sorts by any of its columns. Its **Filter** box finds specs by title, shortname, org, or group, and a word in it that starts with `-` hides the specs that match that word (`-css`). Its counts, test bars, and logos open panels with the details.

None of the data is hand-maintained, apart from a few display names in `src/logic/rows.ts`. Every hour, a GitHub Actions workflow builds the site from browser-specs, [webref](https://github.com/w3c/webref)’s crawl (for each spec’s date), [web-features](https://github.com/web-platform-dx/web-features) (for its categories), and the data files Web Specs Companion builds from [BCD](https://github.com/mdn/browser-compat-data), [mdn/content](https://github.com/mdn/content), [caniuse-db](https://github.com/Fyrd/caniuse), and [wpt.fyi](https://wpt.fyi/), and…
