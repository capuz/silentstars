---
repo: "XieZongChen/dsh-md-notes"
name: "dsh-md-notes"
description: "A note-taking plugin for DeepSeek Harness (DSH). It provides a full MD notes manager and MD notes editor, letting you quickly capture conversation content into notes. Notes can be maintained by syncing to a Git repository"
readmeQualityOk: true
url: "https://github.com/XieZongChen/dsh-md-notes"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["dsh-plugin", "dsh-plugins", "notebook", "notes", "deepseek-harness", "markdown"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T18:01:29Z"
lastCommitAt: "2026-08-27T14:30:12Z"
lastReleaseAt: "2026-08-24T16:18:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 47
maintainers: ["XieZongChen"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f3c8e01c7f0148b54b1158b4c243f98923fba350678de35a525c3ec8750d255/XieZongChen/dsh-md-notes"
discussionCount: 0
---

</p>

<h1 align="center">dsh-md-notes</h1>

</p>

  DSH third-party plugin (bundle): <b>MD Notes Manager</b>
  <br />
</p>

---

## Overview

A note-taking plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH). It provides a full **MD notes manager** and **MD notes editor**, letting you quickly capture conversation content into notes. Notes can be maintained by syncing to a Git repository.

**Who it's for**: DSH web users who want local, file-based notes (no database, no cloud) — capture a conversation into a note with one click, keep editing the `.md` anywhere, and back up / sync with a Git repository.

**Current features**:

- **Sidebar notes entry** → full-screen notes manager: per-workspace note list (grouped, collapsible), markdown edit/preview, save, delete (in-page confirm), create with one click.
- **Assistant-message action** (next to copy) → pick or create a note and append that conversation (user question + answer) to it **instantly** — the text is captured from the conversation itself, so there's no waiting; section labels are localized (reasoning is not captured — only the final answer).
- **Reference notes in chat (`@`)**: type `@` to…
