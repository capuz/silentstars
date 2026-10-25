---
repo: "cgueret/Scriptorium"
name: "Scriptorium"
description: "Scriptorium is a text editor coupled with a plotting tool and a formatting tool. The objective is to provide writers with a simple and complete environment to plan, plot, write and edit e-books."
readmeQualityOk: true
url: "https://github.com/cgueret/Scriptorium"
homepage: "https://flathub.org/apps/io.github.cgueret.Scriptorium"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["book", "editor", "epub-generation"]
stars: 59
forks: 8
openIssues: 15
closedIssues: 32
watchers: 4
contributors: 6
recentReleases: 1
createdAt: "2025-02-22T15:49:28Z"
lastCommitAt: "2026-10-25T08:40:28Z"
lastReleaseAt: "2026-10-05T13:19:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 73
undervaluedScore: 52
maintainers: ["cgueret", "p-bo"]
openGraphImageUrl: "https://opengraph.githubassets.com/76f8fed537f3441fec68a48af7ab323c895e2274cd769f1b5df3df2681567058/cgueret/Scriptorium"
fundingLinks: ["GITHUB:https://github.com/cgueret", "KO_FI:https://ko-fi.com/cgueret", "BUY_ME_A_COFFEE:https://buymeacoffee.com/cgueret"]
discussionCount: 5
---

# Scriptorium

Scriptorium is a text editor coupled with a planning tool and a publishing tool.

The objective is to provide writers with a simple and complete environment to plan, write and publish e-books.

Main features:

  * **Plan** the list of scenes and story elements of the manuscript
  * **Write** the content of the scenes with a text focused editor
  * **Publish** your manuscript as an epub after previewing it

In addition, some general features are:

  * Dark mode
  * Versioning of scenes managed via Git
  * Back-end using plain text YAML and HTML files

## Installation

## Screenshots

More screenshots are available in `data/screenshots`

## Build and run

To build and run the app once you cloned the repo do:

```
flatpak run org.flatpak.Builder --force-clean --sandbox --user --install \
    --install-deps-from=flathub --ccache \
    --mirror-screenshots-url=https://dl.flathub.org/media/ \
    --repo=repo builddir io.github.cgueret.Scriptorium.json
```

and then

```
flatpak run io.github.cgueret.Scriptorium
```

You may have to run this first if it's the first time you build:

```
flatpak install -y flathub org.flatpak.Builder
flatpak remote-add --if-not-exists --user…
