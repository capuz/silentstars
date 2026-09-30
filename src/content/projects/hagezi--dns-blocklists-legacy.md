---
repo: "hagezi/dns-blocklists-legacy"
name: "dns-blocklists-legacy"
description: "DNS Blocklists in the legacy subdomain and hosts format"
readmeQualityOk: true
url: "https://github.com/hagezi/dns-blocklists-legacy"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["blocklists", "dns", "hosts", "subdomains"]
stars: 54
forks: 4
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 1
createdAt: "2026-06-29T04:10:59Z"
lastCommitAt: "2026-09-30T09:55:16Z"
lastReleaseAt: "2026-09-30T09:57:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 9
maintainers: ["hagezi"]
openGraphImageUrl: "https://opengraph.githubassets.com/45a716fe0def30b2c7c1b5f4ca9cb3631d9b3d2d07a5b06687e5f44702a59504/hagezi/dns-blocklists-legacy"
---

# :zap: DNS Blocklists Legacy

This repo has the host and subdomain versions of my DNS blocklists. They moved over from the [main repository](https://github.com/hagezi/dns-blocklists).

Want details on the individual lists? Check the [README in the main repo](https://github.com/hagezi/dns-blocklists/blob/main/README.md).

> [!NOTE]
> **Heads up:** not every list plays nice with the old-school "Stone Age" subdomain/host format. Here's the deal: these formats are just plain inefficient, since every single relevant subdomain has to be spelled out by hand. That means they can't reliably catch generic, dynamic, or previously unknown subdomains, so the coverage is always going to have gaps.
>
> **The tricky part?** These formats can look complete on the surface, even though they're nowhere close to covering everything in practice. So don't let that false sense of security fool you. If you're relying on this format alone, you're likely missing subdomains you don't even know exist yet.
>
> **That's exactly why not all list types are available in the subdomain and host format**. It's simply not built to handle every use case, especially when it comes to dynamic or growing domain…
