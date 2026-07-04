---
repo: "doriantaylor/rb-intertwingler"
name: "rb-intertwingler"
description: "Intertwingler is an application server for creating dense hypermedia networks."
readmeQualityOk: true
url: "https://github.com/doriantaylor/rb-intertwingler"
homepage: "https://intertwingler.net"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["hypermedia", "link-rot", "rdf"]
stars: 89
forks: 3
openIssues: 1
closedIssues: 0
watchers: 10
contributors: 1
recentReleases: 0
createdAt: "2018-05-24T02:51:13Z"
lastCommitAt: "2026-07-04T23:16:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 62
undervaluedScore: 33
maintainers: ["doriantaylor"]
openGraphImageUrl: "https://opengraph.githubassets.com/6617a6c115b005eedb6038279250e61a15159461c27e1c87fff3fb2245041d9b/doriantaylor/rb-intertwingler"
---

# Intertwingler — An Engine for Dense Hypermedia

`Intertwingler` is an _engine_, very much like
[WordPress](https://www.wordpress.org/) is an engine: you use it to
make websites. You can think of `Intertwingler`, at least _this_
implementation of it, as a _demonstrator_ for the kind of
infrastructure necessary to make the Web do genuine _dense
hypermedia_.

The way to understand _dense_ hypermedia is to contrast it with what
the Web is off the shelf, which is _sparse_ hypermedia: big clunky
_pages_ with not a lot of links, and what links _do_ exist are
sequestered into regions like navigations and other UI. What we want
instead are smaller, more _composable_ units, the mechanism of
composition being — what will end up being a much greater density of —
ordinary links. The effect we are after with `Intertwingler` is to
_pulverize_ Web content, dramatically increasing its _addressability_.
Not only does this afford practical benefits like content reuse, but
new affordances for software tools and creative expression.

# Strategy

The main problem `Intertwingler` has to solve, then, is the fact that
links on the Web are extremely _brittle_. The reason _why_ links on
the Web are…
