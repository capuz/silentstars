---
repo: "uptimepage/uptimepage"
name: "uptimepage"
description: "Open-source uptime monitoring with a built-in public status page. HTTP/TCP/DNS/TLS + domain-expiry checks, automatic incidents, subscribers, multi-region probes, alerts (Slack/Telegram/webhook/+), a Terraform provider and an MCP server. One free plan. AGPL — self-host with docker compose."
readmeQualityOk: true
url: "https://github.com/uptimepage/uptimepage"
homepage: "https://uptimepage.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["devops", "healthcheck", "monitoring", "observability", "sre", "status-page", "uptime-monitoring", "clickhouse", "incident-management", "mcp"]
stars: 7
forks: 0
openIssues: 25
closedIssues: 71
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-12T08:40:11Z"
lastCommitAt: "2026-07-25T05:57:44Z"
lastReleaseAt: "2026-07-09T04:04:29Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 58
maintainers: ["slima4"]
openGraphImageUrl: "https://opengraph.githubassets.com/b34df31a15b2e49f18ebfa7376d4f9006e149258b4e201d224897194b3d173eb/uptimepage/uptimepage"
---

# uptimepage

**Status pages + uptime monitoring. Open source, free to start. Live in 5 minutes.**

Monitor HTTP, TCP, ICMP ping, cron-job heartbeats, DNS, TLS-certificate and
domain expiry, plus scripted browser login flows, from multiple regions — then
turn green and red into a polished
public status page your customers can subscribe to. Drive it by click, REST
API, or Terraform. Self-host the single binary or use the hosted service.

[**Try it free →**](https://uptimepage.dev)&nbsp;&nbsp;·&nbsp;&nbsp;[Docs](https://uptimepage.dev/docs)&nbsp;&nbsp;·&nbsp;&nbsp;[Self-host](#self-host)&nbsp;&nbsp;·&nbsp;&nbsp;[Terraform](#terraform)&nbsp;&nbsp;·&nbsp;&nbsp;[MCP](#mcp-server)

</div>

## Quick start

Hosted, no install:

1. Sign up at **[uptimepage.dev](https://uptimepage.dev)** with GitHub or Google — no card.
2. Add a monitor: paste a URL, pick a check type and interval, save.
3. Bind a notification channel (Slack, email, PagerDuty, …) so failures reach you.
4. Turn on a public status page and share the link.

Prefer code? Drive the same account by [REST API](https://github.com/uptimepage/uptimepage/blob/HEAD/docs/api.md), [Terraform](#terraform), or [MCP](#mcp-server). Want to…
