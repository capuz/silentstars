---
repo: "runs-on/action"
name: "action"
description: "The official RunsOn action"
readmeQualityOk: true
url: "https://github.com/runs-on/action"
homepage: "https://runs-on.com/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["caching", "github-actions", "runners", "aws", "cloudwatch", "metrics", "monitoring", "rust"]
stars: 18
forks: 9
openIssues: 2
closedIssues: 16
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2024-12-19T12:16:33Z"
lastCommitAt: "2026-10-11T10:15:54Z"
lastReleaseAt: "2026-07-02T07:23:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 73
maintainers: ["crohr", "afreyermuth98", "garysassano"]
openGraphImageUrl: "https://opengraph.githubassets.com/c948a896c03251e081aabdae93eb4a238ad87041613f3d3f2bd5f3c5dfb92ab7/runs-on/action"
---

# runs-on/action

RunsOn Action for magic caching, and more. This action is required if you are using the magic caching feature of [RunsOn](https://runs-on.com) (`extras=s3-cache` job label).

## Usage

```yaml
jobs:
  build:
    runs-on: runs-on=${{ github.run_id }}/runner=2cpu-linux-x64/extras=s3-cache
    steps:
      - uses: runs-on/action@v2
      - other steps
```

When RunsOn fails a job because AWS is reclaiming its EC2 Spot instance, the
post step skips all of its work (cost report, metrics summary, and sticky cache
shutdown). The runner then has time to report the interruption before the
instance shuts down, and RunsOn discards the sticky disk changes of an
interrupted job anyway.

## Options

### `show_env`

Show all environment variables available to actions (used for debugging purposes).

```yaml
jobs:
  build:
    runs-on: runs-on=${{ github.run_id }}/runner=2cpu-linux-x64/extras=s3-cache
    steps:
      - uses: runs-on/action@v2
        with:
          show_env: true
```

Possible values:

* `true` - Show all environment variables
* `false` - Don't show environment variables (default)

### `show_costs`

Displays how much it cost to run that workflow job, and…
