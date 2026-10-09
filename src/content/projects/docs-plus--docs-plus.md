---
repo: "docs-plus/docs.plus"
name: "docs.plus"
description: "Free and open-source real-time collaborative document editor. Hierarchical table of contents, per-heading chat, built on Tiptap, ProseMirror and Yjs."
readmeQualityOk: true
url: "https://github.com/docs-plus/docs.plus"
homepage: "https://docs.plus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
topics: ["collaboration", "collaborative-framework", "collaborative-research", "collaborative-writing", "document", "docx", "libreoffice", "word", "prosemirror", "tiptap"]
stars: 92
forks: 15
openIssues: 177
closedIssues: 244
watchers: 6
contributors: 235
recentReleases: 2
createdAt: "2020-07-16T10:49:07Z"
lastCommitAt: "2026-10-09T18:55:15Z"
lastReleaseAt: "2026-08-31T07:59:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 50
maintainers: ["HMarzban", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/280128675/34385391-1037-4896-a471-f1ffdab6b439"
fundingLinks: ["PATREON:https://patreon.com/docsplus"]
discussionCount: 9
---

# 📚 docs.plus

docs.plus is a free, open-source tool for real-time collaborative documents. Every heading in a document has its own chatroom, so a discussion stays next to the section it is about. The table of contents shows who is in each chatroom and how many messages you have not read.

You can also [use docs.plus from Claude or ChatGPT](https://github.com/docs-plus/docs.plus/blob/HEAD/docs/mcp/README.md). The AI app reads the documents you can open and edits the ones you own.

**[Try it live at docs.plus →](https://docs.plus)**

**Tech Stack:**

- **Runtime**: 🚀 Bun 1.4.0+
- **Frontend**: ⚛️ Next.js (`apps/webapp` on `15.5.21`, `apps/admin-dashboard` on `^16.2.12`), React 19, Tiptap 3, Tailwind CSS 4
- **Backend**: 🔧 Hono, Hocuspocus (Yjs), BullMQ, Prisma ORM
- **Database**: 🐘 PostgreSQL 17 for the Prisma database in local and dev, 🐘 PostgreSQL 15 for local Supabase, 🔴 Redis
- **Infrastructure**: 🐳 Docker Compose, Supabase
- **Real-time**: 🔌 WebSocket (Hocuspocus), Supabase Realtime

## 📋 Prerequisites

- 🐳 **Docker** & **Docker Compose** v2+ - [Install](https://docs.docker.com/get-docker/)
  - ⚠️ **macOS Silicon users:** Docker Desktop has IO performance issues. Use…
