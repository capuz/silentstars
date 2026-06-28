---
repo: "jasonaaronwilson/omni-c"
name: "omni-c"
description: "A C like programming language strongly resembling C with modern conveniences"
url: "https://github.com/jasonaaronwilson/omni-c"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-04T23:47:40Z"
lastCommitAt: "2026-06-28T01:45:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 69
maintainers: ["jasonaaronwilson"]
openGraphImageUrl: "https://opengraph.githubassets.com/950853248eba61e51525f40c64a07ad8104acbfd7b2b90f094f5ab44ffc5c440/jasonaaronwilson/omni-c"
---

# Omni-C

## The Pitch

1. Fast - omni-c is fundamentally C and compiles to C and can call C
   libraries (or even custom assembly). All of the hard work of the
   clang, gcc, msvc tool-chains are thus available when you choose one
   of those as your backend. You could also use Fil-C or TrapC for
   even more memory safety or even "zig cc" if you want to integrate
   with zig.

2. Familiar - omni-c should be very familar to anyone that knows C. The
   code you write can look just like it would in C unless you want to
   use more advanced features. For generics, it will look a lot like
   C++ (and Java) but the semantics are somewhat simpler. This is a
   less radical departure than Rust or Go which both have good ideas
   that got incorporated into omni-c.

3. Fun - unlike plain C, certain things that should be trivial, like
   moving a function from one file to another, is actually trivial. I
   never found it fun to worry about header files or order of
   declarations or how to write the type of a function pointer with
   it's strange syntax, so I fixed it. For folks finding C++ or Java
   too complex because of OOP but who still like the "subject object
   ..." syntax of…
