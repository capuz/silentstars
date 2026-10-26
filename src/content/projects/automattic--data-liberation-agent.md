---
repo: "Automattic/data-liberation-agent"
name: "data-liberation-agent"
description: "Liberate any website into a complete, portable HTML artifact."
readmeQualityOk: true
url: "https://github.com/Automattic/data-liberation-agent"
homepage: "https://wordpress.org/data-liberation/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 36
forks: 4
openIssues: 91
closedIssues: 238
watchers: 4
contributors: 149
recentReleases: 8
createdAt: "2026-03-31T06:00:47Z"
lastCommitAt: "2026-10-26T18:06:04Z"
lastReleaseAt: "2026-09-21T14:53:49Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 48
maintainers: ["chubes4", "github-actions[bot]", "homeboy-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/08abfde87110a19e01a71c26ee0bafb6649834f61e87bc9d71d52683452c800f/Automattic/data-liberation-agent"
---

# data-liberation-agent

Liberate any website into a complete, portable HTML site.

## The problem

Closed platforms make it hard to leave. Wix has no HTML export and caps RSS at 20 posts. JavaScript-rendered content and limited APIs leave your site locked inside.

## The solution

Point it at a URL and get your site back as plain files:

```bash
data-liberation https://example.com/
```

Every retained route becomes a directory of HTML, CSS, media, and fonts, with references rewritten so navigation works locally. Sites with shared headers/footers need include-aware serving or compilation as described below; the rendered pages need no DLA or browser assembly runtime.

**HTML is the contract.** The liberated site is the deliverable — not an intermediate format on the way to somewhere else, and not tied to any destination.

## Four commands

```bash
data-liberation <url>                        # liberate a site
data-liberation inspect <url>                # assess a source before liberation
data-liberation compare <run-dir>            # verify the copy against its source
data-liberation publish <run-dir> --to spacefast   # put it on a live URL
```

That is the whole surface.…
