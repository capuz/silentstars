---
repo: "scrapfly/python-scrapfly"
name: "python-scrapfly"
description: "Official Python SDK for the Scrapfly platform: web scraping, screenshots, AI extraction, crawling, and a remote anti-bot browser. Integrates with Scrapy, LlamaIndex, and LangChain."
readmeQualityOk: true
url: "https://github.com/scrapfly/python-scrapfly"
homepage: "https://scrapfly.io/docs/sdk/python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anti-bot", "anti-detect", "antidetect-browser", "bot-detection", "browser-automation", "data-extraction", "extraction-api", "headless-browser", "proxy", "python"]
stars: 62
forks: 17
openIssues: 2
closedIssues: 18
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2020-10-04T01:28:34Z"
lastCommitAt: "2026-09-07T07:33:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 42
maintainers: ["jjsaunier"]
openGraphImageUrl: "https://opengraph.githubassets.com/64a0a50ff0fe57dd79657bef99daa4b604120352c1351084c6bc5675dfec11d3/scrapfly/python-scrapfly"
---

# Scrapfly SDK

## Installation

`pip install scrapfly-sdk`

You can also install extra dependencies

* `pip install "scrapfly-sdk[speedups]"` for brotli compression and msgpack serialization
* `pip install "scrapfly-sdk[parser]"` for the built-in HTML parser (lxml, beautifulsoup4, extruct)
* `pip install "scrapfly-sdk[scrapy]"` for scrapy integration
* `pip install "scrapfly-sdk[browser]"` for the playwright based cloud browser helpers
* `pip install "scrapfly-sdk[browser-use]"` for browser-use agent integration
* `pip install "scrapfly-sdk[webhook-server]"` for a native webhook server using flask
* `pip install "scrapfly-sdk[concurrency]"` kept for compatibility, concurrency needs no extra dependency
* `pip install "scrapfly-sdk[all]"` Everything!

For use of built-in HTML parser (via `ScrapeApiResponse.selector` property) additional requirement of either [parsel](https://pypi.org/project/parsel/) or [scrapy](https://pypi.org/project/Scrapy/) is required.

For reference of usage or examples, please checkout the folder `/examples` in this repository.

This SDK cover the following Scrapfly API endpoints:

* [Web Scraping API](https://scrapfly.io/docs/onboarding#web-scraping-api)
*…
