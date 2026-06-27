---
repo: "querygraph/typesec"
name: "typesec"
description: "An Agentic AI security platform based on Rust types, where insecure agents do not compile."
url: "https://github.com/querygraph/typesec"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-06-07T00:46:45Z"
lastCommitAt: "2026-06-27T06:22:58Z"
lastReleaseAt: "2026-06-26T20:26:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 65
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/23a9858a6102840762b0aec6dbad2b37906c0fda76ed3677c19568aaecda4306/querygraph/typesec"
---

# typesec

**Agentic AI security using Rust's type system.**

Typesec was inspired by David Andrzejewski's Scale By the Bay talk,
["Privacy aware data science in Scala with monads and type level programming"](https://www.youtube.com/watch?v=hoVIqh1qjXM),
which connected data-science privacy work to typed information-flow control.
That talk traces part of its implementation lineage to the Haskell
[SecLib](https://hackage.haskell.org/package/seclib-0.7) security-container
library; we keep a local [cleaned transcript](docs/david-andrzejewski-scale-by-the-bay-2018-transcript.md)
as design context for this repository.

Policies are encoded in types. Violations are compile errors.

---

## The Core Idea

Most security systems check permissions at runtime:

```rust
// ❌ Guard-based — the check can be forgotten, skipped, or bypassed.
if acl.check(user, "write", resource) {
    resource.write(data);
}
```

`typesec` encodes permissions as *types*. If your code doesn't hold a
`Capability<CanWrite, Report>`, the write method doesn't exist in your API:

```rust
// ✅ Type-level — the capability IS the proof. No check can be skipped.
fn write(cap: Capability<CanWrite, Report>, report: &Report)…
