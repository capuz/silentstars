---
repo: "jannskiee/floe"
name: "floe"
description: "Encrypted P2P file transfer in the browser, on the desktop, and in the CLI. No accounts, no uploads, no file storage."
readmeQualityOk: true
url: "https://github.com/jannskiee/floe"
homepage: "https://floe.one"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [49, 29]
topics: ["file-sharing", "file-transfer", "nextjs", "open-source", "peer-to-peer", "socket-io", "typescript", "webrtc", "privacy", "react"]
stars: 202
forks: 12
openIssues: 7
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-01-15T06:20:26Z"
lastCommitAt: "2026-08-29T17:26:45Z"
lastReleaseAt: "2026-06-21T15:23:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine"]
healthScore: 84
undervaluedScore: 31
maintainers: ["jannskiee", "dependabot[bot]", "mintlify[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cec9911cf8b49e0927bd074101861b8470130503b0c0fa04ca178deec03d58a3/jannskiee/floe"
fundingLinks: ["GITHUB:https://github.com/jannskiee", "KO_FI:https://ko-fi.com/jannskiee"]
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/floe-mark-dark.svg">
  </picture>
</p>

<h1 align="center">Floe</h1>

  <strong>Encrypted peer-to-peer file transfer for the browser, desktop, and command line</strong>
</p>

</p>

</p>

## About

Floe is an open-source peer-to-peer file transfer application built on WebRTC. Files stream directly between devices; the signaling server negotiates connections and never stores, inspects, or decrypts file data. When a direct path is blocked, an optional TURN relay bridges the transfer while the data stays end-to-end encrypted. The desktop app and the CLI contain no analytics or telemetry; the only things either sends are an optional, anonymous byte count that powers the public counter and an optional once-a-day update check against GitHub, and you can turn both off in any client. The floe.one website itself runs cookieless, aggregate analytics (including anonymous transfer outcomes) and error monitoring, detailed in the [security and privacy docs](https://www.floe.one/docs/security-privacy).

Three clients share one wire protocol: the web app at [floe.one](https://floe.one), a Windows desktop app, and a…
