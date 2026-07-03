---
repo: "Doenet/DoenetML"
name: "DoenetML"
description: "Semantic markup for building interactive web activities"
url: "https://github.com/Doenet/DoenetML"
homepage: "https://www.doenet.org/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 25]
stars: 8
forks: 34
openIssues: 268
closedIssues: 230
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2022-07-09T00:08:41Z"
lastCommitAt: "2026-07-03T06:22:56Z"
lastReleaseAt: "2025-08-05T18:50:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 83
maintainers: ["dqnykamp", "siefkenj", "StevenClontz"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dc2141cd7ca990cdd7662e82895c74bf23976fdbb241c622a06004a817095db/Doenet/DoenetML"
discussionCount: 7
---

# DoenetML

Monorepo for DoenetML Components. See the `packages/*` folders for individual components.

# What is DoenetML?

Semantic markup for building interactive web activities.
[Read more about Doenet](https://www.doenet.org)

```xml
<p>Drag the point to the 4th quadrant.</p>
<graph>
    <point xs='2 3'/>
</graph>
```

## Features

-   Internally manages a directed acyclic graph of dependencies to coordinate updates of self-referential worksheets

## Quickstart

To quickly get started contributing to DoenetML, you can use a
[Codespace](https://g4m.code4math.org/ch-coding.html#def-codespaces)
and your web browser (or see below for local installation instructions).

Click the green `<> Code` button
on the GitHub.com page for this repository, choose the
"Codespaces" tab, then click the green "Create codespace on main"
button.

Grab a cup of coffee, and after a few minutes, you should have a
working development environment in your web browser.

### Development 

Type `npm run dev` into a terminal;
this will run a development server using the Doenet activity located at
`/packages/doenetml/dev/testCode.doenet`.

To access this server, open `http://localhost:8012` in your web…
