---
repo: "randomparity/rusty-imap-mcp"
name: "rusty-imap-mcp"
description: "Security First IMAP MCP Server for Agentic Use"
readmeQualityOk: true
url: "https://github.com/randomparity/rusty-imap-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 6
forks: 1
openIssues: 36
closedIssues: 350
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-07T17:02:53Z"
lastCommitAt: "2026-08-07T05:14:17Z"
lastReleaseAt: "2026-07-10T23:12:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure"]
healthScore: 98
undervaluedScore: 58
maintainers: ["randomparity", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dfdd479bd426a7cc621a3947b5db7dc78c174c6bda211a127b8bffad86ad1e8/randomparity/rusty-imap-mcp"
---

# rusty-imap-mcp

A security-first [Model Context Protocol](https://modelcontextprotocol.io/)
server for IMAP email, written in Rust.

## Why this exists

LLM agents with email access are targets for prompt injection. A single
crafted message can contain hidden instructions that cause an agent to
send mail, leak data, or pivot to other tools. Most MCP email servers
pass raw message content straight to the model.

rusty-imap-mcp treats every byte of email content as untrusted input.
Messages are parsed, sanitized, normalized, and structurally tagged
before reaching the agent — so the model sees clean content with
security metadata, not raw attack surface.

## Features

### Content defense

- HTML sanitization with hidden-element stripping (CSS `display:none`,
  `visibility:hidden`, `opacity:0`, white-on-white text)
- Unicode NFKC normalization and invisible character stripping
  (zero-width, bidi overrides, C0/C1 controls)
- Look-alike detection: mixed-script domains, confusable skeletons,
  display-name spoofing, reply-to mismatch, filename bidi tricks
- Structured response envelope separating trusted `meta` from
  `untrusted` content and `security_warnings`
- Mailing list…
