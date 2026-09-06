---
repo: "dbrattli/Fable.Giraffe"
name: "Fable.Giraffe"
description: "Giraffe for Fable (Python, BEAM, and Node)"
readmeQualityOk: true
url: "https://github.com/dbrattli/Fable.Giraffe"
language: "F#"
languages: ["F#"]
languagePcts: [97]
topics: ["beam", "erlang", "fable", "python", "cowboy", "expressjs", "nodejs", "uvcorn"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2022-09-07T15:40:04Z"
lastCommitAt: "2026-09-06T08:04:32Z"
lastReleaseAt: "2022-10-06T20:11:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 63
maintainers: ["dbrattli", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/533830833/55de9ad9-063e-4c2e-8d29-3d14777b80ac"
---

# Fable.Giraffe

Fable.Giraffe is a port of the
[Giraffe](https://github.com/giraffe-fsharp/Giraffe) F# web framework to
[Fable](https://github.com/fable-compiler/Fable/). Write your web application
once in F# and run it on three runtimes:

| Target | Runtime | Server |
|---|---|---|
| Python | ASGI | uvicorn (Starlette) |
| JavaScript | Node.js | built-in `node:http`, or mounted as `connect`/`express` middleware |
| Erlang/BEAM | OTP | Cowboy |

Fable.Giraffe's major version tracks the Fable compiler it targets: the 5.x
line is built with and requires Fable 5. The major is therefore *not* a SemVer
signal — a breaking change can land in a minor release, and will be listed under
**Breaking changes** in [CHANGELOG.md](https://github.com/dbrattli/Fable.Giraffe/blob/HEAD/CHANGELOG.md). Read it before upgrading.

Beyond the Giraffe handler API, it ships an opt-in
[endpoint layer](#openapi) that generates an **OpenAPI 3.1** document and serves
interactive docs, [typed JSON](#json-and-validation) with FastAPI-style
validation errors, and [remoting](#remoting) — all shared across the three
targets.

## Install

There is one NuGet package per target — add the one for the runtime you are…
