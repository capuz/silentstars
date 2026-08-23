---
repo: "Wh1isper/mcp-email-server"
name: "mcp-email-server"
description: "Full-featured, multi-account MCP email server for Windows, macOS, and Linux—read, search, organize, and send email via IMAP and SMTP."
readmeQualityOk: true
url: "https://github.com/Wh1isper/mcp-email-server"
homepage: "https://mcp-email-server.wh1isper.top"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["email", "mcp", "mcp-server", "email-server", "fastmcp", "imap", "model-context-protocol", "multi-account", "python", "smtp"]
stars: 316
forks: 115
openIssues: 0
closedIssues: 56
watchers: 7
contributors: 31
recentReleases: 0
createdAt: "2025-02-24T12:46:46Z"
lastCommitAt: "2026-08-23T04:09:03Z"
lastReleaseAt: "2025-03-21T11:38:52Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 43
maintainers: ["Wh1isper", "pre-commit-ci[bot]", "flacoste"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f3120bc039a24a23fa7295208000e3a1fb50f7e85cb9329e066e79469b4600a/Wh1isper/mcp-email-server"
fundingLinks: ["GITHUB:https://github.com/Wh1isper"]
---

# mcp-email-server

An MCP server for reading, searching, organizing, and sending email through
IMAP and SMTP.

> [!NOTE]
> Version 1.0.0 introduces Local Email App V2. Updating the package does not
> automatically import existing settings created with PyPI 0.16.0 and earlier:
> they remain active in backward-compatible `legacy` mode, so there is no required
> migration. If you
> would like to use the new managed storage, you can review and import those
> settings whenever it is convenient.

`mcp-email-server` supports Windows, macOS, and Linux. See
[Security](https://github.com/Wh1isper/mcp-email-server/blob/HEAD/docs/security.md) for platform-specific filesystem and credential
storage details.

## Optional migration for existing installations

An `@latest` release that includes Local Email App V2 offers a preview-first
CLI migration:

```bash
uvx mcp-email-server@latest config init \
  --database ~/.config/mcp-email-server/managed.sqlite3
uvx mcp-email-server@latest config import-legacy
uvx mcp-email-server@latest config import-legacy --apply
uvx mcp-email-server@latest config doctor
```

The apply step displays the plan again and asks for `IMPORT` confirmation. A
complete…
