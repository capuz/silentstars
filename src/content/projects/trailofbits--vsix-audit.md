---
repo: "trailofbits/vsix-audit"
name: "vsix-audit"
description: "Security scanner for VS Code extensions"
readmeQualityOk: true
url: "https://github.com/trailofbits/vsix-audit"
homepage: "https://www.npmjs.com/package/@trailofbits/vsix-audit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["security", "vscode", "vscode-extension"]
stars: 60
forks: 9
openIssues: 2
closedIssues: 6
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2026-01-27T05:49:14Z"
lastCommitAt: "2026-10-31T19:01:24Z"
lastReleaseAt: "2026-05-22T19:25:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 37
maintainers: ["dependabot[bot]", "dguido", "0xmichalis"]
openGraphImageUrl: "https://opengraph.githubassets.com/630e061e7da9fefa2880f0c3e4b50df0bdbe4b676e047d7dff09fb2a4776b823/trailofbits/vsix-audit"
---

# vsix-audit

Security scanner for VS Code extensions. Detects malicious extensions before installation by analyzing code patterns, indicators of compromise, and known malware signatures.

## The Problem

VS Code extensions run with full trust and the same permissions as the editor itself. Malicious extensions have been found in both the official Microsoft marketplace and OpenVSX:

- **Credential theft** - SSH keys, browser cookies, password manager databases
- **Cryptocurrency theft** - Wallet files, clipboard hijacking for addresses
- **Source code exfiltration** - Stealing proprietary code via Discord webhooks
- **Cryptominers and RATs** - CoinIMP miners, ScreenConnect RATs, multi-stage loaders
- **Self-propagation** - GlassWorm spread by modifying installed extensions

## Detection Modules

The scanner runs 9 first-class detection modules against each extension. The legacy
`package` module selector remains as a compatibility alias for `manifest`, `execution`,
`deps`, and `intel`.

### Manifest, Execution, Dependency, And Intel Analysis (`package.ts`)

Examines `package.json`, extension manifest behavior, runtime execution patterns, and
package-related threat intelligence.

|…
