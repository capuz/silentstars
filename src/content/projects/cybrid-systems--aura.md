---
repo: "cybrid-systems/aura"
name: "aura"
description: "AI-native Lisp with auto-mutating ASTs and incremental compilation — enabling autonomous code generation, editing, and evolution."
readmeQualityOk: true
url: "https://github.com/cybrid-systems/aura"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 6
forks: 2
openIssues: 3
closedIssues: 4937
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-01-01T14:32:42Z"
lastCommitAt: "2026-11-09T11:59:21Z"
lastReleaseAt: "2026-11-09T04:19:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 83
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a7d97c5aa30e28c68c81fa8a82b2a218caf3e06e39c75bb3f06902bb19edd31b/cybrid-systems/aura"
---

# Aura

AI-native Lisp — 代码自己进化。

The API is not stable. These commands install the rolling nightly built from `main`.

## Install

Linux, x86_64 or arm64:

```sh
curl -fsSL https://raw.githubusercontent.com/cybrid-systems/aura/main/install.sh | sh
```

Put `~/.local/bin` on `PATH`. Nightly is replaced on each push to `main`. To reproduce a run, pin `ghcr.io/cybrid-systems/aura:<sha9>` or the image digest. More detail: [docs/install.md](https://github.com/cybrid-systems/aura/blob/HEAD/docs/install.md).

```sh
docker run --rm -v "$PWD:/w" -w /w ghcr.io/cybrid-systems/aura:nightly main.aura
```

Supported hosts are Ubuntu 24.04, Debian 12, Rocky Linux 9, and openEuler 24.03 LTS SP4, each on x86_64 and arm64. macOS, Windows, and other Linux distributions are not supported.

## Quick start

```sh
aura demo
```

One definition, four fixed candidates, and the live source after each KEEP or
ROLLBACK:

```
1 ROLLBACK  (define (guess) 10)   live (define (guess) 0)
2 KEEP      (define (guess) 7)    live (define (guess) 7)
3 ROLLBACK  (define (guess) 2)    live (define (guess) 7)
4 KEEP      (define (guess) 42)   live (define (guess) 42)
(guess) => 42
```

The same program is a project you…
