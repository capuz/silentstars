---
repo: "mongodb-labs/cobra2snooty"
name: "cobra2snooty"
description: "Generate cobra docs compatible with the snooty docs tooling"
readmeQualityOk: true
url: "https://github.com/mongodb-labs/cobra2snooty"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["go", "cobra", "golang"]
stars: 7
forks: 6
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 11
recentReleases: 0
createdAt: "2021-06-25T19:30:53Z"
lastCommitAt: "2026-10-05T10:47:33Z"
lastReleaseAt: "2022-03-15T22:26:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 51
maintainers: ["apix-bot[bot]", "dependabot[bot]", "Luke-Sanderson"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4bdcedd88d370c717757f3f6721fc0cb237488322e2b594e6aef693a038a909/mongodb-labs/cobra2snooty"
---

# cobra2snooty

## Generate Snooty docs for the entire command tree

This program can actually generate docs for the `mongocli` command in the MongoDB CLI project

```go
package main

import (
	"log"
	"os"

	"github.com/mongodb/mongocli/internal/cli/root"
	"github.com/mongodb-labs/cobra2snooty"
)

func main() {
	var profile string
	const docsPermissions = 0766
	if err := os.MkdirAll("./docs/command", docsPermissions); err != nil {
		log.Fatal(err)
	}

	mongocli := root.Builder(&profile, []string{})

	if err := cobra2snooty.GenSnootyTree(mongocli, "./docs/command"); err != nil {
		log.Fatal(err)
	}
}
```

This will generate a whole series of files, one for each command in the tree, in the directory specified (in this case "./docs/command")

## License

`cobra2snooty` is released under the Apache 2.0 license. See [LICENSE](https://github.com/mongodb-labs/cobra2snooty/blob/HEAD/LICENSE)
