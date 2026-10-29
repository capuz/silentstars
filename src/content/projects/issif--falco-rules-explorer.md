---
repo: "Issif/falco-rules-explorer"
name: "falco-rules-explorer"
description: "A dashboard to explore Falco Rules"
readmeQualityOk: true
url: "https://github.com/Issif/falco-rules-explorer"
homepage: "https://Issif.github.io/falco-rules-explorer"
language: "HTML"
languages: ["HTML", "Go"]
languagePcts: [75, 21]
topics: ["falco", "security"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-02-15T15:55:58Z"
lastCommitAt: "2026-10-29T12:25:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 73
maintainers: ["github-actions[bot]", "Issif"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/602153318/275fb0cc-e734-42af-911b-e24feee7abb3"
---

# Falco Rules Explorer

## Description

> This project is a WIP

Falco Rules Explorer is dashboard to explore the Falco rules in a friendly way. You can search, filter and display all details of rules.

## Configuration

The list of rules to scrape is managed by the file `registry.yaml`:

```yaml
---
rules_files:
  - "https://github.com/falcosecurity/rules/blob/main/rules/falco_rules.yaml"
  - "https://github.com/falcosecurity/rules/blob/main/rules/application_rules.yaml"
  - "https://github.com/falcosecurity/plugins/blob/master/plugins/k8saudit/rules/k8s_audit_rules.yaml"
  - "https://github.com/falcosecurity/plugins/blob/master/plugins/cloudtrail/rules/aws_cloudtrail_rules.yaml"
  - "https://github.com/falcosecurity/plugins/blob/master/plugins/github/rules/github.yaml"
  - "https://github.com/falcosecurity/plugins/blob/master/plugins/okta/rules/okta_rules.yaml"
```

## Create the index of rules

```shell
go run .
```

It creates an `index.json` file which lists all rules with their details.

## View the dashboard

```shell
python -m http.server 3000
```

Go to http://0.0.0.0:3000/.

## Frontend

The sources for the frontend are:
- `index.html`: the dashboard
- `rule.html`:…
