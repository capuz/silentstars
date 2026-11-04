---
repo: "sbluemin/fleet-harness"
name: "fleet-harness"
description: "A local-first agent operations platform for running, orchestrating, and supervising persistent Claude Code operations across models, machines, and devices."
readmeQualityOk: true
url: "https://github.com/sbluemin/fleet-harness"
homepage: "https://sbluemin.github.io/fleet-harness/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 17
forks: 4
openIssues: 0
closedIssues: 10
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-03-17T13:12:17Z"
lastCommitAt: "2026-11-04T13:04:36Z"
lastReleaseAt: "2026-04-30T02:38:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["sbluemin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a40ac19a4471f27730cc82c11c31d76cd0bb2e8d54592d90402b4602409184cc/sbluemin/fleet-harness"
---

Run Claude Code on every frontier model, keep each session alive on your own machine,<br/>
  and supervise the whole fleet from a browser, the desktop app, or your phone.

## Start

```bash
npm i -g https://github.com/sbluemin/fleet-harness/releases/latest/download/fleet-console.tgz
fleet console
```

`fleet console` starts a local server and prints its address. Open that address in any browser. You need Node.js 20.19 or later and Claude Code installed and signed in. Running `fleet` on its own opens Claude Code in your terminal, routed through the same AI Gateway.

Update from the Console or with `fleet update`. `npm update -g` rolls Fleet back to the old version left on npm.

Press the **+** at the top of the sidebar to open a new session. Add a project folder as a **Theater** with **Add Theater…** there, pick the model and effort, and send your first message, or start from <kbd>⌘</kbd><kbd>J</kbd>.

## Sessions that outlive the tab

Each conversation is a Claude Code session owned by the Fleet server, not by the page you're looking at. You can close the tab, reload, or switch devices, and the session keeps running. When you come back, the conversation is still there. A…
