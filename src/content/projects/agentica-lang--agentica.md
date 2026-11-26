---
repo: "agentica-lang/agentica"
name: "agentica"
description: "Language for ai agents"
readmeQualityOk: true
url: "https://github.com/agentica-lang/agentica"
homepage: "https://www.agentica-lang.com"
language: "C"
languages: ["C", "Python", "Ruby"]
languagePcts: [33, 33, 33]
stars: 5
forks: 0
openIssues: 51
closedIssues: 489
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-01T16:13:06Z"
lastCommitAt: "2026-11-26T13:03:14Z"
lastReleaseAt: "2026-10-21T21:01:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 66
maintainers: ["sonic182"]
openGraphImageUrl: "https://opengraph.githubassets.com/624f87235cf3b2496e48154fcdea40da8164fa48e91b238285c6cbf0329378d6/agentica-lang/agentica"
---

# Agentica

Agentica is Ruby with static types: Ruby-like syntax, every program checked
before it runs, and values that never change in place. Tasks run in parallel on
several cores, and it comes with HTTP, TLS and WebSockets, packages and C native
modules. A front end written in Agentica compiles each program to bytecode, and
a C VM runs it. Both are one binary, `agentica`.

```agentica
def main() -> Void
  for text in ["4", "8", "x"]
    case text.to_i
      ok(n) -> puts("#{text} doubled is #{n * 2}")
      error(_) -> puts("#{text} is not a number")
    end
  end
end
```

```text
4 doubled is 8
8 doubled is 16
x is not a number
```

Save it as `hello.agc` and run it with `agentica hello.agc`.

**[Read the documentation →](https://www.agentica-lang.com/agentica/)**
