---
repo: "dagd/dagd"
name: "dagd"
description: "A URL shortener with various other utilities, backed by a custom lightweight framework. We are moving to Codeberg: https://codeberg.org/dagd/dagd"
readmeQualityOk: true
url: "https://github.com/dagd/dagd"
homepage: "https://da.gd"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["url-shortener", "utility", "network", "website", "php"]
stars: 129
forks: 21
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 7
recentReleases: 0
createdAt: "2011-07-30T08:31:11Z"
lastCommitAt: "2026-07-28T14:56:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 69
undervaluedScore: 28
maintainers: ["relrod"]
openGraphImageUrl: "https://opengraph.githubassets.com/4413244fb577a015a858d4692d6e9fecbaab33882581be58171ae2b0616bf70b/dagd/dagd"
---

# da.gd

### Note

The da.gd upstream has moved to [Codeberg](https://codeberg.org/dagd/dagd). The
GitHub repository remains a read-only mirror as of June, 2026.

## What is da.gd?

da.gd is both a URL shortener and a collection of quick-info tools, written in
PHP and backed by a custom, lightweight framework.

The production site is https://da.gd/ - which primarily brands itself as a URL
shortener. Each URL is checked by multiple safe-browsing APIs in an effort to
combat phishing attempts. Additionally, our volunteer abuse-response team is
very active and quick to take down short URLs in the production site which
lead to phishing sites or other malicious content.

da.gd allows you to use `curl` (or any other http client) to quickly retrieve
various kinds of information such as your IP, useragent, whois for a given
domain or IP, DNS lookups, etc., from an easy-ish-to-remember URL.

Because a goal of this project is to have it work for many purposes/situations,
I encourage feedback, ideas, participation, and interaction with this project.
Have some fun with it :)

Apps are fairly easy to build atop the framework, although the framework is not
currently documented in any meaningful…
