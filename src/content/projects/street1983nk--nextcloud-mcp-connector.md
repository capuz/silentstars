---
repo: "street1983nk/nextcloud-mcp-connector"
name: "nextcloud-mcp-connector"
description: "Curated MCP server for Nextcloud: files, calendar, notes, deck and contacts as read-first tools. Never deletes, overwrites or re-shares."
readmeQualityOk: true
url: "https://github.com/street1983nk/nextcloud-mcp-connector"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 7
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-14T15:46:03Z"
lastCommitAt: "2026-09-11T08:15:20Z"
lastReleaseAt: "2026-08-25T18:29:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 62
maintainers: ["street1983nk"]
openGraphImageUrl: "https://opengraph.githubassets.com/083532e798484c9732b7c0dcfc0bfa66ce1c44cd2f4d756b7eda3d1b27457f98/street1983nk/nextcloud-mcp-connector"
---

**English** | [Deutsch](https://github.com/street1983nk/nextcloud-mcp-connector/blob/HEAD/README.de.md) | [Français](https://github.com/street1983nk/nextcloud-mcp-connector/blob/HEAD/README.fr.md)

# MCP Connector for Nextcloud

A curated MCP server that connects your Nextcloud (files, calendar, notes, Deck, contacts,
Tables, Talk and Mail) to AI assistants such as Claude, Cursor, ChatGPT or your own agents.
Installed as a Nextcloud ExApp, it is its own OAuth 2.1 authorization server as well.

**Findling + Nextcloud MCP Connector = the retrieval layer for your own RAG.**
[Findling](https://apps.nextcloud.com/apps/findling) makes the content of your documents
searchable, scans included. The connector hands those hits to any MCP client, with exactly
the rights of the asking user; measured in
[tests/integration/test_content_hit_fidelity.py](https://github.com/street1983nk/nextcloud-mcp-connector/blob/HEAD/tests/integration/test_content_hit_fidelity.py).
You bring the model, and no content leaves your server.

## What it does

- 21 tools across nine app families: files, calendar, notes, Deck, contacts, Tables, Talk,
  Mail and cloud wide search
- OAuth 2.1 to the MCP authorization…
