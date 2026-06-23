---
repo: "sslboard/throwaway"
name: "throwaway"
description: "An open source Cloudflare Worker app and API to check if email addresses are throwaway/disposable or valid"
url: "https://github.com/sslboard/throwaway"
homepage: "https://throwaway.sslboard.com/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [51, 31]
stars: 45
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-30T03:58:20Z"
lastCommitAt: "2026-06-23T06:42:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 38
maintainers: ["chrisDeFouRire"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bbf34a980350db227abdd6c50a4fcb7a379550847bc7076fc7d3528ced523ad/sslboard/throwaway"
---

# throwaway

A Cloudflare Worker that detects disposable/temporary email domains, invalid TLDs, and non-existent domains (no MX records), exposed as a fast JSON API. Ships 72K+ domains in a ~173KB binary bloom filter. Uses [tldts](https://github.com/nicolo-ribaudo/tldts) for TLD validation and Cloudflare DNS-over-HTTPS for MX resolution. Includes a clean web UI at `/` for quick checks, `/llms.txt` for AI agent discovery, OpenAPI/catalog metadata, no-auth documentation, and MCP-compatible tool discovery.

**Live deployment:** [throwaway.sslboard.com](https://throwaway.sslboard.com)

## Honest context

**This project was written almost entirely by AI.** I needed a disposable-email checker for [SSLBoard](https://sslboard.com) (a free cybersecurity assessment tool) and I used Claude to build it. I'm sharing it as open source because the underlying approach (a binary bloom filter served from a Cloudflare Worker, with DNS checks but no paid external API dependency) is genuinely useful and I haven't seen it done this way before.

I understand the code, I can maintain it, and I'm happy to be accountable for it. But I'd rather be upfront than have someone dig through the commit history…
