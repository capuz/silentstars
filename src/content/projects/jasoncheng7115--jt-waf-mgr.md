---
repo: "jasoncheng7115/jt-waf-mgr"
name: "jt-waf-mgr"
description: "Web manager for nginx + ModSecurity v3 + OWASP CRS: every rule change is checked, sandbox-tested against real traffic and approved before it goes live, with rollback, a hash-chained audit log and an optional self-hosted LLM to triage events."
readmeQualityOk: true
url: "https://github.com/jasoncheng7115/jt-waf-mgr"
homepage: "https://jasoncheng7115.github.io/jt-waf-mgr/"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [68, 24]
topics: ["ai", "llm", "modsecurity", "nginx", "owasp-crs", "security", "waf"]
stars: 14
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-11-12T13:13:20Z"
lastCommitAt: "2026-11-21T13:26:14Z"
lastReleaseAt: "2026-11-13T14:24:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 63
maintainers: ["jasoncheng7115"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1d447a95f0edf90d997848b6fd58589760e6682e2dc698212d219b7596a1217/jasoncheng7115/jt-waf-mgr"
---

# jt-waf-mgr v0.5.30

**English** · [繁體中文](https://github.com/jasoncheng7115/jt-waf-mgr/blob/HEAD/README_zh-TW.md) · [日本語](https://github.com/jasoncheng7115/jt-waf-mgr/blob/HEAD/README_ja.md)

**🌐 [Project site →](https://jasoncheng7115.github.io/jt-waf-mgr/?lang=en)**

> A self-hosted web manager for **nginx + libmodsecurity v3 + OWASP CRS 4**: read what the WAF did, tune it through
> an evidence-checked, sandbox-tested and approved change workflow, let a self-hosted LLM review the events, and get
> notified on Teams, Telegram, Zulip, Slack, Discord, Nextcloud Talk, e-mail or a signed webhook.
>
> By Jason Tools Co., Ltd. · License: AGPL-3.0

---

## Why jt-waf-mgr?

libmodsecurity v3 has no management interface. Rules, exclusions and blocks are configuration files; tuning means
reading JSON audit logs and editing files by hand on a production reverse proxy. jt-waf-mgr turns the audit log into
something you can read, and every change into a workflow you can trust:
