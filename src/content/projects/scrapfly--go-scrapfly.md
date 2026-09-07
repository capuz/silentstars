---
repo: "scrapfly/go-scrapfly"
name: "go-scrapfly"
description: "Official Go SDK for the Scrapfly platform: web scraping, screenshots, AI extraction, crawling, and a remote anti-bot browser."
readmeQualityOk: true
url: "https://github.com/scrapfly/go-scrapfly"
homepage: "https://scrapfly.io/docs/sdk/golang"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["anti-bot", "anti-detect", "antidetect-browser", "bot-detection", "browser-automation", "cdp", "data-extraction", "extraction-api", "go", "golang"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-08T11:05:21Z"
lastCommitAt: "2026-09-07T07:31:55Z"
lastReleaseAt: "2025-11-26T16:39:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 57
maintainers: ["jjsaunier"]
openGraphImageUrl: "https://opengraph.githubassets.com/0da0cd0a52abc9d703d30b75b9a0ac9b19d63a5952a3a4a57757b8199bad1f1b/scrapfly/go-scrapfly"
---

# Scrapfly Go SDK

Go SDK for [Scrapfly.io](https://scrapfly.io/) web scraping API.

This SDK allows you to easily:
- Scrape the web without being blocked.
- Use headless browsers to access Javascript-powered page data.
- Take screenshots of websites.
- Extract structured data using AI.

For web scraping guides see [our blog](https://scrapfly.io/blog/) and [#scrapeguide](https://scrapfly.io/blog/tag/scrapeguide/) tag for how to scrape specific targets.

## Installation

```bash
go get github.com/scrapfly/go-scrapfly
```

## Quick Intro

1. Register a [Scrapfly account for free](https://scrapfly.io/register)
2. Get your API Key on [scrapfly.io/dashboard](https://scrapfly.io/dashboard)
3. Start scraping: 🚀

```go
package main

import (
	"fmt"
	"log"

	"github.com/scrapfly/go-scrapfly"
)

func main() {
	key := "YOUR_SCRAPFLY_KEY"

	client, err := scrapfly.New(key)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}

	// Create a scrape configuration
	scrapeConfig := &scrapfly.ScrapeConfig{
		URL:        "https://web-scraping.dev/product/1",
		RenderJS:   true,
		Country:    "us",
		Unblocker:  scrapfly.BoolPtr(true),
		ProxyPool:  scrapfly.PublicResidentialPool,
	}…
