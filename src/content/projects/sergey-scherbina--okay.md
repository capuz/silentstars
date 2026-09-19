---
repo: "sergey-scherbina/okay"
name: "okay"
description: "Okay! Extensible effects for Scala 3"
readmeQualityOk: true
url: "https://github.com/sergey-scherbina/okay"
language: "Scala"
languages: ["Scala"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-07-17T22:30:03Z"
lastCommitAt: "2026-09-19T08:13:32Z"
lastReleaseAt: "2026-09-14T13:43:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 72
maintainers: ["sergey-scherbina"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0d270a260d47a62b5190ff0b0afb2b8a40aeb627a800333462d1419a76a93e9/sergey-scherbina/okay"
---

# Okay! Extensible effects for Scala 3.

There's one thing nearly every effect library does the same way, and I think it's the wrong way.

They hand you one big type: IO, Task, ZIO. Everything is already baked into it — concurrency, errors, environment, cancellation. Want an effect of your own? Either stack monad transformers, or wait for the maintainers to add it to the core.

Okay is built the other way round. An effect is just a set of operations. A handler is an interpretation of them. A program declares in its type what it needs, and knows nothing about how that need will be met.

Here is a real line from the core:

    type Source[W] = Unit ! (Writer % W + Async)

Read the type out loud: a program that tells W and awaits. That's an asynchronous stream — and it is not a built-in type. It's two ordinary effects, Writer and Async, added together with +, behind a type alias. Every streaming seam in the library speaks it: HTTP response bodies, WebSocket frames, LLM tokens, a chunked source spread across a cluster.

Because the type says only that, and nothing about who provides it, a scripted implementation in a test and a live one over the network are the same type. Nothing…
