---
repo: "sparboom-git/opencheck"
name: "opencheck"
description: "Model validerings software"
readmeQualityOk: true
url: "https://github.com/sparboom-git/opencheck"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-10-19T07:59:11Z"
lastCommitAt: "2026-11-07T09:29:51Z"
lastReleaseAt: "2026-11-04T21:49:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 45
maintainers: ["sparboom-git"]
openGraphImageUrl: "https://opengraph.githubassets.com/7809371ce2356930df78af5c5da49b7134d2cb8954c1c52521d188f53935025e/sparboom-git/opencheck"
---

# OpenCheck

OpenCheck is an open source BIM model checker written in Rust. It loads several
IFC files into one federated model, lets you browse and inspect them in an
easy 3D viewer, checks them for clashes, clearances, free zones, duplicates
and missing information, and turns what it finds into issues that can be
reported, exported as BCF or shared with an issue server such as Dalux.
Visual checks colour the model to show what is out of line: walls and
columns that do not stack, pipes and ducts that grow again away from their
source, drains without fall, elements on the wrong storey. Checks can also
run on a schedule without the app, with a dashboard of how a project
develops.

> Status: early but usable. Viewing, checking (including free zones and
> script rules), visual checks, information requirements, IDS, issues,
> reports, BCF files, BCF Live with Dalux and autorun work, on the desktop
> and largely in the browser. See [docs/ROADMAP.md](https://github.com/sparboom-git/opencheck/blob/HEAD/docs/ROADMAP.md) for what comes next.

## Download

You do not need to build OpenCheck to try it. For Windows:

1. Open the [Releases…
