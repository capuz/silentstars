---
repo: "alpadalar/ActiveDirectoryMCP"
name: "ActiveDirectoryMCP"
description: "MCP server for Active Directory over LDAP: users, groups, computers, OUs and security auditing."
readmeQualityOk: true
url: "https://github.com/alpadalar/ActiveDirectoryMCP"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["active-directory", "fastmcp", "ldap", "mcp", "mcp-server", "model-context-protocol", "python"]
stars: 52
forks: 13
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2025-08-14T13:54:57Z"
lastCommitAt: "2026-10-21T08:49:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68f0ee8a62f52438c416e2cf3ac81b8da875656845f1a1187df5b56589d5f75a/alpadalar/ActiveDirectoryMCP"
---

# ActiveDirectoryMCP

A Model Context Protocol (MCP) server that exposes Active Directory (LDAP) administration and
auditing to MCP clients such as Claude Desktop, Claude Code and Cursor. It offers 45 tools for
users, groups, computers, organizational units, domain security reporting and server diagnostics,
over stdio or authenticated HTTP.

Status: the repository is public; the v1.0.0 release is not tagged yet. The
server is tested against a mocked LDAP harness (unit and end-to-end tests) and against an OpenLDAP
lab, which is not Active Directory. Checks against a live Active Directory domain are the
responsibility of the operator before relying on it in production.

## What it does and what it does not do by default

- Read tools (list, get, report, audit, diagnostics) work out of the box.
- The server is read-only by default. Create, modify, enable, disable, reset and membership tools
  are refused until `security.allow_writes` is true. Delete tools additionally need
  `security.allow_destructive`.
- The HTTP transport refuses to start without an API key and answers `401` to every request that
  does not present one (only `GET /health` is open).
- List and report tools return…
