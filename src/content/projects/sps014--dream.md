---
repo: "sps014/dream"
name: "dream"
description: "A blazing fast, statically typed cross platform programming language that for also works on web.  It makes writing webgpu code fun again."
readmeQualityOk: true
url: "https://github.com/sps014/dream"
homepage: "https://sps014.github.io/dream/"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [49, 45]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2021-04-27T16:21:30Z"
lastCommitAt: "2026-09-03T08:13:10Z"
lastReleaseAt: "2026-09-01T18:35:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 90
undervaluedScore: 72
maintainers: ["sps014"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeff724f66a5289bff4828419bd8dccec9938b24d784dfc2c5c261a9dd937269/sps014/dream"
---

# Dream

Dream is a blazing fast, typed programming language with familiar `fun` / `let` syntax. You write one program; it compiles to WebAssembly and can run on your computer, in the browser, or in Node. Memory is automatic reference counting (ARC) — no manual `free`. 

**[Docs](https://sps014.github.io/dream/)** · [Quickstart](https://sps014.github.io/dream/learn/quickstart/) · [Language tour](https://sps014.github.io/dream/learn/tour/) · [Cookbook](https://sps014.github.io/dream/cookbook/)

## 5-minute quickstart

**macOS / Linux:**

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sps014.github.io/dream/install.sh | sh
```

**Windows (PowerShell):**

```powershell
irm https://sps014.github.io/dream/install.ps1 | iex
```

Open a new terminal, then:

```bash
dreamer init hello && cd hello && dreamer run
```

That creates a project and runs `src/main.dream`:

```kotlin
import system;

fun main() {
    System.println("Hello, world!");
}
```

```
Hello, world!
```

`import system;` loads console I/O so `System.println` works. Full walkthrough: [Quickstart](https://sps014.github.io/dream/learn/quickstart/).

## Language tour

### Variables

```kotlin
import system;

fun main() {…
