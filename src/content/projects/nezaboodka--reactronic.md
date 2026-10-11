---
repo: "nezaboodka/reactronic"
name: "reactronic"
description: "Transactionally Reactive State Management for JavaScript"
readmeQualityOk: true
url: "https://github.com/nezaboodka/reactronic"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["transactional-reactivity", "reactive-programming", "state-management", "transactions", "javascript", "react"]
stars: 25
forks: 4
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2019-02-14T08:36:07Z"
lastCommitAt: "2026-10-11T10:15:15Z"
lastReleaseAt: "2022-07-16T17:43:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 65
undervaluedScore: 31
maintainers: ["ychetyrko"]
openGraphImageUrl: "https://opengraph.githubassets.com/de041f60b8b7d93ca4bbaaf4e09147969eb5cfbdb1c8944d6817cf000b9b24ea/nezaboodka/reactronic"
---

# **Reactronic** - Transactional Reactive State Management

Reactronic is an experimental JavaScript library that provides
[transactional reactive](https://blog.nezaboodka.com/post/2019/593-modern-database-should-natively-support-transactionally-reactive-programming)
state management in a Web application.

Transactional reactivity means that state changes are
being made in an isolated data snapshot and then, once
atomically applied, are **consistently propagated** to
corresponding visual components for (re)rendering. All
that is done in automatic, seamless, and fine-grained
way. Reactronic **takes full care of tracking dependencies**
between visual components (reactive functions) and
application state (signalling objects).

Transactional reactivity is based on four fundamental
concepts:

  - **Signalling Objects** - a set of objects that store
    data of an application (state) and cause reactions
    upon their changes;
  - **Transactional Function** - a function that makes
    changes in signalling objects in atomic way ("all
    or nothing");
  - **Reactive Function** - a function that is
    (re-)executed in response to changes made in
    signalling objects by transactional…
