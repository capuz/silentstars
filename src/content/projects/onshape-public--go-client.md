---
repo: "onshape-public/go-client"
name: "go-client"
description: "Go bindings for the Onshape API."
url: "https://github.com/onshape-public/go-client"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 13
forks: 12
openIssues: 3
closedIssues: 9
watchers: 7
contributors: 7
recentReleases: 0
createdAt: "2020-04-03T22:43:59Z"
lastCommitAt: "2026-06-27T00:36:40Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 72
maintainers: ["knazarenko-ptc", "ptc-mjacob"]
openGraphImageUrl: "https://opengraph.githubassets.com/71c2e760e6b2c1d14e39dea706e65c8b43544181c1ca37c0b586afc5ccc355f5/onshape-public/go-client"
---

# Go Client for Onshape public API

## The simplest possible thing to try: Creating a document
```Go
package main

import (
	"context"
	"fmt"

	"github.com/onshape-public/go-client/onshape"
)

func main() {
	config := onshape.NewAPIConfiguration()
	config.Debug = true

	client := onshape.NewAPIClient(config)

    // Option 1: API keys
	ctx := context.WithValue(context.Background(), onshape.ContextBasicAuth,
		onshape.BasicAuth{UserName: "your api key", Password: "your secret key"})

    // Option 2: Just set ONSHAPE_API_SECRET_KEY and ONSHAPE_API_ACCESS_KEY in ENV

    // Option 3: Auth token
    // ctx := context.WithValue(ctx, "accesstoken", "your access token")

	docParams := onshape.NewBTDocumentParams()
	docParams.SetName("Name For Your Document")

	docInfo, rawResp, err := client.DocumentsApi.CreateDocument(ctx).BTDocumentParams(*docParams).Execute()

	if err != nil || (rawResp != nil && rawResp.StatusCode >= 300) {
		fmt.Print("err: ", err, " -- Response status: ", rawResp)
	} else {
		fmt.Println("Created a document w/the name: ", docInfo.GetName())
    }
}
```

## The Detailed API Documentation
Could be found [here](./onshape/README.md)

## Breaking Changes
###…
