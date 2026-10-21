---
repo: "jkugelman/grawlix"
name: "grawlix"
description: "Grawlix - Use your words!"
readmeQualityOk: true
url: "https://github.com/jkugelman/grawlix"
homepage: "https://grawlix.wtf/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["crossword", "crossword-puzzle", "crosswords", "wordlist", "wordlists"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-01T12:33:52Z"
lastCommitAt: "2026-10-21T23:36:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 43
maintainers: ["jkugelman"]
openGraphImageUrl: "https://opengraph.githubassets.com/e55423f0e36187ed6df8399be5def4f1463f4a7371790db68716cd0c55d3cbbe/jkugelman/grawlix"
---

# Grawlix

**[grawlix.wtf](https://grawlix.wtf)** — a browser-based wordlist manager for crossword constructors.

Popular wordlists each score on their own private scale, so combining them is a mess: a 50 means something different in every list.
Grawlix rescores every list onto one common scale and merges them into a single deduped list you download (or sync to disk) and feed to your construction software.

It doubles as a word-finding playground: search the merged list and stack tools on it (anagrams, rhymes, beheadments, rebus forms, a couple dozen more) to mine for theme material or shake loose the one entry that fits a stubborn corner.

No account, no install, nothing to sign into.
Your wordlists, edits, and settings live entirely in your browser, on your device.
Just visit the site and start.
The in-app **?** opens Help, the user guide.

## Contributing

Grawlix is plain HTML/CSS/JS: ES modules under [`site/src/`](https://github.com/jkugelman/grawlix/blob/HEAD/site/src/), no runtime dependencies and no framework.
There's no build step in the dev loop: serve `site/` statically and refresh.
Deploys bundle to `dist/` with `npm run build` (run by CI).

Start with…
