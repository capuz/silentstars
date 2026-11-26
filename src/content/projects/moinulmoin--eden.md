---
repo: "moinulmoin/eden"
name: "eden"
description: "Deploy your Vercel Eve agent to your own Cloudflare. One command, no rewrite."
readmeQualityOk: true
url: "https://github.com/moinulmoin/eden"
homepage: "https://eden.ideaplexa.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["agents", "ai-agents", "cli", "cloudflare", "cloudflare-containers", "cloudflare-workers", "deploy", "durable-objects", "eve", "vercel-eve"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-08-22T20:39:23Z"
lastCommitAt: "2026-11-26T13:00:54Z"
lastReleaseAt: "2026-10-01T12:22:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 56
maintainers: ["moinulmoin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1343153019/893b1b3b-6a1f-41a2-af67-26a9fe7aea6d"
---

# Eden

Deploy an existing [Vercel Eve](https://github.com/vercel/eve) agent to your
own Cloudflare account with one command. No rewrite.
[eden.ideaplexa.com](https://eden.ideaplexa.com)

Eden installs the project's npm or pinned pnpm lockfile, runs its project-local Eve
executable, packages the real Node/Nitro server into a Cloudflare Container,
and puts a Worker in front of it. Your Eve project stays exactly as you wrote
it: Eden never rewrites it or swaps out its providers and services.

What you get on your own account:

- your Eve server in a Cloudflare Container, with a Worker and a `workers.dev`
  URL in front
- `eden deploy` again updates in place: same URL, new code, every
  conversation's files kept
- the container sleeps when idle and wakes on the next request; standard cron
  schedules still fire while it sleeps
- `eden destroy` removes only what Eden created; Cloudflare may keep some
  [registry objects](https://github.com/moinulmoin/eden/blob/HEAD/docs/troubleshooting.md#eve_registry_objects_kept)

## Quick start

From inside an npm or pnpm Eve project, with Docker running:
