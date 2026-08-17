---
repo: "incyashraj/krate"
name: "krate"
description: "Make apps with AI. Share them as one file that opens on Mac, Windows, and Linux, with access shown before it runs."
readmeQualityOk: true
url: "https://github.com/incyashraj/krate"
homepage: "https://krate.tech"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["cross-platform", "runtime", "rust", "wasm", "webassembly"]
stars: 11
forks: 0
openIssues: 6
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-04-20T03:17:35Z"
lastCommitAt: "2026-08-17T04:20:42Z"
lastReleaseAt: "2026-08-02T18:16:58Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: ["incyashraj"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8846ee6e7b070a663f7c43006304fd10822664298b6d202d283c992dda522cc/incyashraj/krate"
discussionCount: 2
---

</p>

<h1 align="center">Krate</h1>

  <strong>Make an app. Send the file. It opens anywhere.</strong>
</p>

  An AI writes it. You get one small file that opens on Mac, Windows, and
  Linux,<br> shows what it wants before it runs, and can be sent to anyone.
</p>

  </a>
  </a>
  </a>
</p>

  ·
  ·
  ·
  ·
  ·
</p>

  </a>
</p>

## What is Krate?

AI can write a useful little app in a minute. Sharing it is still the hard part.
A web link cannot always reach the local machine. A normal desktop app can, but
it has to be packaged per operating system, and it can quietly reach far more of
your computer than you expected.

Krate is a simpler app format:

1. The app and the access it asks for go into one `.krate` file.
2. That same file opens on Mac, Windows, and Linux. The bytes do not change.
3. Krate shows you what it wants before it runs.
4. The app gets only what you allow, and nothing else.

A Krate app is a WebAssembly component compiled from ordinary Rust. It carries
no browser and no runtime of its own, so the apps in this repo have a median
size of **13.5 KB**. You install the runtime once; every app after that is
kilobytes.

Krate is open source, and the whole path works end…
