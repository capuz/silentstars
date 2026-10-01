---
repo: "heycupola/wrapper"
name: "wrapper"
description: "A terminal layer that connects and orchestrates AI tools across your devices."
readmeQualityOk: true
url: "https://github.com/heycupola/wrapper"
homepage: "https://wrapper.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-03-01T20:54:05Z"
lastCommitAt: "2026-10-01T10:24:41Z"
lastReleaseAt: "2026-09-29T09:42:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 74
maintainers: ["icanvardar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d091fb97121107d4e8485499b5e5dacf0bce0356c3b2b4f5e3d8c737785eafc/heycupola/wrapper"
---

# Wrapper

> Share a live terminal from your phone, on demand. Does not patch your shell config.

`wrapper share` wraps one shell (or `wrapper run -- claude` wraps one command)
so an authenticated device can mirror it. Your prompt, plugins, and history
behave as before.

A session never leaves your machine until you share it. Unshared hosts listen
on `127.0.0.1` and do not contact Convex. `Ctrl+\ s` (or `wrapper share`)
opens a relay tunnel; `Ctrl+\ u` closes it.

## How it works in one minute

1. You run `wrapper share`. It spawns your real shell inside a PTY and starts
   a tiny local WebSocket server bound to `127.0.0.1`. Nothing is exposed yet
   until share completes; metadata stays off Convex until then.
2. From the same machine, `wrapper attach` connects to that local server and
   mirrors the session. The transport stays on loopback and does not need the
   relay, Pro, or a Convex session row.
3. When you share, the CLI opens a Convex session, asks for a short-lived
   host ticket, connects to the relay on Fly.io, and prints a secret share
   code. You join your own devices with
   `wrapper attach --relay --id <id>`; anyone else enters the code in a hidden
   prompt, so…
