---
repo: "Giglium/vinted_scraper"
name: "vinted_scraper"
description: "A very simple Python package for scraping Vinted. Supports both synchronous and asynchronous operations with automatic session management and typed responses."
readmeQualityOk: true
url: "https://github.com/Giglium/vinted_scraper"
homepage: "https://giglium.github.io/vinted_scraper/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["python", "vinted"]
stars: 83
forks: 20
openIssues: 1
closedIssues: 52
watchers: 8
contributors: 8
recentReleases: 0
createdAt: "2023-07-17T20:56:25Z"
lastCommitAt: "2026-09-16T08:44:04Z"
lastReleaseAt: "2024-04-06T20:05:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["Giglium", "dependabot[bot]", "edoardoCame"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5e2895681a5b36b94689f8bb25f7ea87d33183145e84f009b3ca5e51f559a6b/Giglium/vinted_scraper"
---

# Vinted Scraper

A very simple Python package for scraping Vinted. Supports both synchronous and asynchronous operations with automatic cookie management and typed responses.

📖 **[Full Documentation](https://giglium.github.io/vinted_scraper/vinted_scraper.html)** | 💡 **[Examples](https://github.com/Giglium/vinted_scraper/tree/main/examples)** | 📝 **[Changelog](https://github.com/Giglium/vinted_scraper/releases)**

## Installation

Install using pip:

```shell
pip install vinted_scraper
```

## Functions

The package offers the following methods:

<details>
 <summary><code>search</code> - <code>Gets all items from the listing page based on search parameters.</code></summary>

**Parameters**

> | name   | type     | data type | description                                    |
> | ------ | -------- | --------- | ---------------------------------------------- |
> | params | optional | Dict      | Query parameters like the pagination and so on |

**Returns:** `List[VintedItem]` (VintedScraper) or `Dict[str, Any]` (VintedWrapper)

</details>

<details>
 <summary><code>item</code> - <code>Reads item metadata (title, description, url, image) from the public item…
