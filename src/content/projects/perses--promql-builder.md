---
repo: "perses/promql-builder"
name: "promql-builder"
description: "A library to build PromQL expression in Golang."
url: "https://github.com/perses/promql-builder"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["prometheus", "promql"]
stars: 32
forks: 3
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2025-02-02T14:11:52Z"
lastCommitAt: "2026-07-03T06:23:08Z"
lastReleaseAt: "2025-10-14T14:14:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 45
maintainers: ["heliapb", "dependabot[bot]", "Nexucis"]
openGraphImageUrl: "https://opengraph.githubassets.com/13fb4b185ddf3f2277ba64437024270e8f3e666ccd972b5ee06df3bf6b58773c/perses/promql-builder"
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
