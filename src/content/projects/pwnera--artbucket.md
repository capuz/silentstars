---
repo: "pwnera/artbucket"
name: "artbucket"
description: "Open-source, self-hosted DAM and brand manager: assets, guidelines as data and brand portals, for your team and AI agents (MCP, REST, CLI)."
readmeQualityOk: true
url: "https://github.com/pwnera/artbucket"
homepage: "https://artbucket.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "ai-agents", "brand-assets", "brand-guidelines", "brand-identity", "brand-portal", "branding", "claude-code", "dam", "digital-asset-management"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-26T20:17:54Z"
lastCommitAt: "2026-10-05T10:46:50Z"
lastReleaseAt: "2026-10-03T12:41:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 51
maintainers: ["aminekaabachi", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b4c5cb6baefc1d713e822b8c3cf91fc889d38aa3b1718013067e6730bc12a31/pwnera/artbucket"
discussionCount: 0
---

# Artbucket

----

**Your brand's source of truth, open source.**

Which logo is current? What colors should an agent use? Is this photo cleared
for paid social in Germany?

Artbucket keeps a brand's assets, rules, rights and releases together, and
gives the same answer to people, AI agents and code. People read it in the web
app and on portals, agents query it over MCP, code consumes it through the API,
the CLI and Git.

**Web app · MCP · REST API · CLI · Git**

[Try Artbucket Cloud][Artbucket Cloud] · [Live brand page] · [Docs] · [Run it yourself](#run-it-yourself)

----

## Your brand is an API

Find the asset, ask whether it may run, get it at the size you need:

```console
$ npx artbucket search primary logo
{id}  logo-primary.svg  #logo #primary

$ npx artbucket check {spring-hero} --channel paid-social --territory DE
refused  Spring hero
  x Replaced by Summer hero
  x License expired after 2026-03-12
  → Summer hero  https://assets.example.com/a/{summer-hero}  (Its replacement)

$ npx artbucket url {id} --width 1200 --format webp
https://assets.example.com/a/{id}/w_1200,f_webp
```

Agents make the same calls over MCP (`search_assets`, `check_use`,
`rendition_url`), and…
