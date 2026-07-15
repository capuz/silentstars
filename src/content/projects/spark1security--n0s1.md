---
repo: "spark1security/n0s1"
name: "n0s1"
description: "Secret Scanner for Slack, Jira, Confluence, Asana, Wrike, Linear, Zendesk, GitHub, and GitLab"
readmeQualityOk: true
url: "https://github.com/spark1security/n0s1"
homepage: "https://spark1.us/n0s1"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["confluence", "credential-scan", "jira", "leaked-secrets", "scan-tool", "scanner", "secrets-detection", "security", "cve-2023-22515", "security-scanner"]
stars: 78
forks: 19
openIssues: 0
closedIssues: 16
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-10-11T19:57:16Z"
lastCommitAt: "2026-07-15T05:53:53Z"
lastReleaseAt: "2024-07-17T03:41:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["blupants", "spark1security", "mseep-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/42b948f7679ea827a32a25c360170b8f9c52aee9b59a8f9b44542dbdd64d3e65/spark1security/n0s1"
---

[🏠 Homepage][homepage]
[📖 Documentation][docs]
</div>

# n0s1 - Secret Scanner
n0s1 ([pronunciation](https://en.wiktionary.org/wiki/nosy#Pronunciation)) is a secret scanner for Slack, Jira, Confluence, Asana, Wrike, Linear, Zendesk, GitHub and GitLab. It scans all channels/tickets/items/issues within the target platform in search of any leaked secrets in the titles, bodies, messages and comments. It is open-source and it can be easily extended to support scanning many others ticketing and messaging platforms.

See [USER_MANUAL.md](https://github.com/spark1security/n0s1/blob/main/USER_MANUAL.md) to learn how to run a scan.

Secrets are defined by an adaptable configuration file: [regex.yaml](https://github.com/spark1security/n0s1/blob/main/src/n0s1/config/regex.yaml). The scanner loads the configuration and searches for sensitive information, which includes:
* Github Personal Access Tokens
* GitLab Personal Access Tokens
* AWS Access Tokens
* PKCS8 private keys
* RSA private keys
* SSH private keys
* npm access tokens

### Currently supported target platforms:
* Local filesystem
* [Slack](https://slack.com)
* [Jira](https://www.atlassian.com/software/jira)
*…
