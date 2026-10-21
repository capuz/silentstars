---
repo: "DrBradStanfield/roadmap"
name: "roadmap"
description: "Health by Dr Brad: a free, local-first personal health record and preventive health plan. Your data stays in one JSON file in your own cloud. Hosted MCP server for Claude and ChatGPT, plus an offline CLI."
readmeQualityOk: true
url: "https://github.com/DrBradStanfield/roadmap"
homepage: "https://drstanfield.com/pages/roadmap"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["chatgpt", "claude", "fhir", "health-records", "lab-results", "local-first", "mcp", "mcp-server", "model-context-protocol", "personal-health-record"]
stars: 9
forks: 3
openIssues: 16
closedIssues: 122
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-01-29T03:31:28Z"
lastCommitAt: "2026-10-21T08:42:36Z"
lastReleaseAt: "2026-10-20T23:50:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 70
maintainers: ["DrBradStanfield"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bcfeefd5af18d2cccaad4aab54fc0a3444ee8cae6487caa978185da4d415d8f/DrBradStanfield/roadmap"
---

# Health by Dr Brad

A free health roadmap. Enter your measurements and blood test results, and it
shows which screening tests are due, with evidence-based suggestions and their
citations. Use it at https://drstanfield.com/pages/roadmap, no account needed.
Connect it to [Claude](https://drstanfield.com/blogs/guides/connect-claude) or
[ChatGPT](https://drstanfield.com/blogs/guides/connect-chatgpt) with the connector
URL `https://mcp.drstanfield.com/mcp`. Your record is one file,
`health-roadmap.json`, in your own Dropbox or Google Drive or your browser; our
server never keeps it.

Health-metric tracking with personalized suggestions, delivered as a Shopify
storefront theme extension and as a self-hosted page.

**Local-first.** A user's health data lives in their own cloud (Google Drive,
Dropbox, GitHub, WebDAV) or in localStorage, as a single `health-roadmap.json`
file. The website and the local tools never send that file to our server; the hosted
connector at `mcp.drstanfield.com` holds it in server memory for the length of one
request and stores none of it. "Logged in" means a cloud provider is
connected. The Fly backend is thin: chatbot, lab-import extraction, A/B and
product…
