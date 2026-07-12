---
repo: "grafana/otel-checker"
name: "otel-checker"
description: "Otel Me If It's Right project"
readmeQualityOk: true
url: "https://github.com/grafana/otel-checker"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["keep", "opentelemetry"]
stars: 35
forks: 4
openIssues: 14
closedIssues: 3
watchers: 7
contributors: 32
recentReleases: 1
createdAt: "2024-08-09T18:11:21Z"
lastCommitAt: "2026-07-12T06:18:35Z"
lastReleaseAt: "2026-06-09T12:35:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 49
maintainers: ["renovate-sh-app[bot]", "maryliag", "martincostello"]
openGraphImageUrl: "https://opengraph.githubassets.com/f478899d947d2e902ea6de38298d2fc675f4915dbc60f6456b6de5df5958610c/grafana/otel-checker"
discussionCount: 0
---

# OTel Me If It's Right

Checker for if the implementation of OpenTelemetry instrumentation is correct
by scanning the code in your repository, checking environment variables,
validating your Grafana token and more.

## Usage

Requirement: Golang

## Installation

1. Install the `otel-checker` binary

   ```text
   go install github.com/grafana/otel-checker/cmd/otel-checker@latest
   ```

2. You can confirm it was installed with:

   ```terminal
   ❯ ls $GOPATH/bin
   otel-checker
   ```

## Commands

```terminal
otel-checker check                  # all components
otel-checker check sdk              # SDK only
otel-checker check collector        # Collector config only
otel-checker check beyla            # Beyla only
otel-checker check alloy            # Grafana Alloy only
otel-checker check grafana-cloud    # Grafana Cloud connectivity only
otel-checker serve                  # web UI for a previously-saved JSON result
otel-checker explain                    # show explanations for every finding from a saved results file
otel-checker explain <id>               # show the explanation for a single ID
otel-checker explain list               # list every available explain ID…
