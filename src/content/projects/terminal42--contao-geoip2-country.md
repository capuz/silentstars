---
repo: "terminal42/contao-geoip2-country"
name: "contao-geoip2-country"
description: "Detect country of visitor and protect elements in Contao"
readmeQualityOk: true
url: "https://github.com/terminal42/contao-geoip2-country"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-08-12T06:59:04Z"
lastCommitAt: "2026-09-21T09:13:17Z"
lastReleaseAt: "2022-04-11T11:22:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 45
maintainers: ["aschempp"]
openGraphImageUrl: "https://opengraph.githubassets.com/58473e53d9bb51a07ba4f7d8fd81ff4032cd56ef43cc6e6da023a53a04c20159/terminal42/contao-geoip2-country"
fundingLinks: ["GITHUB:https://github.com/terminal42", "KO_FI:https://ko-fi.com/terminal42"]
---

# terminal42/contao-geoip2-country

This Contao extension finds the country from the client IP.
The website can then be customized based on this information.

This extension requires the [MaxMind GeoIP2 database](https://www.maxmind.com/en/geoip2-databases),
either the _GeoIP2 Country_ or _GeoLite2 Country_ database. Be aware that you might
need a commercial license of this product depending on your use case!

## Features

1. **Limit content based on the user country**<br>
   By default, visibility for pages, articles, content elements and front end modules can be set for the country.
   For each content, you can either show only to or hide it from a list of countries.

2. **Root page routing based on the user country**<br>
   GeoIP routing in the page tree allows you to define what root page a visitor will be redirected
   to based on their country.

3. **Symfony HTTP Reverse Proxy**<br>
   Integrated support for the Symfony HTTP Reverse Proxy allows a page to be cached
   for each country by using `Vary` headers. Without a supported reverse proxy, responses with
   country-specific content are automatically set to `Cache-Control: private`.

   This will be automatically…
