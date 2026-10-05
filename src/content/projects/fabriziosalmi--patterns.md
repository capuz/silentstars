---
repo: "fabriziosalmi/patterns"
name: "patterns"
description: "Automated OWASP CRS and Bad Bot Detection for Nginx, Apache, Traefik and HaProxy"
readmeQualityOk: true
url: "https://github.com/fabriziosalmi/patterns"
homepage: "https://fabriziosalmi.github.io/patterns/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bad-requests", "caddy", "caddyserver", "firewall-configuration", "firewall-rules", "malicious-url-detection", "owasp", "waf", "web-application-firewall", "apache"]
stars: 315
forks: 8
openIssues: 4
closedIssues: 33
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2024-12-21T00:00:15Z"
lastCommitAt: "2026-10-05T10:47:07Z"
lastReleaseAt: "2026-10-02T00:49:26Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 43
maintainers: ["fabriziosalmi", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/906448944/deaa0f80-3156-479f-afd3-d71562dcea25"
fundingLinks: ["GITHUB:https://github.com/fabriziosalmi"]
discussionCount: 2
---

Automated <a href="https://github.com/coreruleset/coreruleset">OWASP Core Rule Set</a> and
    bad-bot patterns, converted into native configurations for
    &mdash; refreshed every day.
    &middot;
    &middot;

---

## Why Patterns

The OWASP Core Rule Set (CRS) is the de-facto open-source rule base behind ModSecurity, but plugging it into anything other than Apache is non-trivial. Patterns automates the whole pipeline:

1. Pull the latest CRS rules straight from upstream.
2. Convert them into the **native** syntax of each web server &mdash; not a generic shim.
3. Package the output as ready-to-deploy archives, refreshed every day by GitHub Actions.

The output covers SQL injection, XSS, RCE, LFI, RFI and protocol violations. What it stops is measured, not claimed: see [What this catches](#what-this-catches).

## What this catches

A ModSecurity rule is not only a regular expression. It also carries a
transformation chain (`t:urlDecodeUni`, `t:htmlEntityDecode`, ...) that the
pattern is written to run *after*, and an anomaly score that lets several weak
signals accumulate before anything is refused. An `nginx` `map` has neither. It
matches one regex against one raw request…
