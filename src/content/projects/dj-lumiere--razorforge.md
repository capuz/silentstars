---
repo: "dj-lumiere/RazorForge"
name: "RazorForge"
description: "A natively compiled language that puts precision first: single ownership without a borrow checker or GC, failures that crash loudly unless you choose to recover, and correctly rounded numerics. Its sibling language Suflae lives in dj-lumiere/Suflae."
readmeQualityOk: true
url: "https://github.com/dj-lumiere/RazorForge"
language: "C#"
languages: ["C#"]
languagePcts: [91]
topics: ["compiler", "correctly-rounded", "csharp", "decimal-floating-point", "dotnet", "error-handling", "jit", "language-design", "llvm", "multi-paradigm"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-09-01T04:31:40Z"
lastCommitAt: "2026-11-03T09:56:44Z"
lastReleaseAt: "2026-08-28T11:30:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 70
maintainers: ["dj-lumiere"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1048190473/f6a4c365-d7d6-414f-8b3d-01933c6ec27f"
---

RazorForge (`.rf`) is a natively compiled language built around precision: in what a program means,
in how it fails, and in the numbers it computes. It is meant for application work where you want
native code and predictable memory behavior: command-line tools, services, games, and data and
numeric tools. It is not a kernel or bare-metal language: programs link against a runtime library,
and there is no freestanding mode.

```razorforge
import IO/Console

entity Resource
    tag: S64

routine consume(r: Resource)
    show(f"consuming tag={r.tag}")
    return
    # r is destroyed here, exactly once

routine parse_digit(c: Char) -> S64
    if "0123456789".lacks(c)
        throw InvalidDigitError()   # the failure carries the error that says why
    return c.to[Text]().to[S64]()

routine start()
    var b = Resource(tag: 7)
    consume(r: steal b)             # `b` moves into the call, using it afterwards is a build error

    var d = try parse_digit(c: 'x') # `try` recovers the failure as S64? (Optional[S64])
    when d
        is None => show("not a digit")
        else as n => show(f"digit {n}")

    var level: U8 = 200
    show(level +^ 100)              # clamping add: 255…
