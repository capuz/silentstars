---
repo: "perses/promql-builder"
name: "promql-builder"
description: "A library to build PromQL expression in Golang."
readmeQualityOk: true
url: "https://github.com/perses/promql-builder"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["prometheus", "promql"]
stars: 33
forks: 4
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2025-02-02T14:11:52Z"
lastCommitAt: "2026-09-04T08:09:22Z"
lastReleaseAt: "2025-10-14T14:14:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["heliapb", "dependabot[bot]", "slashpai"]
openGraphImageUrl: "https://opengraph.githubassets.com/e986997383506d35a9bb1849f6e0f5a2cee63d7f9ab65466333c70ea60783551/perses/promql-builder"
---

PromQL Builder
==============

A library to build PromQL expression fully in Golang.

## Usage

### Create an instant vector

To handle this use case, we are providing the package `vector` that proposes various options to create your instant
vector.

For example:

```go
package main

import (
	"fmt"

	"github.com/perses/promql-builder/label"
	"github.com/perses/promql-builder/vector"
)

func main() {
	v1 := vector.New(
		vector.WithMetricName("foo"),
		vector.WithLabelMatchers(
			label.New("namespace").Equal("monitoring"),
			label.New("pod-name").EqualRegexp("prom-.+"),
		),
	)
	fmt.Print(v1.String())
}
```

It will give the following output:

```text
foo{namespace="monitoring",pod-name=~"prom-.+"}
```

### Create a range vector

To handle this usecase, we are providing the package `matrix` that proposes various options to create your range vector.

For example:

```go
package main

import (
	"fmt"

	"github.com/perses/promql-builder/label"
	"github.com/perses/promql-builder/matrix"
	"github.com/perses/promql-builder/vector"
)

func main() {
	v1 := vector.New(
		vector.WithMetricName("foo"),
		vector.WithLabelMatchers(
			label.New("namespace").Equal("monitoring"),…
