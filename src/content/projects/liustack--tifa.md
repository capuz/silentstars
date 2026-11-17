---
repo: "liustack/tifa"
name: "tifa"
description: "The full-stack Go framework for Gophers."
readmeQualityOk: true
url: "https://github.com/liustack/tifa"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["fullstack", "go", "golang", "react", "tanstack-router", "typesafe", "quickjs", "ssr", "go-framework", "javascript-engine"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-13T19:23:13Z"
lastCommitAt: "2026-11-17T12:16:53Z"
lastReleaseAt: "2026-11-16T09:36:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["liustack"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1417820729/8145fde6-ed9f-491f-98d2-e696cef431f7"
---

Write the backend in Go and the pages in React. Tifa compiles the whole site into one executable that you copy to a small VPS and run. No Node in production, no process manager, no reverse proxy, no Redis.

It is for Go developers whose business logic and data already live in Go, who want to write pages with the React ecosystem, and who do not want to keep a Node service running in production just for server-side rendering.

> Tifa is very early. APIs will change, and many compiler optimizations are not done yet.

## Why it exists

I wanted to ship a small product on TanStack Start. My other VPSes were full, Black Friday was still weeks away and I did not feel like buying another one, so I dug out an old box with 1 CPU and 1 GB of RAM. I had Codex set up the usual stack in one go: nginx, Node.js, PM2, TanStack Start, Redis, BullMQ, cron and SQLite.

It did not really run. It crawled.

So I started hacking on Tifa. Once it is done, deploying should mean copying one Go binary to the VPS, and that is it.

| On a 1 CPU / 1 GB VPS | The usual stack | With Tifa |
| :-- | :-- | :-- |
| Reverse proxy and certificates | nginx + certbot | The Go HTTP server in the binary, which gets its own…
