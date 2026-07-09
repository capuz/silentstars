---
repo: "tinfoilsh/tinfoil-go"
name: "tinfoil-go"
description: "Tinfoil Go Client supporting the OpenAI API standard "
readmeQualityOk: true
url: "https://github.com/tinfoilsh/tinfoil-go"
homepage: "https://tinfoil.sh/inference"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-03-07T15:45:57Z"
lastCommitAt: "2026-07-09T20:44:40Z"
lastReleaseAt: "2025-12-05T19:13:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 82
maintainers: ["jdrean", "sachaservan", "milesdai"]
openGraphImageUrl: "https://opengraph.githubassets.com/45351ddd34c42ae2c79c68c595f2d167d46b4cb8bc50ca15f2eae7e842fdde69/tinfoilsh/tinfoil-go"
---

# Tinfoil Go Client

For complete documentation, see the [Go SDK documentation](https://docs.tinfoil.sh/sdk/go-sdk).

## Installation

Add the Tinfoil SDK to your project:

```bash
go get github.com/tinfoilsh/tinfoil-go
```

## Quick Start

The Tinfoil Go client is a wrapper around the [OpenAI Go client v3](https://pkg.go.dev/github.com/openai/openai-go/v3) and provides secure communication with Tinfoil enclaves. It has the same API as the OpenAI client, with additional security features:

- Automatic attestation validation to ensure enclave integrity verification
- Supports [Encrypted HTTP Body Protocol](https://docs.tinfoil.sh/resources/ehbp) to provide direct-to-enclave encrypted communication with attested public keys
- Supports a fallback mode with TLS certificate pinning using attested certificates to provide direct-to-enclave encrypted communication over TLS 

```go
package main

import (
	"context"
	"fmt"
	"log"

    "github.com/openai/openai-go/v3"
    "github.com/openai/openai-go/v3/option"
	"github.com/tinfoilsh/tinfoil-go"
)

func main() {
	// Create a client
	client, err := tinfoil.NewClient(
		option.WithAPIKey("<YOUR_API_KEY>"),
	)
	if err != nil {…
