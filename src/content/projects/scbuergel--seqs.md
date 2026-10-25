---
repo: "SCBuergel/SEQS"
name: "SEQS"
description: "Seb's QubesOS scripts"
readmeQualityOk: true
url: "https://github.com/SCBuergel/SEQS"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [63, 23]
stars: 6
forks: 1
openIssues: 9
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-06-12T01:48:21Z"
lastCommitAt: "2026-10-25T09:00:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 64
maintainers: ["SCBuergel"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d84a4ea9269d665ca99c3750c85afa94569e0b8bb06895ae692041db821e8e4/SCBuergel/SEQS"
---

# Seb's QubesOS Scripts (SEQS)

[SEQS](https://github.com/SCBuergel/SEQS) turns a
[Qubes OS](https://www.qubes-os.org/) installation into a configurable set of
purpose-specific security domains for browsing, chat, wallets, development,
offline storage, and controlled data transfer. It creates a separate `Z-*`
TemplateVM and `A-*` AppVM for each selected workload, keeping unrelated tools
and data out of the same qube while making the resulting layout reproducible
from one reviewed configuration.

> **Warning:** SEQS installs [Qubes Salt](https://doc.qubes-os.org/en/latest/user/advanced-topics/salt.html)
> code that runs as root in dom0 (the trusted Qubes administrative domain). A
> malicious checkout can compromise the whole machine. Install only a commit
> published through an independent channel by a reviewer you trust. The
> commit-bound export prevents working-tree drift, but dom0 does not verify Git:
> the repository qube remains trusted. See [TRUST.md](https://github.com/SCBuergel/SEQS/blob/HEAD/TRUST.md).

## Install (for users)

1. [Install and verify Qubes OS](https://github.com/SCBuergel/SEQS/blob/HEAD/docs/install-qubes.md) with the
   `debian-13-xfce` template, update…
