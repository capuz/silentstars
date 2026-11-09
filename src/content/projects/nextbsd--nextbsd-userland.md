---
repo: "nextbsd/nextbsd-userland"
name: "nextbsd-userland"
description: "Cross-built Darwin system layer (Mach/launchd/configd/CoreFoundation/IOKit) for NextBSD"
readmeQualityOk: true
url: "https://github.com/nextbsd/nextbsd-userland"
language: "C"
languages: ["C"]
languagePcts: [92]
stars: 9
forks: 5
openIssues: 28
closedIssues: 215
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-21T22:52:56Z"
lastCommitAt: "2026-11-09T00:54:17Z"
lastReleaseAt: "2026-06-23T21:15:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 58
maintainers: ["pkgdemon"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bb27736aa55d520bae477f2175e37ac9c2c070f8ab5411e82a2501b31c52a2c/nextbsd/nextbsd-userland"
---

# nextbsd-userland

Cross-built **Darwin system layer** for NextBSD — the Mach / launchd / configd /
CoreFoundation / IOKit stack and its daemons — built on an Ubuntu host with the
`nextbsd-toolchain` clang cross-compiler, exactly like `nextbsd-kernel`
and `nextbsd-freebsd-compat`. Publishes a rolling `continuous` userland artifact
that the `nextbsd` ISO assembler ingests.

> **Status: CI workflow scaffold.** This commit is the workflow harness only —
> container + cross sysroot + buildenv setup, no build/publish. The vendored
> Darwin sources (Tier 0–2), the `build-userland.sh` driver, the cmake cross
> toolchains, the build/pack/publish steps, and the license all land in a
> follow-up **code-drop PR**, reviewed in one pass.

## Scope

**In (Tiers 0–2 — the system layer that has no FreeBSD equivalent):**

| Tier | Components |
|------|-----------|
| 0 — host tool | `migcom` + `mig` (arch-neutral MIG codegen, built for the runner) |
| 1 — foundation libs | `libmach`→`libsystem_kernel` → `libdispatch` *(cmake)* → `libxpc` → `liblaunch` → `swift-foundation-icu` *(cmake)* → `libCoreFoundation` |
| 2 — daemons/services | `launchd`+`launchctl` → `configd` → `libSystemConfiguration` →…
