---
repo: "hale-lang/hale"
name: "hale"
description: "The Hale programming language: general-purpose, native and memory-safe, from a five-line script to a dynamic distributed system. Less language, more compiler."
readmeQualityOk: true
url: "https://github.com/hale-lang/hale"
homepage: "https://hale-lang.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["programming-language", "systems-programming", "concurrency", "formal-verification", "llvm", "low-latency", "message-passing", "model-checking", "no-gc", "wasm"]
stars: 41
forks: 2
openIssues: 22
closedIssues: 335
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-15T02:57:23Z"
lastCommitAt: "2026-10-28T09:26:26Z"
lastReleaseAt: "2026-07-17T16:34:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["rileyr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1239367040/b6a592c8-ff60-4ca7-9238-4ef147f25193"
discussionCount: 0
---

One language from a five-line script to a dynamic distributed system.

Hale is a compiled, general-purpose language. Every piece of state has one
owner, and the parts of a program talk only over declared, typed message
channels. That shape lets the compiler check a program's architecture the
way it checks its types. It runs natively with no garbage collector and no
borrow checker, and its concurrency has no locks and no data races.

You know the feeling: you describe a service out loud, *"a chat room takes
each message posted to it and relays it out to everyone in the room"*, and
the code you actually write bears no resemblance to the sentence. A
connection registry. A member list, and a lock around it. A broadcast loop.
Async plumbing. By the time it works, the idea you started with is buried.
**Hale is a bet that the gap doesn't have to be there.**

## A chat room, in Hale

```hale
type Msg { room: String; user: String; text: String; }

topic Posted    { payload: Msg; keyed_by room; }   // routed by room name
topic Broadcast { payload: Msg; }

locus Room {
    params { name: String = "lobby"; }
    bus {
        subscribe Posted as on_post where key == self.name;
        publish…
