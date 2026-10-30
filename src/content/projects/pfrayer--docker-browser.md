---
repo: "pfrayer/docker-browser"
name: "docker-browser"
description: "Visualize your Docker containers/images/volumes/networks and see the links between these objects"
readmeQualityOk: true
url: "https://github.com/pfrayer/docker-browser"
language: "Python"
languages: ["Python", "HTML", "JavaScript", "CSS"]
languagePcts: [32, 25, 22, 20]
topics: ["docker", "visualizer", "docker-images", "docker-containers", "docker-network", "docker-volumes"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-02-22T21:53:15Z"
lastCommitAt: "2026-10-30T11:02:21Z"
lastReleaseAt: "2026-04-02T20:33:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 71
undervaluedScore: 53
maintainers: ["pfrayer", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad2e1e79982ab1de6a336b2e0a6e9dab10175ef1d3476d465ea1207369972154/pfrayer/docker-browser"
---

# Docker Browser

Visualize your Docker objects (containers, images, volumes, networks) and easily identify what uses what: which volumes and networks are used by which containers, which images are used by which containers, etc.

[docker-browser.webm](https://github.com/user-attachments/assets/da53b911-6f9e-49d5-bb75-b99eba1ff592)

## Usage

### Docker

```shell
$ docker run -d \
  -n docker-browser \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -p 5000:5000 \
  pfrayer/docker-browser
```

### Local development

```shell
$ poetry install
$ poetry run python -m app.app
```

Then open `http://localhost:5000` in your browser and click on a container to see its related objects highlighted.

## Development

```shell
$ poetry install                # install all deps (including dev)
$ poetry run pytest             # run tests
$ poetry run ruff check .       # lint
$ poetry run ruff format .      # format
$ pre-commit install            # install git hooks
```
