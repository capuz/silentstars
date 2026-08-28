---
repo: "go-monk/from-bash-to-go-part-ii"
name: "from-bash-to-go-part-ii"
description: "Go for Bash Programmers II - CLI Tools"
readmeQualityOk: true
url: "https://github.com/go-monk/from-bash-to-go-part-ii"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["from-bash-to-go-series", "bash"]
stars: 112
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-08-30T08:55:54Z"
lastCommitAt: "2026-08-28T14:23:05Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 18
maintainers: ["jreisinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c1c3c841c816323d986d0c54dd1e77a75a6406b0f036afce0382ec59aa78d1/go-monk/from-bash-to-go-part-ii"
---

> **Get the free ebook:** All parts combined into a single PDF/EPUB. [Download here](https://gomonk.dev/ebook)

---

This is the second part of a series introducing Bash programmers to Go. This part is about basics of writing CLI tools in Go. See the [first](https://github.com/go-monk/from-bash-to-go-part-i) part for the language building blocks.

# Our first CLI tool

Bash is often used to write small CLI tools and automation. Let's start with an example CLI tool that prints "hello" to terminal. The Bash version is pretty simple:

```bash
#!/bin/bash
echo hello
```

Now, let's implement a Go version. We start by creating a directory where the first version of our program will live. We also initialize a module in there:

```sh
$ mkdir -p hello/1
$ cd hello/1
$ go mod init hello
```

Since the program is not complex we don't have to think a lot about its design and can easily start with a test:

```go
// hello/1/hello_test.go
package hello_test

import (
	"hello"
	"testing"
)

func TestPrintExists(t *testing.T) {
	hello.Print()
}
```

We named the package `hello_test` instead of `hello`. This is possible and it allows for writing tests that use only the public API (identifiers…
