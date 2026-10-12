---
repo: "piconic-ai/pedit"
name: "pedit"
description: "Pair edit your local files."
readmeQualityOk: true
url: "https://github.com/piconic-ai/pedit"
homepage: "https://edit.piconic.ai"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [57, 36]
stars: 7
forks: 0
openIssues: 4
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-24T12:30:42Z"
lastCommitAt: "2026-10-12T11:15:57Z"
lastReleaseAt: "2026-10-05T13:31:19Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 61
maintainers: ["kfly8", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdf5935249508034a256bf821e97780f0f47929c8c04450bb89e4092d365c7a5/piconic-ai/pedit"
---

# pedit — Pair edit your local files.

https://github.com/user-attachments/assets/14bec9ab-8c14-495c-8faf-9cdd98d8fd5b

`pedit` is a CLI that lets people edit your local files together in their
browsers. Edits are saved back to your file:

```text
❯ pedit notes.md

  notes.md is ready to write together.

  Send this link to the people you want to invite:
    https://edit.piconic.ai/r/<room-id>#<key>
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

  Edit it with any editor; changes sync both ways while you are in the room.
  Press Ctrl+C to leave. The copy is temporary and removed then; -d <dir> keeps one.
```

Quote the link in the shell: `#` starts a comment otherwise. `-d <dir>` keeps
the copy in…
