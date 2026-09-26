---
repo: "sbluemin/fleet-harness"
name: "fleet-harness"
description: "A local-first agent operations platform for running, orchestrating, and supervising persistent Claude Code operations across models, machines, and devices."
readmeQualityOk: true
url: "https://github.com/sbluemin/fleet-harness"
homepage: "https://sbluemin.github.io/fleet-harness/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 17
forks: 4
openIssues: 0
closedIssues: 8
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-03-17T13:12:17Z"
lastCommitAt: "2026-09-26T08:46:14Z"
lastReleaseAt: "2026-04-30T02:38:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 52
maintainers: ["sbluemin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c70634cb3225171ce74865f99c2e07ad159568ec34baa677f5aaa1952d0befd/sbluemin/fleet-harness"
---

</p>

<h1 align="center">Every frontier coding agent.<br/>One console. Any screen.</h1>

  <strong>Fleet runs your coding agents as live, server-owned sessions on your machine</strong> —<br/>
  and lets you command them from a browser, a native desktop window, or the phone in your pocket.
</p>

  <br/>
</p>

Working with one AI coding agent is a workflow. Working with five is a mess of terminal tabs — until you give them a deck to land on. Fleet turns every agent session into an **Operation**: a real PTY owned by a local server, laid out on an infinite canvas, observable from any device you trust.

## Start in one command

Requires Node.js 20.19+ and at least one authenticated agent CLI on `PATH`.

```bash
npm install -g @dotobokuri/fleet-console

fleet console
```

Everything runs on your machine. The server binds to loopback by default, the browser never receives provider tokens, and remote access stays off until you deliberately turn it on.

## Agents that outlive the tab

An Operation is owned by the local Fleet Console server, not by your browser. Close the tab and the PTY keeps running, its output keeps buffering; reopen the console and the session replays its scrollback and…
