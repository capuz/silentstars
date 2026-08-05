---
repo: "banderzhm/cnetmod"
name: "cnetmod"
description: "Modern C++23 Modules asynchronous network library, cross-platform, stackless coroutine"
readmeQualityOk: true
url: "https://github.com/banderzhm/cnetmod"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["asynchronous-io", "coroutine", "coroutines", "cpp23", "cpp23-import-std", "cpp23-library", "io-uring", "io-uring-cpp", "network-library"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-02-11T06:49:05Z"
lastCommitAt: "2026-08-05T06:03:28Z"
lastReleaseAt: "2026-07-28T07:33:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 54
maintainers: ["banderzhm"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbde2a1f5a5298e4cda96c2972d8c745fc8beb88398fdecb55032675b2610ca2/banderzhm/cnetmod"
discussionCount: 0
---

# cnetmod

Production-oriented C++23 asynchronous networking infrastructure built on native coroutines and platform-native I/O backends.

> In the age of AI-assisted programming, architectural maturity has leveled the differences in development difficulty; performance and efficiency are the only decisive benchmarks.

English | [简体中文](https://github.com/banderzhm/cnetmod/blob/HEAD/README_zh.md)

## Platform Support

| Platform | I/O Engine | Compiler | Status |
|----------|-----------|----------|--------|
| Windows | IOCP | Latest Visual Studio 2026 (MSVC) | ✅ |
| Linux | io_uring + epoll | clang-21 + libc++ | ✅ |
| macOS | kqueue | clang-21 + libc++ | ✅ |

### AI Development Skills

The [`skill/`](https://github.com/banderzhm/cnetmod/blob/HEAD/skill/) directory contains the project-specific instructions for AI-assisted development. AI agents should read [`skill/SKILL.md`](https://github.com/banderzhm/cnetmod/blob/HEAD/skill/SKILL.md) first, then consult the topic-specific guidance under `skill/core`, `skill/coro`, `skill/database`, `skill/http`, `skill/infra`, `skill/protocols`, and `skill/security` as needed.

### Engineering Evidence

- **Architecture**: C++23 module interfaces…
