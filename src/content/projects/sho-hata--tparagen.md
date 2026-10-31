---
repo: "sho-hata/tparagen"
name: "tparagen"
description: "tparagen inserts the T.Parallel() method from the testing package into a test function in a specific source file or an entire directory."
readmeQualityOk: true
url: "https://github.com/sho-hata/tparagen"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["golang"]
stars: 26
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-08-04T14:05:18Z"
lastCommitAt: "2026-10-31T01:59:46Z"
lastReleaseAt: "2026-07-04T14:24:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["sho-hata", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a9d38ae10433d97e43a57883239b1097f3a5a2bcbcb5258734bbe7f8ec94ec9/sho-hata/tparagen"
---

# tparagen
tparagen inserts the `T.Parallel()` method from the testing package into a test function in a specific source file or an entire directory.

## Background
To run go tests in concurrency, you need to the `T.Parallel()` method from the testing package into the main/sub test you want to run in concurrency.

```go
func SampleTest(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name string
	}{{name: "foo"}}
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			// do anything...
		})
	}
}
```

If there is your application in production already, you must add a `T.Parallel()` into any main/sub test. It is a very time-consuming and tedious task.

## Demo

## Description
tparagen is cli tool for insert the `T.Parallel()` method from the testing package into all main/sub test in specified directory.

Before code is below,

```go
package sample

import (
	"fmt"
	"testing"
)

func SampleTest(t *testing.T) {

	testCases := []struct {
		name string
	}{{name: "foo"}}
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			fmt.Println(tc.name)
		})
	}
}
```

After execute `tparagen`, modified code is below.

```go
package test…
