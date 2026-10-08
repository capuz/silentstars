---
repo: "Activiti/activiti-cloud"
name: "activiti-cloud"
description: "Activiti Cloud libraries and Spring Boot starters."
readmeQualityOk: true
url: "https://github.com/Activiti/activiti-cloud"
language: "Java"
languages: ["Java"]
languagePcts: [77]
topics: ["activiti", "activiti-cloud", "bpmn", "microservice", "cloud", "aae", "apa", "hxps"]
stars: 93
forks: 48
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 87
recentReleases: 0
createdAt: "2020-01-27T11:13:42Z"
lastCommitAt: "2026-10-08T10:51:40Z"
lastReleaseAt: "2022-06-27T13:02:33Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 46
maintainers: ["dependabot[bot]", "alfresco-build", "jsokolowskii"]
openGraphImageUrl: "https://opengraph.githubassets.com/3296f77d7eb15ee98d132a0a4211534d6602117c89e021459c48a8db00174a38/Activiti/activiti-cloud"
---

# activiti-cloud

Activiti Cloud libraries and Spring Boot starters.

## CI/CD

Running on GH Actions.

For Dependabot PRs to be validated by CI, the label "CI" should be added to the PR.

Requires the following secrets to be set:

| Name                         | Description                        |
| ---------------------------- | ---------------------------------- |
| BOT_GITHUB_TOKEN             | Token to launch other builds on GH |
| BOT_GITHUB_USERNAME          | Username to issue propagation PRs  |
| DOCKERHUB_USERNAME           | Docker Hub repository username     |
| DOCKERHUB_PASSWORD           | Docker Hub repository password     |
| NEXUS_USERNAME               | Maven repository username (CI)     |
| NEXUS_PASSWORD               | Maven repository password (CI)     |
| RANCHER2_URL                 | Rancher URL for tests              |
| RANCHER2_ACCESS_KEY          | Rancher access key for tests       |
| RANCHER2_SECRET_KEY          | Rancher secret key for tests       |
| SLACK_NOTIFICATION_BOT_TOKEN | Token to notify slack on failure   |

## Preview Propagation

This repository includes an automated **Preview Propagation** mechanism for testing cross-module…
