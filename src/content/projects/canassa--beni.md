---
repo: "canassa/beni"
name: "beni"
description: "Typed functional programming for JavaScript: no runtime errors, colorless functions, fast compiler"
readmeQualityOk: true
url: "https://github.com/canassa/beni"
language: "Elm"
languages: ["Elm", "Zig"]
languagePcts: [63, 26]
stars: 16
forks: 1
openIssues: 127
closedIssues: 63
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-09-13T15:37:41Z"
lastCommitAt: "2026-10-19T09:14:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 37
maintainers: ["canassa", "jaysonsantos"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ee130fef6b02c49d48ebd572c23313a40ecdab30e33be950fdb9d9cbbf9fc15/canassa/beni"
---

# Beni

Beni is a statically typed functional language in the ML family that compiles
to JavaScript.

- **Fast compiler**: written in Zig, 768K lines/s on one core, 6× faster than TypeScript 7.
- **No runtime errors**: no `null`, no `undefined`, no exceptions.
- **Hindley–Milner type inference**: annotations are optional.
- **Colorless functions**: no `async` or `await`; the runtime handles waiting.
- **Fast UI**: compiled templates, as fast as Solid, 1.4 kB for an empty page.

```elm
type Shape
    = Circle Float
    | Rect Float Float

area : Shape → Float
area shape =
    case shape of
        Circle r →
            pi * r * r

        Rect w h →
            w * h

largest : List Shape, Int → List (Shape × Float)
largest shapes n =
    shapes
        ▷ List.map λs → ( s, area s )
        ▷ List.filter λ( _, a ) → a ≥ 1.0
        ▷ List.sortBy λ( _, a ) → -a
        ▷ List.take n
```

## The language

### Custom types and pattern matching

A custom type lists every shape a value can take. A `case` must handle all of
them, so adding a new shape later points you at every place that needs to
change.

```elm
type Payment
    = Cash
    | Card String
    | Voucher Int

describe :…
