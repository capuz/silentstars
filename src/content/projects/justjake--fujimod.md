---
repo: "justjake/fujimod"
name: "fujimod"
description: "Fujifilm camera modification tools. DO NOT FLASH CUSTOM FIRMWARE TO YOUR CAMERA WITHOUT DUAL BOOTING FIRST"
readmeQualityOk: true
url: "https://github.com/justjake/fujimod"
homepage: "https://fujimod.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["emulator", "fujifilm", "usb", "ai-slop"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 4
recentReleases: 1
createdAt: "2026-10-15T16:34:15Z"
lastCommitAt: "2026-10-23T09:33:03Z"
lastReleaseAt: "2026-10-19T14:08:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["miegl"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff603a0f61394b5f5de550bb0b115fa13749815cce864fc53285e2cc88214084/justjake/fujimod"
---

# FujiMod

Camera tools, emulation and firmware mods. The browser application lives in
[apps/web](https://github.com/justjake/fujimod/blob/HEAD/apps/web/README.md), including its body definitions, patch
interpreter, runtime adapter and browser checks. The shared
[emulator UI](https://github.com/justjake/fujimod/blob/HEAD/packages/emulator-ui/README.md) lives in `packages/emulator-ui/`.

Use `mise install`, then work in `apps/web`:

```sh
npm ci
npm --prefix packages/emulator-ui ci
cd apps/web
npm ci
npm test
npm run dev
```

The root `web-build`, `web-test` and `web-preview` mise tasks run from that
application directory. `web-test` runs both `@fujimod/emulator-ui` tests and the
web app tests through `apps/web`'s `npm test`. The Pages workflow builds
`apps/web` from approved main releases. Review branches do not deploy Pages.

## Rust libraries

The root Cargo workspace contains reusable implementation crates under `crates/`.
The `fujimod` facade exposes components through optional features; enable `usb`
for `fujimod::usb`. The [mod installation crate](https://github.com/justjake/fujimod/blob/HEAD/crates/mod-install/README.md)
provides checked uploads and borrowed callback…
