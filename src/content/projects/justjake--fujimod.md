---
repo: "justjake/fujimod"
name: "fujimod"
description: "Fujifilm camera modification tools"
readmeQualityOk: true
url: "https://github.com/justjake/fujimod"
homepage: "https://fujimod.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["emulator", "fujifilm", "usb", "ai-slop"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-10-15T16:34:15Z"
lastCommitAt: "2026-10-21T21:14:30Z"
lastReleaseAt: "2026-10-19T14:08:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["justjake"]
openGraphImageUrl: "https://opengraph.githubassets.com/f66e99b5dcc8a9563b341ad6dee23f4ce70d69c34f7d2384d2f3fe2def3fb422/justjake/fujimod"
---

# FujiMod

Camera tools, emulation and firmware mods. The browser application lives in
[apps/web](https://github.com/justjake/fujimod/blob/HEAD/apps/web/README.md), including its body definitions, patch
interpreter, runtime adapter and browser checks.

Use `mise install`, then work in `apps/web`:

```sh
cd apps/web
npm ci
npm test
npm run dev
```

The root `web-build`, `web-test` and `web-preview` mise tasks run from that
application directory. The Pages workflow builds `apps/web` from approved
main releases. Review branches do not deploy Pages.

## Rust libraries

The root Cargo workspace contains reusable implementation crates under `crates/`.
The `fujimod` facade exposes components through optional features; enable `usb`
for `fujimod::usb`. The [mod installation crate](https://github.com/justjake/fujimod/blob/HEAD/crates/mod-install/README.md)
provides checked uploads and borrowed callback batches. The [USB crate](https://github.com/justjake/fujimod/blob/HEAD/crates/usb/README.md) provides the initial
asynchronous service/debug protocol implementation.
The [catalog crate](https://github.com/justjake/fujimod/blob/HEAD/crates/catalog/README.md) loads caller-selected firmware
data…
