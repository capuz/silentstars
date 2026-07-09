---
repo: "mgifford/pdf-crawler"
name: "pdf-crawler"
description: "An implementation of simplA11yPDFCrawler in GitHub Pages / Actions"
readmeQualityOk: true
url: "https://github.com/mgifford/pdf-crawler"
homepage: "https://mgifford.github.io/pdf-crawler/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["a11y", "accessibility", "pdf", "pdf-accessibility"]
stars: 5
forks: 1
openIssues: 3
closedIssues: 173
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-09T14:51:14Z"
lastCommitAt: "2026-07-09T20:46:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 63
maintainers: ["github-actions[bot]", "Copilot", "mgifford"]
openGraphImageUrl: "https://opengraph.githubassets.com/929c2f7df775596c8f3bef22999ecd0eb83a7e1342dbcc16082681f9253175f7/mgifford/pdf-crawler"
---

# pdf-crawler

**A free, zero-infrastructure PDF accessibility scanner.**
Point it at any website, it will begin a process that might take an hour to crawl 
your site, discover most of the PDFs and then flag common accessibility issues. 
It then posts a public report of the discoveries. All through a GitHub issue.  
No servers to deploy, no accounts to configure, no software to install.

**How it works in three steps:**

1. Fill out the [web form](https://mgifford.github.io/pdf-crawler/) — it
   creates a GitHub issue titled `SCAN: https://…` with a single click.
2. GitHub Actions crawls the site for up to one hour, analyses every PDF it
   finds, and posts the full results as a comment on that issue.
3. The issue is **automatically closed** once the report is ready.  The report
   is **public**.  Reopen the issue any time to re-run the scan.

---

## What it does

1. **Crawls** a website for PDF (and other document) files using
   [Scrapy](https://scrapy.org).
2. **Maintains a YAML manifest** (`reports/manifest.yaml`) with every
   discovered file's URL, MD5 hash, and accessibility results.  Files whose
   MD5 hash has not changed since the last run are **skipped** automatically.…
