---
repo: "pulumi/pulumi-go-provider"
name: "pulumi-go-provider"
description: "A framework for building Go Providers for Pulumi"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-go-provider"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 47
forks: 16
openIssues: 47
closedIssues: 108
watchers: 5
contributors: 33
recentReleases: 0
createdAt: "2022-06-27T17:03:35Z"
lastCommitAt: "2026-10-23T09:32:39Z"
lastReleaseAt: "2024-04-01T10:05:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 53
maintainers: ["pulumi-renovate[bot]", "iwahbe", "flostadler"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3a23130a71fbfb2906410a7e30e40606be27f3a8097d3003a3928c2f51cdadc/pulumi/pulumi-go-provider"
---

# pulumi-go-provider

A framework for building Providers for Pulumi in Go.

**Library documentation can be found at** [](https://pkg.go.dev/github.com/pulumi/pulumi-go-provider)

The highest level of `pulumi-go-provider` is `infer`, which derives as much possible from
your Go code. The "Hello, Pulumi" example below uses `infer`. For detailed instructions on
building providers with `infer`, click
[here](https://pkg.go.dev/github.com/pulumi/pulumi-go-provider/infer#section-readme).

## The "Hello, Pulumi" Provider

Here we provide the code to create an entire native provider consumable from any of the
Pulumi languages (TypeScript, Python, Go, C#, Java and Pulumi YAML). This example produces
a simple [Pulumi custom resource](https://www.pulumi.com/docs/iac/concepts/resources/).

```go
import (
	"context"
	"fmt"
	"os"
	"strings"

	"github.com/pulumi/pulumi-go-provider/infer"
)

func main() {
	// We tell the provider what resources it needs to support.
	// In this case, a single custom resource called HelloWorld.
	p, err := infer.NewProviderBuilder().
		WithResources(
			infer.Resource(HelloWorld{}),
		).
		Build()
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}…
