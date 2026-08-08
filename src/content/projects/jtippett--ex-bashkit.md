---
repo: "jtippett/ex_bashkit"
name: "ex_bashkit"
description: "Elixir port of bashkit, a rust-based virtual bash interpreter with a virtual file system."
readmeQualityOk: true
url: "https://github.com/jtippett/ex_bashkit"
language: "Elixir"
languages: ["Elixir", "Rust"]
languagePcts: [77, 23]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-06-19T12:43:19Z"
lastCommitAt: "2026-08-08T04:34:49Z"
lastReleaseAt: "2026-07-15T06:22:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 42
maintainers: ["jtippett"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6c3ec8e39e28a3006a5a6c4d7ebafdd13cff512eb63e543886a9057056671bd/jtippett/ex_bashkit"
---

# ExBashkit

Elixir NIF wrapper for [**bashkit**](https://github.com/everruns/bashkit) — a
sandboxed, virtual bash interpreter written in Rust.

Run bash scripts safely from Elixir: ~150 builtins (`echo`, `grep`, `sed`,
`awk`, `jq`, `yq`, `cat`, `find`, `sort`, …) are **reimplemented in Rust**, file I/O
hits an **in-memory virtual filesystem**, and there is **no `fork`/`exec`**
escape hatch. Nothing touches the host OS unless you explicitly grant it. That
makes it safe to run *untrusted* scripts — for example, bash written by an LLM
agent.

> **Status.** The full capability set is implemented and tested: stateless
> `ExBashkit.exec/1`, persistent `ExBashkit.Session`s, an in-memory virtual
> filesystem with host mounts, resource limits, a network allowlist,
> Elixir-defined custom builtins, Elixir-backed virtual filesystems,
> snapshot/resume, and an optional sandboxed `python` builtin. It's a young
> `0.1.x` release, so expect the API to still evolve.

## Installation

```elixir
def deps do
  [
    {:ex_bashkit, "~> 0.1"}
  ]
end
```

A precompiled NIF is downloaded for your platform — no Rust toolchain required
to *use* the library. Supported targets:…
