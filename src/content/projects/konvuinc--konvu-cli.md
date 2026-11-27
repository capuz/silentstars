---
repo: "KonvuInc/konvu-cli"
name: "konvu-cli"
description: "Konvu CLI - Security vulnerability management from your terminal"
readmeQualityOk: true
url: "https://github.com/KonvuInc/konvu-cli"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-03-09T22:35:35Z"
lastCommitAt: "2026-11-27T16:25:46Z"
lastReleaseAt: "2026-07-21T00:34:12Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 63
maintainers: ["antoinegaubil", "hedi-cmd", "reasoningsec"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee030d03b289a8564237f070a815a624ed61907d5acd8d57f7fa2b74ebcfb981/KonvuInc/konvu-cli"
---

# Konvu CLI

Give agents a security model of your codebase.

Inventory turns a repository into a source-linked Security Context Graph: its sensitive
endpoints, objects, and fields; the roles associated with them; and the
controls that protect them. Build this agent-ready context without creating a
Konvu account. Connect an account later to browse findings, track posture, or
trigger remediation from the CLI.

| I want to… | Konvu account | Credential | Start here |
|---|---:|---|---|
| Give agents a security model of my repository | Not required | Your OpenAI API key (usage billed by OpenAI) | [Build a security map](#build-an-agent-ready-security-map-no-konvu-account) |
| Work with findings managed by Konvu | Required | Konvu login or API key | [Connect to Konvu](#connect-to-konvu-optional) |

## Installation

Choose any installation method below. Installing the CLI does not create or
require a Konvu account.

### Install with Go

Requires [Go 1.25+](https://go.dev/dl/) and git access to the repository.

```bash
go install github.com/KonvuInc/konvu-cli/cmd/konvu@latest
```

This places the `konvu` binary in `$GOBIN` (defaults to `~/go/bin`).

Verify it works:
