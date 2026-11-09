---
repo: "sivaprasadreddy/sivalabs-dev-notes"
name: "sivalabs-dev-notes"
description: "My tech notes for quick reference"
readmeQualityOk: true
url: "https://github.com/sivaprasadreddy/sivalabs-dev-notes"
homepage: "https://sivaprasadreddy.github.io/sivalabs-dev-notes/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["developer-tools", "development-environment", "productivity"]
stars: 13
forks: 11
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2014-10-16T11:08:16Z"
lastCommitAt: "2026-11-09T03:30:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 54
maintainers: ["sivaprasadreddy"]
openGraphImageUrl: "https://opengraph.githubassets.com/986862030005e57a8ffaa54599ab21854e3fb0cae9e0317abfef4b40cb34d632/sivaprasadreddy/sivalabs-dev-notes"
---

My Tech Notes for Quick Reference
==================================

https://sivaprasadreddy.github.io/sivalabs-dev-notes/

Local setup with mise
--------------------

With [mise](https://mise.jdx.dev/) installed, run from the repository root:

```bash
mise trust
mise install
mise run serve
```

mise manages Python 3.15 and creates and activates `.venv` automatically.
The `serve` and `build` tasks install dependencies from `requirements.txt` before
running MkDocs. Open http://127.0.0.1:8000/ after starting the server.

```bash
mise run install # Install dependencies only
mise run build   # Build the static site into site/
mise tasks       # List available tasks
```

Alternative setup with Docker
-----------------------------

Install and start Docker (for example, Docker Desktop). From the repository root,
run the Docker task with mise:

```bash
mise run docker:serve
```

Open http://127.0.0.1:8000/. The repository is mounted into the container so local
documentation edits trigger a reload. Press `Ctrl+C` to stop and remove the container.
Dependencies are installed inside the container each time it starts.

To build the static site with Docker, run:

```bash
mise run docker:build…
