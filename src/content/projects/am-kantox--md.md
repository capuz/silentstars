---
repo: "am-kantox/md"
name: "md"
description: "Stream-aware markdown parser with custom syntax setting"
readmeQualityOk: true
url: "https://github.com/am-kantox/md"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 88
forks: 9
openIssues: 1
closedIssues: 37
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-09-23T14:38:53Z"
lastCommitAt: "2026-10-25T09:01:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 32
maintainers: ["am-kantox"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/409629199/13d95a78-cf95-414a-a4fa-090c30be0ce2"
discussionCount: 0
---

# Md  [](https://kantox.com/)    

**Stream markup parser, extendable, flexible, blazingly fast, with callbacks and more, ready for markdown…**

---

### Main Focus

This library is not yet another markdown parser, rather it’s a highly configurable
and extendable parser for any custom markdown-like markup. It has been created
mostly to allow custom markdown syntax, like `^foo^` for superscript, or `⇓bar⇓`
for subscript. It also supports [custom parsers](https://hexdocs.pm/md/Md.Parser.html)
for anything that cannot be handled with generic parsers, inspired by markdown
(something more complex than standard markdown provides.)

The library provides callbacks for all the default syntax handlers, as well as for
custom handlers, allowing the on-fly modification of what’s currently being processed.

`Md` parses the incoming stream **once** and keeps the state, producing an AST
of the input document. It has an ability to recover from errors collecting them.

It currently does not support (and I frankly doubt it ever will)
lists with embedded quotes, and other contrived syntax. If one needs to perfectly
parse the common markdown, `Md` is probably not the correct choice.

But if one wants…
