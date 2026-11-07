---
repo: "thejefflarson/goat"
name: "goat"
description: "A programming language for my daughter."
readmeQualityOk: true
url: "https://github.com/thejefflarson/goat"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["llvm", "functional-programming", "programming-language"]
stars: 10
forks: 0
openIssues: 39
closedIssues: 58
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2016-06-11T02:51:36Z"
lastCommitAt: "2026-11-07T16:11:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 63
maintainers: ["thejefflarson"]
openGraphImageUrl: "https://opengraph.githubassets.com/42dd73424a064d676b1e6a674f17aee7d20f4fc6540e7125f9cfbda4d529267c/thejefflarson/goat"
---

# goat

A small, statically typed programming language that compiles to native code —
built to be simple enough for a kid to read, with a real type system underneath
so it can grow into something serious. The eventual goal is a turtle-graphics
language for making drawings.

```
# examples/fib.goat
fib = program(n) do
  if n < 2 then n
  else fib(n - 1) + fib(n - 2)
  done
done

fib(10)
```

```console
$ goat run examples/fib.goat
55
```

## The language today

- Numbers, booleans, strings, and the unit value.
- `name = value  rest` — bindings, which may be recursive.
- `program(a, b) do ... done` — first-class functions; `f(x, y)` calls them.
  `function` is an accepted synonym for `program`.
- `if c then a else b done` — conditionals.
- `{x: 1, y: 2}` — records, with field access `point.x`.
- Arithmetic `+ - * /` and comparisons `< <= > >=`.
- `a and b`, `a or b`, `not a` — booleans; `and`/`or` skip the right side when the
  left decides.
- `a; b` — run `a`, drop its value, then run `b`.
- `repeat n times do ... done`, `for i from 1 to 10 do ... done` and
  `for x in xs do ... done` — loops, which are `Unit` expressions.

Types are inferred — you never write a type annotation.…
