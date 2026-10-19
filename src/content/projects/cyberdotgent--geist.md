---
repo: "cyberdotgent/geist"
name: "geist"
description: "Open-source IBM BookManager document reader and library"
readmeQualityOk: true
url: "https://github.com/cyberdotgent/geist"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 7
closedIssues: 89
watchers: 1
contributors: 6
recentReleases: 6
createdAt: "2026-06-14T09:35:17Z"
lastCommitAt: "2026-10-19T09:15:37Z"
lastReleaseAt: "2026-10-04T12:31:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 61
maintainers: ["friedkiwi"]
openGraphImageUrl: "https://opengraph.githubassets.com/f87be8b9f950613f1f352c42fa2218bf6f169c9dd43dc11f2f24e2bc70a121e4/cyberdotgent/geist"
---

# Geist

Tools for reading IBM BookManager `BOO` books.

## libgeist

A self-contained C++17 library that parses a BOO container and renders its
topics to Markdown or HTML. It has no dependencies beyond `libpng` and
`giflib`, and it decides nothing about presentation: a consumer supplies the
link resolvers, the page chrome and the URL space it wants
(`src/geist/html.hpp`). The BOO format itself is documented in
`doc/boo-spec/`, completely enough to implement a reader without reading this
source.

Command-line tools, in `examples/`:

| Tool | Does |
|---|---|
| `booinfo` | book metadata |
| `bootoc` | table of contents |
| `boorsrc` | list and extract stored images (`--list`, `--extract`, `--png`) |
| `boorender` | render a topic to Markdown or HTML |
| `bootrace` | trace rendered output back to the source bytes |
| `boo2git` | export a whole book to a folder tree |

```sh
cmake -S . -B build && cmake --build build
./build/booinfo book.boo
./build/boorsrc --png book.boo 1 figure.png
```

## Geist Hardcopy Reader

A Qt6 desktop reader, laid out after IBM's BookManager SoftCopy Reader: a
topic tree, a divider, and a topic pane, with separate font-size controls for
each. Built by…
