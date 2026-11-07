---
repo: "openmasq/openmasq"
name: "openmasq"
description: "Privacy-first desktop chat for multiple LLMs: sensitive values are redacted on-device before any network call, and restored in the reply. Your own keys, a local model, or a CLI subscription. The engine ships on npm as @openmasq/redact."
readmeQualityOk: true
url: "https://github.com/openmasq/openmasq"
homepage: "https://openmasq.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai", "anonymization", "data-protection", "desktop-app", "electron", "gdpr", "llm", "local-first", "mcp", "on-device"]
stars: 8
forks: 1
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-01T09:14:05Z"
lastCommitAt: "2026-11-07T22:52:54Z"
lastReleaseAt: "2026-10-04T09:43:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 76
undervaluedScore: 44
maintainers: ["tgaudibert", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5054c580baf0d9670b93b26d8ce57ee016ddcbe0340b6e5182469ee11cde27b/openmasq/openmasq"
discussionCount: 0
---

# OpenMasq

**The desktop AI chat that keeps your personal data away from the model.**

OpenMasq is a desktop chat app for OpenAI, Anthropic, Mistral, Google and local models.
Before a message leaves your machine, names, e-mails, phone numbers, IBANs, API keys and
the rest are replaced with believable substitutes. The reply comes back with the real
values put back. Redaction runs on your device, and the code is open source.

[Français](https://github.com/openmasq/openmasq/blob/HEAD/README.fr.md) · [Website](https://openmasq.com) · [Help centre](https://help.openmasq.com) · [Contact](mailto:support@openmasq.com)

> [!NOTE]
> Every screenshot here is a real run of the app on a test profile with made-up data.

## Install

| Platform | Package | |
|---|---|---|
| **macOS** | Apple Silicon and Intel, signed and notarized, updates itself | [Download](https://openmasq.com/download) |
| **Windows** | Windows 10 and later, x64, signed installer, updates itself | [Download](https://openmasq.com/download) |
| **Linux** | No package yet | [Build from source](#build-from-source) |

The published app includes sign-in, sync and models you can use without your own key. A
build from these sources…
