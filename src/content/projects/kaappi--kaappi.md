---
repo: "kaappi/kaappi"
name: "kaappi"
description: "Kaappi: A Scheme Programming Language Implementation Written in Zig"
readmeQualityOk: true
url: "https://github.com/kaappi/kaappi"
homepage: "https://kaappi-lang.org"
language: "Zig"
languages: ["Zig", "Scheme"]
languagePcts: [53, 40]
stars: 12
forks: 0
openIssues: 2
closedIssues: 911
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-15T14:45:30Z"
lastCommitAt: "2026-07-31T06:20:24Z"
lastReleaseAt: "2026-07-18T02:38:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 59
maintainers: ["baijum", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/94f394d5b2b92329cc585d88ba54fd810b61ddf8e28b6d2a87611f991dae984e/kaappi/kaappi"
discussionCount: 5
---

</p>

<h1 align="center">Kaappi</h1>

  A complete <strong>R7RS-small</strong> Scheme implementation, written in <strong>Zig</strong>.
</p>

</p>

</p>

---

Kaappi implements every identifier from [R7RS Appendix A](https://small.r7rs.org/)
— 689 built-in procedures, 32 syntax forms, and all 14 standard libraries — plus
178 SRFIs, a C FFI, OS threads and fibers, an LLVM native-code backend, a package
manager, and a stepping debugger. The runtime is a register-based bytecode VM
with generational garbage collection and stack-copying first-class continuations.

The name is Malayalam and Tamil for *coffee* — see the
[FAQ](https://kaappi-lang.org/faq/) for the story.

> **Note:** Kaappi was built with the assistance of AI (Claude by Anthropic).

## Try it

No install needed — run Scheme in your browser at the
[**playground**](https://kaappi-lang.org/playground/), or take the guided
12-lesson [**tour**](https://kaappi-lang.org/tour/).

## Installation

### Install script (macOS, Linux, FreeBSD, OpenBSD, NetBSD)

```bash
curl -fsSL https://kaappi-lang.org/install.sh | bash
```

This installs `kaappi` and `thottam` (the package manager) to `~/.local/bin/`
and the standard libraries to…
