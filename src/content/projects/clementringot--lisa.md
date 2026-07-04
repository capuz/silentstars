---
repo: "ClementRingot/LISA"
name: "LISA"
description: "Localization & Internationalization Service for ABAP — an MCP server for translating ABAP objects"
url: "https://github.com/ClementRingot/LISA"
language: "ABAP"
languages: ["ABAP", "TypeScript"]
languagePcts: [62, 30]
topics: ["abap", "ai", "cloud-foundry", "i18n", "localization", "mcp", "model-context-protocol", "sap", "sap-btp", "translation"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-09T11:39:23Z"
lastCommitAt: "2026-07-04T19:20:03Z"
lastReleaseAt: "2026-06-22T21:43:47Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 55
maintainers: ["ClementRingot", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9709770e85d57b3dcb74445f1806a2c13de11064b7239aaf7bb498ea6f8abc8/ClementRingot/LISA"
---

# LISA — Localization & Internationalization Service for ABAP

> Let AI assistants read, write and compare **SAP object translations** through a single, secure MCP server.

**LISA** (Localization & Internationalization Service for ABAP) is a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that lets AI assistants (Claude, Cursor, VS Code, …) manage the translation of SAP repository objects — data elements, domains, CDS views, message classes, class/function-group text pools, and more — without leaving the chat.

For authentication and SAP BTP connectivity it builds on the **same stack as [ARC-1](https://github.com/arc-mcp/arc-1)** — in fact it **depends on** the published [`@arc-mcp/xsuaa-auth`](https://www.npmjs.com/package/@arc-mcp/xsuaa-auth) package (the XSUAA OAuth proxy + BTP principal-propagation layer extracted from ARC-1) rather than re-implementing it, on the same Express / MCP-SDK transport. On top of that, instead of the full ADT toolset, it exposes **3 focused translation tools** backed by a small ABAP HTTP service that wraps SAP's [XCO i18n APIs](https://help.sap.com/docs/btp/sap-business-technology-platform/i18n-apis?locale=en-US).

`LISA`…
