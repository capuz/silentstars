---
repo: "aegif/NemakiWare"
name: "NemakiWare"
description: "Light-weight, highly customizable Permission-aware document repository for RAG"
readmeQualityOk: true
url: "https://github.com/aegif/NemakiWare"
homepage: "http://nemakiware.com/"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [60, 26]
topics: ["cmis-server", "nosql", "java", "cmis", "couchdb"]
stars: 60
forks: 24
openIssues: 26
closedIssues: 137
watchers: 9
contributors: 13
recentReleases: 0
createdAt: "2013-05-08T09:14:39Z"
lastCommitAt: "2026-07-08T05:43:14Z"
lastReleaseAt: "2015-06-19T06:43:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 55
maintainers: ["yumioka"]
openGraphImageUrl: "https://opengraph.githubassets.com/73c83c3b61f2b106548503b5d9e84e917eac4066ff4072fbfab27cb171ec88c2/aegif/NemakiWare"
---

# NemakiWare

**Permission-aware document repository for RAG** — an open source platform that stores documents with fine-grained access control and makes them searchable via semantic vector search, ready to plug into any LLM pipeline.

## Why NemakiWare?

Building RAG on top of file storage or generic databases means bolting on permissions after the fact. NemakiWare solves this at the repository layer: every document, every chunk, every search result is governed by the same ACL model. Your LLM only sees what the requesting user is allowed to see.

- **ACL-filtered semantic search** — vector search results are filtered by the current user's permissions in real time
- **Automatic chunking & embedding** — upload a document and it is chunked, embedded, and indexed with zero extra work
- **MCP server built in** — connect Claude, ChatGPT, or any MCP-compatible agent directly to your repository
- **Bring your own embeddings** — Hugging Face TEI (self-hosted) or Amazon Bedrock (managed)
- **Full document lifecycle** — versioning, relationships, retention, archival to S3 cold storage
- **Modern React UI** — browse, search, manage users/groups, configure everything from the browser

##…
