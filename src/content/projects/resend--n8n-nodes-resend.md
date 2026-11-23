---
repo: "resend/n8n-nodes-resend"
name: "n8n-nodes-resend"
description: "Powerful email automation for n8n using Resend 🚀"
readmeQualityOk: true
url: "https://github.com/resend/n8n-nodes-resend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["n8n", "n8n-node", "n8n-nodes", "n8n-webhook", "resend", "resend-email-api", "resendapi"]
stars: 33
forks: 6
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 35
recentReleases: 0
createdAt: "2025-05-26T12:38:30Z"
lastCommitAt: "2026-11-23T12:20:06Z"
lastReleaseAt: "2026-02-10T15:47:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 41
maintainers: ["SilkePilon", "RaphaelFakhri", "joaopcm"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/990654008/26b79999-f451-41fd-b931-196788391015"
discussionCount: 0
---

---

The official node for [n8n](https://n8n.io) that integrates with the [Resend](https://resend.com) API. Send emails, manage contacts, handle domains, and receive webhooks.

## API Coverage

> **Warning**
>
> Audiences are deprecated in favor of Segments and won't be supported in this node. Please use Segments for contact grouping and targeting.

The table below shows which endpoints are currently implemented:

| API Resource           | Endpoint              | Status | Operations                                                                                                                                                |
| ---------------------- | --------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Account**            | `/oauth`, `/usage`    | ✅ Full | Get Usage, Disconnect (OAuth2 credential only), List Grants, Revoke Grant                                                                                 |
