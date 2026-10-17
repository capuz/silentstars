---
repo: "DocuBook/editor"
name: "editor"
description: "Pocket notes sync across all devices. Built-in real-time collaboration. WYSIWYG rich editing ( / ) slash command for quick block insertion."
readmeQualityOk: true
url: "https://github.com/DocuBook/editor"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [63, 31]
topics: ["ai-assistants", "document", "editor", "notion", "obsidian", "vault"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 41
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-25T07:46:43Z"
lastCommitAt: "2026-10-17T07:59:06Z"
lastReleaseAt: "2026-10-16T14:07:59Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["gitfromwildan", "dependabot[bot]", "pullfrog[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/853a746214abc38c1153c9b9aded9160d580dc3724bede0717dc6994453bf741/DocuBook/editor"
fundingLinks: ["GITHUB:https://github.com/gitfromwildan"]
discussionCount: 1
---

> Pocket notes sync across all devices. Built-in real-time collaboration. WYSIWYG rich editing `/` slash command for quick block insertion.

## Install

### Web — Docker

```bash
docker run -d --name docubook -p 8080:8080 \
  -v docubook:/data \
  ghcr.io/docubook/editor
```

Open [http://localhost:8080](http://localhost:8080) and create the admin account. Setup cannot be skipped; set `DB_SETUP_TOKEN` before public exposure to protect account creation.

> [!IMPORTANT]
> Keep `/data` on a persistent volume. It contains vaults, configuration, and keys; recreating a container without this mount deletes them.

For production, pin an image tag, place the container behind HTTPS, set `DB_SECURE_COOKIE=1`, and back up `/data`.

| Variable                                                                          | Default      | Purpose                                                                 |
| --------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------- |
| `DB_SETUP_TOKEN`                                                                  | empty        | Protects first-run…
