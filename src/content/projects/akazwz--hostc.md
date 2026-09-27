---
repo: "akazwz/hostc"
name: "hostc"
description: "Localhost, anywhere. One command gives your dev server a public HTTPS URL, with WebSockets and hot reload. Free, no account, runs on Cloudflare Workers."
readmeQualityOk: true
url: "https://github.com/akazwz/hostc"
homepage: "https://hostc.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["cli", "cloudflare-workers", "developer-tools", "durable-objects", "localhost", "ngrok-alternative", "tunnel", "websocket", "hmr", "hot-reload"]
stars: 405
forks: 48
openIssues: 3
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 1
createdAt: "2026-04-16T12:40:17Z"
lastCommitAt: "2026-09-27T08:48:33Z"
lastReleaseAt: "2026-09-27T07:42:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 11
maintainers: ["akazwz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1212493515/3a445ca0-bd7c-48b4-a23a-b8aa340f362a"
---

<h1>hostc</h1>
  <p><strong>Localhost, anywhere.</strong></p>
  <p>One command gives your dev server a public HTTPS URL. WebSockets and hot reload included.<br />Free, open source, no account.</p>
  <p>
  </p>
  <p><a href="https://hostc.dev">hostc.dev</a> · <a href="./README.zh-CN.md">简体中文</a></p>
</div>

## Quick start

Start your app, then point hostc at its port:

```sh
npx hostc@latest 3000
```

```text
  https://k7m2xq9pa4dn.hostc.app  → http://localhost:3000

  Anyone with this URL can reach your local server. Press Ctrl+C to stop.
```

Open the URL on any device. Every request shows up in your terminal as it arrives.

hostc is free and open source. If it helps you, [a star on GitHub](https://github.com/akazwz/hostc) helps
other developers find it, and it's the best encouragement for the project.

## Why hostc

- **Nothing to set up.** No sign-up, no auth token, no binary to download. If you have Node.js,
  you have hostc.
- **Visitors see your app.** No warning page to click through before they reach it.
- **Hot reload works.** WebSockets pass straight through, so Vite, Next.js and friends update
  every open device the moment you save. Server-Sent Events stream as they…
