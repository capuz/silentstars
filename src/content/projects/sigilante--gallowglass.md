---
repo: "sigilante/gallowglass"
name: "gallowglass"
description: "An LLM-first language for PLAN."
url: "https://github.com/sigilante/gallowglass"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 7
createdAt: "2026-03-19T19:42:39Z"
lastCommitAt: "2026-06-27T00:45:46Z"
lastReleaseAt: "2026-05-18T18:56:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 51
maintainers: ["sigilante"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bc67e26c5bd5883a9b3fcc2c52b295d62e6d58355dd48b6bec2bbef2dbcc1de/sigilante/gallowglass"
---

# Gallowglass

An LLM-first programming language targeting the PLAN virtual machine.

## What is Gallowglass?

Gallowglass is a statically typed functional programming language designed with two equally weighted goals:

1. **LLMs can write it correctly.** High local constraint at every token, effects visible in every signature, canonical naming enforced by the compiler, no implicit state.
2. **LLMs can reason about it accurately.** Pure by default, explicit effects, contracts stated from mathematical specifications, Glass IR makes compiler decisions visible.

It compiles to PLAN --- a minimal graph-reduction VM with four constructors (Pin, Law, App, Nat) and five opcodes. All types are erased at compile time; type errors are purely a compile-time concern.

## Quick taste

```gallowglass
-- Algebraic types
type Result a b =
  | Ok  a
  | Err b

-- Effects are always visible in type signatures
let read_file : Path -> {IO, Exn IOError | r} Bytes

-- Handlers discharge effects locally
handle computation {
  | return x  -> x
  | raise e k -> default_value
}

-- Typeclasses
class Eq a {
  let eq : a -> a -> Bool
  let neq : a -> a -> Bool
  let neq = \ xx yy -> not (eq xx yy)
}

--…
