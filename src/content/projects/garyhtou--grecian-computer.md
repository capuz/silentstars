---
repo: "garyhtou/grecian-computer"
name: "grecian-computer"
description: "Solving the Grecian Computer puzzle"
readmeQualityOk: true
url: "https://github.com/garyhtou/grecian-computer"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-01-03T03:42:39Z"
lastCommitAt: "2026-07-22T06:10:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["garyhtou"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/584609376/3775bf06-5eea-4634-8fad-2012561f621b"
---

# Grecian Computer

I received the [`Grecian
Computer`](https://projectgeniusinc.com/grecian-computer/) wood brainteaser
puzzle as a gift. Here's my attempt to solve it with code!

## The puzzle

> Turn the dials until each of the 12 columns add up to 42.

The [`puzzle.json`](https://github.com/garyhtou/grecian-computer/blob/HEAD/puzzle.json) file contains a JSON serialized version of the
puzzle. Each array element represents a rotatable dial within the puzzle. The
dials are ordered from top to bottom (smaller dials at the top, larger dials at
the bottom). This order is significant as some dials contain cutouts that show
the numbers of the dials below them.

Each dial contains at least one level. Each level is an array of exactly 12
elements. These elements may be numbers (integers) or `null` to represent a
cutout in the dial. The array can be seen as a circular array where the first
element is adjacent to the last element.

## Solving

Since this is some one-off code that I'm writing, I'm going to use this as an
opportunity to learn a new language: **Rust**!

My first attempt will just be a brute force, then I'll come back later and try
to optimize it (it seems like [dynamic…
