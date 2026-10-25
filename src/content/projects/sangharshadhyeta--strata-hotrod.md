---
repo: "sangharshadhyeta/Strata-HotRod"
name: "Strata-HotRod"
description: "Qwen3.8-Flash-Next on Consumer Hardware — Strata, Hot-Rodded."
readmeQualityOk: true
url: "https://github.com/sangharshadhyeta/Strata-HotRod"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [62, 22]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-18T10:34:03Z"
lastCommitAt: "2026-10-25T02:46:11Z"
lastReleaseAt: "2026-10-25T02:42:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["sangharshadhyeta", "sumitsodhi88"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6cf6409a5a1611c9219dab899bd64c7e1fc3f4f2d0fb145765a651152f7667a/sangharshadhyeta/Strata-HotRod"
---

Qwen3.8-Flash-Next on one RTX 3060 with 30 GB of RAM. Nothing leaves your PC.</p>

---

A fork of [Strata](https://github.com/Niko1221/Strata) by Niko1221 and contributors (MIT). Strata runs a model that normally
needs a server by keeping the most-used parts on the graphics card and streaming the rest from the SSD. This fork makes
that path faster and keeps answers correct while doing it.

> **Tested on one machine, with one model.** Other cards, AMD, Windows, macOS and other model sizes may work in upstream
> Strata; we have not run them, so we do not describe them here.

## How fast

Measured on the machine below; a token is about ¾ of a word. Every answer in these runs was read and checked.

The first message of a chat is the slow part: it waits on the SSD for the model's experts. Follow-ups reuse what was
already read. A 262K context costs about 8% against 131K, because more of the attention's memory streams from RAM.

Strata replaces some of a token's experts with similar ones already on the card to stay fast. In a small test (50 maths
questions, 30 coding questions, answers read by hand): 47 of 50 and 30 of 30 correct, against 48 of 50 and 30 of 30 with
nothing replaced. A…
