---
repo: "jenkins-x/jx3-pipeline-catalog"
name: "jx3-pipeline-catalog"
description: "the default tekton catalog for Jenkins X 3.x"
readmeQualityOk: true
url: "https://github.com/jenkins-x/jx3-pipeline-catalog"
language: "Makefile"
languages: ["Makefile", "Go Template"]
languagePcts: [35, 23]
topics: ["hacktoberfest"]
stars: 30
forks: 121
openIssues: 12
closedIssues: 4
watchers: 7
contributors: 38
recentReleases: 0
createdAt: "2020-09-18T13:54:05Z"
lastCommitAt: "2026-10-13T10:57:41Z"
lastReleaseAt: "2021-02-04T22:49:32Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 60
maintainers: ["pow-devops2020", "jenkins-x-bot", "Skisocks"]
openGraphImageUrl: "https://opengraph.githubassets.com/4855202630d5221802ccacb34be166cd5e0dd8c17843ae90fc4245e8af97d8c6/jenkins-x/jx3-pipeline-catalog"
---

# jx3-pipeline-catalog

The default pipeline catalog for Jenkins X 3.x

Jenkins X 3.x comes with its own default pipeline catalog for different languages, tools and frameworks. This catalog contains reusable steps, Tasks, Pipelines and Packs you can use on any project.

For more information check out the [Jenkins X 3.x support for Tekton Catalog](https://jenkins-x.io/v3/develop/pipeline-catalog/)

## Contents

* [tasks](https://github.com/jenkins-x/jx3-pipeline-catalog/blob/HEAD/tasks) a reusable folder of tasks and associated triggers
* [packs](https://github.com/jenkins-x/jx3-pipeline-catalog/blob/HEAD/packs) contains the language and/or framework specific packs containing tekton pipelines and associated files used by the pipelines such as `Dockerfile` or helm charts.
  * e.g. the [javascript](https://github.com/jenkins-x/jx3-pipeline-catalog/blob/HEAD/packs/javascript) pack has the Jenkins X pipelines at [packs/javascript/.lighthouse/jenkins-x](https://github.com/jenkins-x/jx3-pipeline-catalog/blob/HEAD/packs/javascript/.lighthouse/jenkins-x)
* [helm](https://github.com/jenkins-x/jx3-pipeline-catalog/blob/HEAD/helm) contains reusable helm charts that are imported into the…
