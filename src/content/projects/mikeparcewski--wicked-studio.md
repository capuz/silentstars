---
repo: "mikeparcewski/wicked-studio"
name: "wicked-studio"
description: "wicked-studio — the coder-facing skin of the wicked experience plane. Pure HTTP/WS client of the wicked-crew daemon's /api/v1."
readmeQualityOk: true
url: "https://github.com/mikeparcewski/wicked-studio"
homepage: "https://ws.wickedagile.com/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [71, 26]
stars: 163
forks: 166
openIssues: 37
closedIssues: 158
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-12T14:11:53Z"
lastCommitAt: "2026-10-09T18:55:50Z"
lastReleaseAt: "2026-09-07T15:08:53Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure", "fork_magnet"]
healthScore: 96
undervaluedScore: 43
maintainers: ["mikeparcewski", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1115660728a5805a90cd9efc2a1e115de88e08fd1ed83fd8b59cff0eacf07681/mikeparcewski/wicked-studio"
---

# wicked-studio

> [](https://www.npmjs.com/package/wicked-studio) · [](https://github.com/mikeparcewski/wicked-studio/actions/workflows/ci.yml) · [](./LICENSE)

**The cockpit for AI coding agents you can actually trust.** wicked-studio is a browser UI for
running coding-agent CLIs (Claude Code, Codex, Antigravity, and more) as *governed* workers:
you give an intent, the agents do the work behind verification gates, and you approve the
decisions that matter — with the evidence behind every "done" one click away.

It's the human surface of the [wicked](https://github.com/mikeparcewski/wicked-crew) platform.
The agents run headless in the background; studio is where you point them at your repos, watch
them work in real time, unblock them when they need a human, and see what actually happened.

---

## Why you'd want it

Coding agents are fast but unsupervised — they assert "done," grade their own work, and bury the
reasoning in a scrollback you'll never read. wicked-studio flips that:

- **Direct, don't babysit.** Launch runs across many repos and projects at once, then let them
  work. Attention comes to *you* when a run hits a gate — you don't sit watching one terminal.
-…
