---
repo: "bpmn-io/bpmnlint"
name: "bpmnlint"
description: "Validate BPMN diagrams based on configurable lint rules."
readmeQualityOk: true
url: "https://github.com/bpmn-io/bpmnlint"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bpmn", "linter", "cli", "static-diagram-analysis", "validator", "hacktoberfest"]
stars: 172
forks: 49
openIssues: 14
closedIssues: 66
watchers: 10
contributors: 24
recentReleases: 0
createdAt: "2018-08-15T06:31:46Z"
lastCommitAt: "2026-10-12T11:15:05Z"
lastReleaseAt: "2025-02-17T11:18:43Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 76
undervaluedScore: 34
maintainers: ["nikku", "philippfromme", "peterhnm"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba09cd35f8f2b44a43e9f5a731aabc220d61895d17f52d4d88dec0e3be20d463/bpmn-io/bpmnlint"
---

# bpmnlint

Validate your BPMN diagrams based on configurable lint rules.

## Installation

Install the utility via [npm](https://www.npmjs.com/package/bpmnlint):

```sh
npm install -g bpmnlint
```

## Usage

Validate your diagrams via the commandline:

```sh
> bpmnlint invoice.bpmn

/Projects/process-application/resources/invoice.bpmn
  Flow_1    error    Sequence flow is missing condition  conditional-flows
  Process   error    Process is missing end event        end-event-required
  Task_13   warning  Element is missing label/name       label-required
  Event_12  warning  Element is missing label/name       label-required
  Event_27  warning  Element is missing label/name       label-required
  Process   error    Process is missing start event      start-event-required

✖ 6 problems (6 errors, 0 warnings)
```

## Rules

Our [documentation](https://github.com/bpmn-io/bpmnlint/tree/main/docs/rules#rules) lists all currenty implemented rules, the [`./rules` folder](https://github.com/bpmn-io/bpmnlint/tree/main/rules) contains each rules implementation.

Do you miss a rule that should be included? [Propose a new…
