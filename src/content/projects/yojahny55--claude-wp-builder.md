---
repo: "yojahny55/claude-wp-builder"
name: "claude-wp-builder"
description: "Claude Code plugin for building custom WordPress sites, demo-first workflow with ACF/SCF fields, bilingual support, and section-by-section theme generation."
readmeQualityOk: true
url: "https://github.com/yojahny55/claude-wp-builder"
language: "Shell"
languages: ["Shell"]
languagePcts: [65]
topics: ["accessibility", "acf", "bilingual", "claude-code", "claude-code-plugin", "seo", "theme-builder", "wordpress", "wordpress-theme", "wp-cli"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 8
createdAt: "2026-03-15T05:29:26Z"
lastCommitAt: "2026-09-19T01:19:10Z"
lastReleaseAt: "2026-09-04T15:18:28Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 65
maintainers: ["yojahny55", "Lacho00", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/d75ede621be24e577cec1f04ac78c9fec69be47be1f73ad67adde1b06986c8a5/yojahny55/claude-wp-builder"
discussionCount: 0
---

# Claude WP Builder

**Demo HTML to production WordPress theme — automated.**

A Claude Code plugin that turns approved demo HTML into a complete WordPress theme — section by section, with ACF/SCF fields, bilingual support, SEO, and security — all from the command line.

[Quick Start](#installation) | [Workflows](https://github.com/yojahny55/claude-wp-builder/blob/HEAD/docs/workflows.md) | [Commands](https://github.com/yojahny55/claude-wp-builder/blob/HEAD/docs/commands.md) | [Architecture](#architecture) | [Cinematic Mode](https://github.com/yojahny55/claude-wp-builder/blob/HEAD/docs/cinematic-mode.md) | [Contributing](https://github.com/yojahny55/claude-wp-builder/blob/HEAD/CONTRIBUTING.md) | [Backlog](https://github.com/yojahny55/claude-wp-builder/blob/HEAD/BACKLOG.md)

</div>

---

### How It Works

You always start from a **demo**: a static HTML page (or folder of pages) that the client
approves first. The plugin then transcribes that demo into a WordPress theme. It never
invents design, so there is no path that begins at WordPress.

```
SETUP    /wp-create (optional)  →  /wp-init  →  /wp-context (optional, auto when docs/ exists)
                                       │
DEMO…
