---
repo: "anondotli/anon.li"
name: "anon.li"
description: "Privacy toolkit: anonymous email forwarding, zero-knowledge E2EE file sharing, and encrypted forms."
readmeQualityOk: true
url: "https://github.com/anondotli/anon.li"
homepage: "https://anon.li"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["aes-256", "agpl-3-0", "alias", "email", "email-alias", "encryption", "end-to-end-encryption", "file-sharing", "file-upload", "nextjs"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-23T16:14:25Z"
lastCommitAt: "2026-11-02T11:52:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 42
maintainers: ["anondotli"]
openGraphImageUrl: "https://opengraph.githubassets.com/627d4a6953d397f4faeb7cd1e9688a96734e21ee7bd475079c1bc0d88874a750/anondotli/anon.li"
promoted: true
---

---

## Why anon.li?

We built anon.li because we were tired of handing our sensitive files and real email addresses to black-box companies. 

- **Email aliases that protect your real inbox - without switching email providers.** Keep using Gmail, Proton, or Fastmail; we just sit in the middle and block the spam.
- **AES-256-GCM encrypted file sharing - we can't read your files, by design.** Your browser encrypts the file before it ever hits the network. The decryption key lives in the URL fragment, so it is never transmitted to our servers.
- **Encrypted forms - collect sensitive responses without putting plaintext in the database.** Form answers and attachments are encrypted in the submitter's browser for the form owner or team.
- **Open-source web application (AGPL v3) - verify the implementation.** Audit the browser cryptography, access controls, REST API, MCP server, and application data model in this repository.

---

## Products

### Alias - Anonymous Email Forwarding
Create unique aliases for every service. Reply from your aliases without ever exposing your real identity. Emails pass through our servers for forwarding instead of being stored in a hosted mailbox.
* 10 random…
