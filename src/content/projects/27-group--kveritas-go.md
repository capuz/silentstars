---
repo: "27-GROUP/kveritas-go"
name: "kveritas-go"
description: "K-Veritas CLI"
readmeQualityOk: true
url: "https://github.com/27-GROUP/kveritas-go"
homepage: "https://kveritas.org"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["computer-science", "conferences", "experiment-nonrepudiation", "journals", "open-source", "school", "trust", "k-veritas", "neurips-2026"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-23T12:15:44Z"
lastCommitAt: "2026-10-17T07:59:16Z"
lastReleaseAt: "2026-03-24T16:47:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 55
maintainers: ["Mamadou2727"]
openGraphImageUrl: "https://opengraph.githubassets.com/a51da6d4948695172097eb702ab45bf64d1ce0f41bb93185cbec28ce94a31304/27-GROUP/kveritas-go"
---

# K-Veritas Go

Cryptographic verification for computational experiments. Binds a result to the code, hardware, and time that produced it, in a signed PDF anyone can verify. Any language, no runtime deps, single static binary.

**What it proves.** These numbers came from this code, at this time, unchanged since. Not that the experiment is correct: that stays with the reviewer.

**Faking it.** Several independent checks, and everything run is sealed, an attempt to cheat included. A careful look at the artifact exposes it, and it cannot be denied.

K-Veritas is the official implementation of [Computer Science Conferences Should Require Nonrepudiable Experimental Results](https://arxiv.org/abs/2605.08586) (Keita and Homan, NeurIPS 2026 Position Paper Track).

**Platform.** Core features are cross-platform. The activity map and per-process hardware are Linux only, with a system-wide fallback elsewhere.

## Install

```bash
# Prebuilt binary (also darwin/windows, amd64/arm64)
curl -fsSL https://github.com/27-GROUP/kveritas-releases/raw/main/bin/kveritas-linux-amd64 -o kveritas
chmod +x kveritas && sudo mv kveritas /usr/local/bin/

# Or build from source (Go 1.22+)
make build
```

##…
