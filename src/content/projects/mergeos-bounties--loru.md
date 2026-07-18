---
repo: "mergeos-bounties/Loru"
name: "Loru"
description: "Loru: sign-to-text and sign-to-voice training toolkit"
readmeQualityOk: true
url: "https://github.com/mergeos-bounties/Loru"
homepage: "https://mergeos.shop"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 32]
topics: ["accessibility", "asl", "bounty", "mergeos", "ml", "python", "sign-language"]
stars: 5
forks: 16
openIssues: 230
closedIssues: 10
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-07-12T12:03:45Z"
lastCommitAt: "2026-07-18T05:45:46Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 71
undervaluedScore: 59
maintainers: ["TUPM96", "Wang4F", "CloneBro"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4686d6e34a746bd1b8aa888dbdddc69f3928d3368633d03d7eacf408289a2cc/mergeos-bounties/Loru"
---

# Loru

**Loru** is an offline **sign language** toolkit: landmark sequences → gloss/text, and sign → **voice (WAV)** — demos and train loops without a GPU for the smoke path.

**Product:** [mergeos-bounties/Loru](https://github.com/mergeos-bounties/Loru)

---

## Table of contents

- [Highlights](#highlights)
- [Desktop GUI (Qt)](#desktop-gui-qt)
- [Screenshots](#screenshots)
- [Quick start](#quick-start)
- [CLI reference](#cli-reference)
- [Data & pipeline](#data--pipeline)
- [Diagrams](#diagrams)
- [Repository layout](#repository-layout)
- [Development](#development)
- [MergeOS bounties](#mergeos-bounties)
- [License](#license)

---

## Highlights

| Mode | Description |
| --- | --- |
| **Sign → text** | Landmark JSON sequences → gloss / sentence |
| **Sign → voice** | Recognition + TTS-style WAV export |
| **Offline demo** | Samples, toy train, infer `hello` end-to-end |
| **Desktop GUI** | Modern **PySide6** app (`loru-gui`) |
| **Gloss vocab** | Default gloss set for demos |
| **Serve** | Optional FastAPI for integrations |

---

## Desktop GUI (Qt)

Modern dark **PySide6** demo shell — full demo, samples, infer, train, gloss vocab.

```powershell
pip install -e ".[gui]"…
