---
repo: "kvnshroom/giana-sisters-native"
name: "giana-sisters-native"
description: "Native Rust port of The Great Giana Sisters (C64). Bring your own disk image."
readmeQualityOk: true
url: "https://github.com/kvnshroom/giana-sisters-native"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-11-03T03:23:02Z"
lastCommitAt: "2026-11-08T14:14:21Z"
lastReleaseAt: "2026-11-08T14:14:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 41
maintainers: ["kvnshroom"]
openGraphImageUrl: "https://opengraph.githubassets.com/601d53d75f786a63685fa780c43cdc90d8ce4d19fb65c1586181bbcad8e39715/kvnshroom/giana-sisters-native"
---

# The Great Giana Sisters – native port

A native PC version of the 1987 C64 classic *The Great Giana Sisters*, written in Rust.

This is **not an emulator**: the game was ported routine by routine and plays like the C64 version – same jumps, same
enemies, same music – but runs as a normal program with a menu, controller support, fullscreen and network play.

The one part that is emulated is the sound chip. Chris Hülsbeck's music and sound effect driver is ported like the rest
of the game, so it decides which note plays when and writes the same SID registers as on the C64. Those registers then
go to [resid-rs](https://crates.io/crates/resid-rs), the reSID chip model that VICE uses as well, because the C64's
sound comes from an analog chip (oscillators, envelopes, filter) that can be modelled but not ported.

## Why this exists

I built this for my dad. He played Giana Sisters back in the day, and I wanted us to be able to play it together
again – on our own PCs, over the network, without fiddling with emulator settings. That's also why there are things
the original never had: high scores with names, a two-player network mode where you both play at the same time, and a
"who got…
