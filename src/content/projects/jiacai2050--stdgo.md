---
repo: "jiacai2050/stdgo"
name: "stdgo"
description: "A Go-like standard library written in pure Zig"
readmeQualityOk: true
url: "https://github.com/jiacai2050/stdgo"
homepage: "https://jiacai2050.github.io/stdgo/"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-07T06:01:00Z"
lastCommitAt: "2026-11-21T11:35:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 33
maintainers: ["jiacai2050", "jinzhongjia"]
openGraphImageUrl: "https://opengraph.githubassets.com/2613de946c5a24e86aa693e53fec55da0c2aab4608653cc0958286c45531e92f/jiacai2050/stdgo"
fundingLinks: ["CUSTOM:https://liujiacai.net/donate/"]
---

# stdgo

Bring Go standard library ergonomics, unified streaming abstractions (`io.Reader` / `io.Writer`), and high-utility packages to **Zig 0.17** — with zero hidden global state, explicit dependency injection, and no C dependencies.

- 📖 **API Documentation**: [https://jiacai2050.github.io/stdgo/](https://jiacai2050.github.io/stdgo/)
- 🗺️ **Roadmap & Status**: [roadmap.md](https://github.com/jiacai2050/stdgo/blob/HEAD/roadmap.md)

---

## Quick Start

### 1. Add Dependency

Add `stdgo` to your project using `zig fetch`:

```bash
zig fetch --save git+https://github.com/jiacai2050/stdgo.git
```

In your `build.zig`:

```zig
const stdgo = b.dependency("stdgo", .{
    .target = target,
    .optimize = optimize,
});
exe.root_module.addImport("stdgo", stdgo.module("stdgo"));
```

---
