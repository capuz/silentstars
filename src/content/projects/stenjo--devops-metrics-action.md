---
repo: "stenjo/devops-metrics-action"
name: "devops-metrics-action"
description: "Github action to calculate dora metrics"
readmeQualityOk: true
url: "https://github.com/stenjo/devops-metrics-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 12
forks: 3
openIssues: 8
closedIssues: 43
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-04-06T12:43:58Z"
lastCommitAt: "2026-10-16T08:26:46Z"
lastReleaseAt: "2023-05-03T22:03:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 70
maintainers: ["steoj", "dependabot[bot]", "stenjo"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdb7271197b8d3daf21ce458770b9ea5f664426dbc7a04d45fa775e72d6eeb78/stenjo/devops-metrics-action"
---

# Get DevOps Metrics from GitHub project issues and releases

This GitHub Action will calculate a set of DevOps Research and Assessment (DORA)
metrics based on status and dates from commits and issues.

## Inputs

### `repo`

Repository from where to read issues and statuses. List one or more
repositories, either as one single string, as an array or all separated by
newlines. Valid formats are:

```yaml
repo: my-repository
```

```yaml
repo: [my-repository, my-other-repository]
```

```yaml
repo: my-repository my-other-repository
```

Entries may also be given as `owner/repository`; the owner part must then
match the `owner` input (case-insensitive).

```yaml
repo: stenjo/devops-metrics-action
```

Default `repo` value is repository where action is installed
if no repositories are specified.

Every repository name is validated against GitHub's naming rules (letters,
digits, `_`, `.` and `-`, 1–100 characters, no `..`) before any API call is
made. An invalid entry fails the run with a message naming the offending
value.

### `owner`

Owner of the repository. Default is current repository owner or organization.
Only one is handled. Validated with the same naming rules as `repo`.…
