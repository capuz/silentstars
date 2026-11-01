---
repo: "travsteward/openwriter"
name: "openwriter"
description: "Write and publish with your agent. A Markdown editor where your agent drafts and you review every change, then publish to your site, newsletter, X and LinkedIn."
readmeQualityOk: true
url: "https://github.com/travsteward/openwriter"
homepage: "https://openwriter.io"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [72, 20]
topics: ["ai", "ai-agents", "ai-writing", "anthropic", "claude", "claude-code", "collaborative-editing", "content-creation", "editor", "markdown"]
stars: 36
forks: 3
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-17T16:50:36Z"
lastCommitAt: "2026-11-01T22:58:45Z"
lastReleaseAt: "2026-04-12T18:08:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 48
maintainers: ["travsteward"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ceb0e0ffbd077c44dae0fef61e2836b2dfad8fea5e0281c9426ad76a3ac08de/travsteward/openwriter"
---

Turn your ideas into posts, newsletters and books. Your agent drafts and edits, you review every change, and you publish to your site, your subscribers' inboxes, X and LinkedIn from the same place.

## Install

```bash
npx openwriter setup
```

Installs the editor and connects it to Claude Code. Restart Claude Code and ask it to write something in OpenWriter. The editor opens at `localhost:5050`, and your documents are plain Markdown files in `~/.openwriter/`.

```bash
npm install -g openwriter
codex mcp add openwriter -- openwriter --no-open
```

For any other MCP agent, add OpenWriter as a server in its config:

```json
{
  "mcpServers": {
    "openwriter": { "command": "openwriter", "args": ["--no-open"] }
  }
}
```

Per-agent details are in the [reference](https://github.com/travsteward/openwriter/blob/main/REFERENCE.md#connect-your-agent).

Rather not install anything? [Write in your browser](https://app.openwriter.io/_auth/signin): sign in with your email, on a laptop or a phone.

## What you can do

### Put your ideas into words that sound like you

Give the agent your notes, sources and past writing. Ask for a draft, a tighter argument or a different opening, in your…
