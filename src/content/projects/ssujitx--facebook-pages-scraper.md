---
repo: "SSujitX/facebook-pages-scraper"
name: "facebook-pages-scraper"
description: "Scrape facebook page information without webdriver or API key."
readmeQualityOk: true
url: "https://github.com/SSujitX/facebook-pages-scraper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["facebook", "facebook-bot", "facebook-page-scraper", "facebook-pages-scraper", "facebook-tools", "facebookscraper", "python", "python-script", "python-scripting", "python3"]
stars: 59
forks: 17
openIssues: 2
closedIssues: 4
watchers: 4
contributors: 1
recentReleases: 2
createdAt: "2024-10-21T00:03:46Z"
lastCommitAt: "2026-09-29T08:10:53Z"
lastReleaseAt: "2026-09-29T08:11:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 51
maintainers: ["SSujitX", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c34be57c690f3857afe3f4ae4c44f16cb5d42cbd98aead67e1a13fa813cc5b6/SSujitX/facebook-pages-scraper"
---

</p>

</p>

# Facebook Pages Scraper

Facebook Pages Scraper reads public Facebook page info and the latest post without a browser or an API key. If you find it useful, please support the package by hitting the star on GitHub. Your support helps keep the project going.

Use **facebook-pages-scraper** for a page name, intro, about text, contact fields, and the latest post. A string returns one result. A list returns one result per page. Works with `pip install facebook-pages-scraper` or `uv add facebook-pages-scraper` on Python 3.11+.

<details>
<summary><strong>Looking for a sponsor</strong></summary>

</details>

## Demo

## How it works

The package fetches the public page HTML with a Chrome-like client, then reads the JSON Facebook embeds in that document.

Page info comes from the profile header and intro cards. Address, the About paragraph, page id, and creation date come from the About tab. The first HTML document includes only the latest post.

Accepted input:

- `bbcnews`
- `https://www.facebook.com/bbcnews`
- `https://web.facebook.com/bbcnews`
- `https://m.facebook.com/bbcnews`

`pizzaburgbd` is a public page that fills the About fields: intro, about text, address, phone,…
