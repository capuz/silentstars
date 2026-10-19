---
repo: "piconic-ai/pedit"
name: "pedit"
description: "Pair edit your local files."
readmeQualityOk: true
url: "https://github.com/piconic-ai/pedit"
homepage: "https://edit.piconic.ai"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [57, 38]
stars: 7
forks: 0
openIssues: 5
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-24T12:30:42Z"
lastCommitAt: "2026-10-19T09:14:18Z"
lastReleaseAt: "2026-10-05T13:31:19Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 62
maintainers: ["claude", "kfly8", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2fc7b13e163a1430daccf0aa81bb64066e0b435f9f2b0d5880d5d07a537a14a/piconic-ai/pedit"
---

# pedit — Pair edit your local files.

https://github.com/user-attachments/assets/14bec9ab-8c14-495c-8faf-9cdd98d8fd5b

**What it looks like.** Carol shares a file with `pedit`; Alice and Bob edit
it in their browsers. This is Alice's view:

`pedit` is a CLI that lets people edit your local files together in their
browsers. Edits are saved back to your file:

```text
❯ pedit notes.md

  notes.md is ready to write together.

  Send this link to the people you want to invite:
    https://edit.piconic.ai/r/<room-id>#<key>

  Press Ctrl+C when you are done. Everything is saved to notes.md.

  ● Alice and Bob are here
```

No install or account needed for collaborators on the public server.

Collaborators who would rather stay in their own editor join from the command
line instead. Given the link, `pedit` mirrors the shared file to a temporary
copy and keeps it in sync both ways until they leave or the host closes the
room; the copy is removed then, like closing a browser tab:

```text
❯ pedit 'https://edit.piconic.ai/r/<room-id>#<key>'

  Joined. Your copy of the shared file:
    /tmp/pedit-<room-id>-2271/notes.md
    Copied to your clipboard.

  Edit it with any editor; changes sync…
