---
repo: "Doenet/DoenetML"
name: "DoenetML"
description: "Semantic markup for building interactive web activities"
readmeQualityOk: true
url: "https://github.com/Doenet/DoenetML"
homepage: "https://www.doenet.org/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 25]
stars: 8
forks: 34
openIssues: 302
closedIssues: 258
watchers: 2
contributors: 25
recentReleases: 0
createdAt: "2022-07-09T00:08:41Z"
lastCommitAt: "2026-07-25T06:00:02Z"
lastReleaseAt: "2025-08-05T18:50:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 84
maintainers: ["dqnykamp", "siefkenj", "anuragkatyal"]
openGraphImageUrl: "https://opengraph.githubassets.com/764e25a6f01c3d01b08028fe2e5ae4fe90a084d4149a447f905b18fb2d11defa/Doenet/DoenetML"
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
