---
repo: "dancinlab/hexa-lang"
name: "hexa-lang"
description: "💎 Native compiler with atlas-bound theorems — 8 strict-lint stages · citation-enforced · no LLVM · self-hosting native fixpoint"
readmeQualityOk: true
url: "https://github.com/dancinlab/hexa-lang"
language: "Assembly"
languages: ["Assembly", "Python"]
languagePcts: [29, 24]
topics: ["compiler", "n6", "number-theory", "perfect-number", "programming-language", "hexa-family", "hexa-lang", "native-compiler", "strict-lint", "citation-enforced"]
stars: 224
forks: 121
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2026-04-01T01:38:57Z"
lastCommitAt: "2026-07-13T06:36:37Z"
lastReleaseAt: "2026-06-18T10:40:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 32
maintainers: ["dancinlife"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cd81d3ceccd779510f4456e270e3eca97b141899edcd82755914e5b7fb5905b/dancinlab/hexa-lang"
---

</p>

<h1 align="center">💎 hexa-lang</h1>

</p>

---

`hexa-lang` is a native compiler that carries its own theorem 사전 (dictionary) inside the binary. **No LLVM anywhere** — the self-host backend lowers source through its own IR to native objects (a byte-identical `gen3 ≡ gen4` fixpoint) and links them with its own `hexa_ld`; `hexa run`/`hexa build` ship clang-free on the promoted toolchain. (Two C pieces remain by engineering necessity, not as unfinished debt: a C-transpile fallback delegate for some flows, and a libc/syscall runtime floor generated from `.hexa` emitters — the latter is **reducible**, not permanent: a 2026-06-16 falsification showed ~50% of the runtime is already portable to `.hexa` (a `.hexa` `fnv1a` is byte-identical to the C one) and zero-`.c` is an open, attackable campaign — `runtime_hi_gen.c` is now eliminated on **both** arm64-darwin and x86_64-linux via native `.s` seeds — the x86_64 backend was reworked (#3462) to carry the full HexaVal `{tag,payload}` pair like arm64 (its old "raw-int model" had dropped the tag, silently breaking native string functions; caught by a C-differential harness, fixed at the root, confirmed by all CI faithful +…
