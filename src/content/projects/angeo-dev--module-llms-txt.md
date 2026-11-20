---
repo: "angeo-dev/module-llms-txt"
name: "module-llms-txt"
description: "Make your Magento 2 catalog readable to AI. Generates spec-compliant llms.txt, llms-full.txt, llms.jsonl and on-the-fly Markdown page mirrors so ChatGPT, Claude, Gemini & Perplexity can ingest your store efficiently. Multi-store, Page Builder-aware, large-catalog safe. CLI, cron, admin. Free & MIT."
readmeQualityOk: true
url: "https://github.com/angeo-dev/module-llms-txt"
homepage: "https://angeo.dev/"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["aeo", "ai-search", "llms-txt", "magento", "magento2", "perplexity", "ai-engine-optimization", "ai-visibility", "ai-visibility-tracker", "chatgpt"]
stars: 18
forks: 9
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-27T18:27:27Z"
lastCommitAt: "2026-11-20T12:05:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["XxXgeoXxX", "lbajsarowicz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c32cf32aa14e374b153ffe280761913eb2630dd1a04f5d4e322a8b8e57b4bcfd/angeo-dev/module-llms-txt"
---

# Angeo LLMs.txt — Magento 2 Module

**Answer Engine Optimization (AEO) for Magento 2 / Adobe Commerce.** Generates
spec-compliant `llms.txt`, `llms-full.txt`, and JSONL files so ChatGPT,
Claude, Gemini, Perplexity, and other LLM-powered crawlers can ingest your
catalog efficiently.

> **Current version: 5.0.0** — security release. Generated files move from
> `pub/media` to `var/` and are served only through the module. Stores with
> Catalog Permissions, Shared Catalog or Website Restrictions are not published
> unless you allow it. Catalog text can no longer inject markdown links or
> headings. **Breaking changes** — read [Upgrading to 5.0.0](#upgrading-to-500)
> before deploying.
>
> **4.3.3** — build fix: removed the PHPStan stub file
> that `setup:di:compile` could load. No functional changes.
>
> **4.3.0** — fixes an empty blockquote in the generated
> files, finishes the `Sitemap:` line in agents.md, and adds router integration
> tests. No breaking changes.
>
> **4.2.0** — reads salable status through Multi-Source
> Inventory when MSI is installed, so availability is correct on stores with
> more than one stock. No breaking changes.
