---
repo: "hajimehoshi/ekuma"
name: "ekuma"
description: "A JavaScript engine in pure Go"
readmeQualityOk: true
url: "https://github.com/hajimehoshi/ekuma"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "golang", "javascript"]
stars: 121
forks: 4
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-11-13T18:03:37Z"
lastCommitAt: "2026-11-27T16:25:05Z"
lastReleaseAt: "2026-11-27T15:38:03Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 32
maintainers: ["hajimehoshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c9475631e980b56416428a23bddc46da2b30403667cca567c91b0e1acdc0c94/hajimehoshi/ekuma"
---

# Ekuma

Ekuma is a JavaScript engine written in pure Go. Its bytecode interpreter runs without a JIT. It
implements nearly all of ES2026. The Go API is unstable. See [Status](#status).

```go
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/hajimehoshi/ekuma"
)

func main() {
	var vm ekuma.VM
	script, err := vm.ParseScript("hello.js", `"Hello, " + ["wor", "ld"].join("")`)
	if err != nil {
		log.Fatalf("parse: %v", err)
	}
	result, err := script.Evaluate(context.Background())
	if err != nil {
		log.Fatalf("evaluate: %v", err)
	}
	fmt.Println(result.String()) // Hello, world
}
```

The zero value of `ekuma.VM` is ready to use. A `VM` must not be copied after first use.
