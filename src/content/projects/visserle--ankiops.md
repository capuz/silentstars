---
repo: "visserle/AnkiOps"
name: "AnkiOps"
description: "Anki ↔ Markdown, with bidirectional sync, custom note types, Git and LLM integration"
readmeQualityOk: true
url: "https://github.com/visserle/AnkiOps"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["anki", "markdown", "llm", "collaboration", "sync", "fs", "git"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T20:07:32Z"
lastCommitAt: "2026-08-28T14:32:01Z"
lastReleaseAt: "2026-05-12T19:47:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["visserle"]
openGraphImageUrl: "https://opengraph.githubassets.com/af7e1ef765b1be057f6d74b38fd368332c3e83e48f0501939eec6c12bf56592f/visserle/AnkiOps"
---

# AnkiOps

AnkiOps is a bidirectional bridge between Anki and the filesystem, where each deck becomes a Markdown file. This lets you manage your collection from your favorite text editor: Edit in plain text, version with Git, enhance with LLMs, and sync changes both ways.

## Advantages

- ✏️ Edit Anki decks as highly readable Markdown files
- 🔄 Two-way sync of notes, note types, decks and media files
- ⚡ Sync thousands of notes in under a second
- ⚙️ Bring your own note types
- ✨ Improve content with programmable LLM tasks
- 👥 Share decks on GitHub and collaborate with others

## How It Works

### 1 Markdown Files

AnkiOps is Markdown-first: Each file represents an Anki deck and notes are separated by a blank line, three dashes, and another blank line. Already existing decks can be exported from Anki, or created from scratch as in the following example:

```markdown
Q: Question text here
A: Answer text here:
Multiple lines supported
E: Extra information (optional)
M: Content behind a "more" button (optional)

---

T: Text with
- {{c1::multiple}}
- {{c2::cloze deletions}}.
E: Some *extra* info:

{width=700}

---

Q: What is this?
C1: A multiple choice note
C2: with
C3:…
