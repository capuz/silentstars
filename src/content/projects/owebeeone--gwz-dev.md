---
repo: "owebeeone/gwz-dev"
name: "gwz-dev"
description: "Workspace for gwz development"
readmeQualityOk: true
url: "https://github.com/owebeeone/gwz-dev"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [47, 28]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-22T17:26:46Z"
lastCommitAt: "2026-10-11T10:14:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 39
maintainers: ["gripd"]
openGraphImageUrl: "https://opengraph.githubassets.com/d414b9040c3a20f055abbdd621a197b59ea4010f52607ad59dc188aa45f2b425/owebeeone/gwz-dev"
---

# gwz-dev

`gwz-dev` is the complete checkout for building, testing, and changing GWZ
(Git Workspace Zone). Clone this workspace when you want the Rust CLI, core
engine, Python bindings, Taut tooling, and their coordinated revisions together.

GWZ itself manages the checkout: the root records the member repositories and
their exact revisions while each member remains an ordinary Git repository.

## Get The Development Workspace

Install [`gwz`](https://github.com/owebeeone/gwz-cli#install-and-start), then:

```sh
gwz clone https://github.com/owebeeone/gwz-dev.git gwz-dev
cd gwz-dev
gwz status
cargo test --workspace
```

No SSH key? The manifest records the member remotes in the
`git@github.com:...` form, which needs one. With gwz 1.0.11 or later, ask for
the https form instead (`GWZ_URL_SCHEME=https` does the same):

```sh
gwz clone --url-scheme https https://github.com/owebeeone/gwz-dev.git gwz-dev
```

See [Clone An Existing Workspace](https://owebeeone.github.io/gwz-cli/QuickStart/#clone-an-existing-workspace)
in the Quick Start for what is converted, what is remembered, and how private
members are handled.

Working on this workspace with Claude Code? Its worktree hooks give a…
