---
repo: "scrapfly/typescript-scrapfly"
name: "typescript-scrapfly"
description: "Official TypeScript/JavaScript SDK for the Scrapfly platform: web scraping, screenshots, AI extraction, crawling, and a remote anti-bot browser. Ships to npm, JSR, and Deno."
readmeQualityOk: true
url: "https://github.com/scrapfly/typescript-scrapfly"
homepage: "https://scrapfly.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["anti-bot", "anti-detect", "antidetect-browser", "bot-detection", "browser-automation", "data-extraction", "extraction-api", "headless-browser", "javascript", "nodejs"]
stars: 23
forks: 6
openIssues: 0
closedIssues: 8
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2023-07-18T13:48:33Z"
lastCommitAt: "2026-09-07T07:36:42Z"
lastReleaseAt: "2024-08-22T09:38:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 50
maintainers: ["jjsaunier"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb86d09f3a5159a9410f0899968739c5d8be162653a6c25aada24de4619e377c/scrapfly/typescript-scrapfly"
---

# Scrapfly SDK

`npm install scrapfly-sdk`  
`deno add jsr:@scrapfly/scrapfly-sdk`  
`bunx jsr add @scrapfly/scrapfly-sdk`  

Typescript/Javascript SDK for [Scrapfly.io](https://scrapfly.io/) web scraping API which allows to:

-   Scrape the web without being blocked.
-   Use headless browsers to access Javascript-powered page data.
-   Scale up web scraping.
-   ... and [much more](https://scrapfly.io/docs/scrape-api/getting-started)!

For web scraping guides see [our blog](https://scrapfly.io/blog/) and [#scrapeguide](https://scrapfly.io/blog/tag/scrapeguide/) tag for how to scrape specific targets.

The SDK is distributed through:
- [npmjs.com/package/scrapfly-sdk](https://www.npmjs.com/package/scrapfly-sdk)
- [jsr.io/@scrapfly/scrapfly-sdk](https://jsr.io/@scrapfly/scrapfly-sdk)

## Quick Intro

1. Register a [Scrapfly account for free](https://scrapfly.io/register)
2. Get your API Key on [scrapfly.io/dashboard](https://scrapfly.io/dashboard)
3. Start scraping: 🚀

```javascript
// node 
import { ScrapflyClient, ScrapeConfig } from 'scrapfly-sdk';
// bun
import { ScrapflyClient, ScrapeConfig} from '@scrapfly/scrapfly-sdk';
// deno: 
import { ScrapflyClient, ScrapeConfig } from…
