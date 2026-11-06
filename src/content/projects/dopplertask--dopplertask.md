---
repo: "dopplertask/dopplertask"
name: "dopplertask"
description: "A revolutionary open-source automation tool"
readmeQualityOk: true
url: "https://github.com/dopplertask/dopplertask"
homepage: "https://dopplertask.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["automation"]
stars: 434
forks: 33
openIssues: 0
closedIssues: 19
watchers: 8
contributors: 3
recentReleases: 0
createdAt: "2022-01-02T11:59:05Z"
lastCommitAt: "2026-11-06T11:24:27Z"
lastReleaseAt: "2022-03-28T00:53:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 36
maintainers: ["feraswilson", "AlirezaAghaee1996"]
openGraphImageUrl: "https://opengraph.githubassets.com/a94221ccf6c48c182a8b753709ef5f2c333b91f3044a387c0d82974ee548c155/dopplertask/dopplertask"
---

DopplerTask is a revolutionary open-source software that allows you to easily automate tasks. Whether it’s a bunch of bash scripts or just starting your car remotely, you can automate it. Build, run, reuse and share automations with anyone around the globe.

On top of all of this life-simplifying project, we are striving to make an climate friendly software that is fast, easy and consumes as little resources as possible.

## Demo
Click [here](https://www.youtube.com/watch?v=WfuVR53GtWQ) to see a short demo of DopplerTask showing some of the capabilities of the software.

## Docker
The official image `dopplertask/dopplertask` is published on every release.

To run it with Docker Compose, keeping your tasks in a named volume:
```docker compose up -d```

To run the built docker image:
```docker run -d -p 8090:8090 -p 61614:61614 -v $HOME:/root dopplertask/dopplertask ```

To rebuild the docker image:
```docker build -t dopplertask/dopplertask .```

Access the GUI on:
```http://localhost:8090/public/index.html```

## CLI (Optional)
Install the CLI via NPM:
```npm install -g dopplertask-cli```

## Prerequisites

Install JDK 17 and gradle.

(Optional) Install CLI:
```npm install -g…
