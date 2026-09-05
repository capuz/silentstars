---
repo: "arunsoman/nirdosha"
name: "nirdosha"
description: "A systems language designed so an AI agent can safely write and run backend code: proven no GC/races/overflow, GBNF-constrained generation, structured diagnostics, OS-process sandboxing."
readmeQualityOk: true
url: "https://github.com/arunsoman/nirdosha"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["compiler", "dsl", "llm", "llvm", "programming-language", "rust", "systems-programming", "type-safety", "agentic-ai", "ai-agents"]
stars: 19
forks: 0
openIssues: 7
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 3
createdAt: "2026-08-22T17:26:18Z"
lastCommitAt: "2026-09-05T07:47:21Z"
lastReleaseAt: "2026-08-25T07:21:35Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 38
maintainers: ["arunsoman", "maheshmindlabs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1343023193/90a8abb5-8759-4fbf-a25c-8b1624d92dde"
fundingLinks: ["GITHUB:https://github.com/arunsoman"]
discussionCount: 3
---

# Nirdosha — निर्दोष ("without fault")

> **A systems language designed for LLMs to write, with a grammar so
> constrained the model can't emit invalid syntax.** No garbage collector,
> no data races, no deadlocks, no integer/buffer overflow — those aren't
> the pitch, they're the proof that a language built for an AI agent to
> write unsupervised can also be trusted to run.

Status: a real, runnable Rust compiler (`crates/compiler/`) under
active development — many safety properties are *proven* today, and
where one is still *aspirational* the [wiki](https://github.com/arunsoman/nirdosha/wiki/Honest-Scope-and-Roadmap)
says so plainly. Source files use the `.nir` extension.

```nirdosha
fn secret(n: i64) -> i64 requires(role: "admin") {
    return n + 1
}

fn work(b: box i64) -> i64 {
    return *b
}

fn main() {
    print("hello, Nirdosha")
    let h: box i64 = box 21
    let t: thread i64 = spawn work(h)
    print(join t)
}
```

```sh
cd crates/compiler && cargo run -- ../../examples/hello_above_fold.nir
# hello, Nirdosha
# 21
```

`box` is single-owner — `spawn` moves `h` into the thread, so `main` can
never touch it again; that's checked at compile time, not by convention.…
