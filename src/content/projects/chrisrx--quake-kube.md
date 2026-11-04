---
repo: "ChrisRx/quake-kube"
name: "quake-kube"
description: "Quake 3 on Kubernetes"
readmeQualityOk: true
url: "https://github.com/ChrisRx/quake-kube"
homepage: "https://q3.chrisrx.dev"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [33, 21]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-22T16:03:04Z"
lastCommitAt: "2026-11-04T02:56:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["ChrisRx"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c8f5ec747a3c1ecd8d7178faa2371431e8cc7593adfd115d10f432ce23fe91/ChrisRx/quake-kube"
discussionCount: 0
---

QuakeKube is a Kubernetes-ified version of [Quake 3](https://en.wikipedia.org/wiki/Quake_III_Arena). A controller runs dedicated servers for `QuakeServer` objects, along with a master server that lists them, and a web app creates servers and plays them in the browser with [ioquake3](https://github.com/ioquake/ioq3) built for the web with [Emscripten](https://emscripten.org/). It's installed with a Helm chart.

[Try the web app in your browser](https://q3.chrisrx.dev/try-it.html), with nothing to install.

## Community content

QuakeKube ships mods and community maps made by people in the Quake 3 community, many of them years ago. They're included because their readmes allow distributing them, shipped unmodified with their readmes, and credited to their authors in the [Credits](https://chrisrx.github.io/quake-kube/credits.html#community-maps). They're bundled into QuakeKube's content images, rather than downloaded from community sites like [lvlworld](https://lvlworld.com) when servers start, so running QuakeKube doesn't put load on the sites that have kept these maps available for decades. Many of those authors can't be reached anymore, but their wishes come first: if you made…
