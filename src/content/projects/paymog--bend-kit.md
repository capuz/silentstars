---
repo: "paymog/bend-kit"
name: "bend-kit"
description: "A general-purpose library for Bend 2. Each package is proved against its own laws."
readmeQualityOk: true
url: "https://github.com/paymog/bend-kit"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["bend-lang"]
stars: 17
forks: 4
openIssues: 66
closedIssues: 452
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-09-22T17:44:26Z"
lastCommitAt: "2026-11-23T10:10:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 46
maintainers: ["paymog", "tryingET", "jotuel"]
openGraphImageUrl: "https://opengraph.githubassets.com/da14400be1284eda3032e68ed7dc98b93f64cb953517c2a9d6bad1a890089af7/paymog/bend-kit"
discussionCount: 0
---

# bend-kit

Packages for Bend 2 that Base does not include. Each package has its own laws and its own hub version. Networking came first, so `http` and the packages under it are the most complete. [ROADMAP.md](https://github.com/paymog/bend-kit/blob/HEAD/ROADMAP.md) is the backlog.

This project was called bend-net. The old hub names, `bend-net-*`, still resolve. They get no new versions.

Licensed under Apache-2.0. See [LICENSE](https://github.com/paymog/bend-kit/blob/HEAD/LICENSE). [Contributing](https://github.com/paymog/bend-kit/blob/HEAD/CONTRIBUTING.md). [Security](https://github.com/paymog/bend-kit/blob/HEAD/SECURITY.md).

## Install

You need [Bend 2.0.38 or newer](https://bend-lang.com/install.sh) and [Bun 1.4.2](https://bun.sh/docs/installation). macOS or Linux, including WSL. Windows is not supported.

```bend
import Base
import bend-kit-bytes@0.3.3.1/bytes.bend as Bytes

def show(r: Bytes.Bytes & U32) -> IO(Unit):
  (b, n) = r
  IO.print(U32.show(n) ++ " " ++ Bytes.to_string(b))

def main() -> IO(Unit):
  show(Bytes.length(Bytes.from_string("hi")))
```
