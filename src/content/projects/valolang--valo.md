---
repo: "valolang/valo"
name: "valo"
description: "A successor language to VB.NET, with a standalone runtime written in Rust. (NOTE: Valo Language is experimental; see README)"
readmeQualityOk: true
url: "https://github.com/valolang/valo"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["language", "programming-language", "runtime", "valo", "valolang", "experimental", "experimental-language", "vba", "vb-net"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-05-16T22:08:38Z"
lastCommitAt: "2026-08-30T00:43:33Z"
lastReleaseAt: "2026-05-25T01:07:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 35
maintainers: ["uesleibros"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b7b74b29abe9e3885464e2096d52541fc9ab022e2597fe862ded1267c8ef445/valolang/valo"
---

# The Valo Programming Language

  A successor language to VB.NET, with a standalone runtime written in Rust

</div>

</p>

  </a>
  </a>
  </a>
  </a>
</p>

> [!NOTE]
> Valo is experimental and not production-ready yet. APIs, syntax, runtime behavior, and compatibility details may change quickly.

## What is Valo?

**Valo** is a programming language that takes the syntax of VB.NET and gives it a
standalone runtime, written in Rust, that runs anywhere.

The design question behind Valo is narrow on purpose:

> What would VB.NET look like if it were not tied to .NET?

VB.NET is a genuinely good language. It is readable, explicit, and productive,
with a type system, generics, properties, events, and interfaces that hold up
well. What it lacks is a life outside its runtime: no small standalone binaries,
no practical embedding, no direct native interop that avoids marshalling layers,
and no path to run where .NET does not.

Valo follows the VB.NET language as its reference, then adds what only makes
sense once you own the runtime:

- native interop as a language feature, through `Declare`, `PtrSafe`, `LongPtr`,
  `AddressOf`, and callbacks
- a single self-contained binary with no…
