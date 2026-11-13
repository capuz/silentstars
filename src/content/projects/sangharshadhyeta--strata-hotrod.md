---
repo: "sangharshadhyeta/Strata-HotRod"
name: "Strata-HotRod"
description: "Run Qwen3.8-Flash-Next (125B) on an RTX 3060 12 GB with 30 GB of RAM, streaming experts from the SSD. 50-70 tok/s, 262K context. A fork of Strata."
readmeQualityOk: true
url: "https://github.com/sangharshadhyeta/Strata-HotRod"
homepage: "https://sangharshadhyeta.github.io/Strata-HotRod/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [63, 21]
topics: ["cuda", "inference-engine", "llm", "local-llm", "low-ram", "moe", "qwen", "qwen3", "rtx-3060", "ssd-offload"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-18T10:34:03Z"
lastCommitAt: "2026-11-13T18:12:36Z"
lastReleaseAt: "2026-11-06T22:12:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b5dcd1b2fd1c918a52a3ed5cfaccaf5c9802eaccf685be38febfe6fbabf92eff/sangharshadhyeta/Strata-HotRod"
---

Nothing leaves your PC.</p>

🔥 <b>hot experts</b> on the card &nbsp;→&nbsp; 🌡️ <b>warm</b> in RAM &nbsp;→&nbsp; ❄️ <b>cold</b> on the SSD

---

A fork of [Strata](https://github.com/Niko1221/Strata) by Niko1221 and contributors (MIT). Strata keeps Qwen's experts in
RAM and reads from the SSD when RAM is short; its docs call that path much slower. This fork works on that path: it
spreads the experts over the card, RAM and the SSD and guesses ahead which ones to read, so the 78 GB IQ3_S runs on 30 GB
of RAM at 50-70 tokens/s.

## Can Qwen3.8-Flash-Next run on an RTX 3060 12 GB with low RAM?

**Yes.** On one RTX 3060 12 GB with 30 GB of RAM and an NVMe SSD, this fork runs Qwen3.8-Flash-Next (Qwen 3.8 Flash Next,
125B) as the 78 GB IQ3_S at **50-70 tokens/s** (131K context; 262K fits). The experts that do not fit in RAM are read from
the SSD, and a look-ahead guesses ahead which ones. Measured on one PC: see [How fast](#how-fast) and the "Not tested"
list at the bottom.

**How much RAM does it need?** This fork was measured on 30 GB. Strata's setup recommends 64 GB for IQ3_S and says that
with less RAM it reads the rest from the SSD, much slower.

**Does it need a cloud service?**…
