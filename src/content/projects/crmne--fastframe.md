---
repo: "crmne/fastframe"
name: "fastframe"
description: "egui on rails: the shared foundation for native Rust apps built with egui"
readmeQualityOk: true
url: "https://github.com/crmne/fastframe"
homepage: "https://fastframe.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["egui", "rust"]
stars: 215
forks: 24
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 13
recentReleases: 10
createdAt: "2026-09-25T10:41:38Z"
lastCommitAt: "2026-11-01T22:58:11Z"
lastReleaseAt: "2026-10-03T14:36:24Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 34
maintainers: ["crmne", "renovate[bot]", "igor-alexandrov"]
openGraphImageUrl: "https://opengraph.githubassets.com/30643b3f3038bad29931613a1ea5c656d33a69f51bdd4d917ec34ac1fdbdf852/crmne/fastframe"
fundingLinks: ["GITHUB:https://github.com/crmne", "PATREON:https://patreon.com/crmne"]
discussionCount: 0
---

Build your interface with egui. Let fastframe handle the parts a desktop app
needs around it: native text, themes, tray menus, audio, media keys, sleep and
wake, notifications, and updates that can roll back.

Each capability is a small Rust crate. Take the ones you need, keep your own
layout and product decisions, and run on **Linux, macOS, and Windows**.
No telemetry or hosted service is required by the crates.

Extracted from [ZapFast](https://zapfast.rocks),
[Spotifast](https://spotifast.rocks), [Solco](https://getsolco.com),
[TonePush](https://docs.tonepush.rocks), and
[Chat with Work Desktop](https://github.com/crmne/chatwithwork-desktop).

## See it

Real egui windows from the [font specimen](https://github.com/crmne/fastframe/blob/HEAD/crates/fastframe-fonts/examples/fonts.rs),
using synthetic text. Interface weights and installed script fallbacks work in
both themes. The light specimen uses a validated local font.

| Default interface font, dark | Local interface font, light |
| --- | --- |
|  |  |

Run it with `cargo run -p fastframe-fonts --example fonts`, or append
`-- /path/to/font.ttf` to try a local face. Installed fallback faces vary by platform.

## Start with…
