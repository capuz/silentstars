---
repo: "AIEPhoenix/ai-react-markdown"
name: "ai-react-markdown"
description: "A React component library for rendering AI-generated markdown — LLM streaming, LaTeX math, Mermaid diagrams, GFM, syntax highlighting, CJK-friendly typography, and cross-chunk reference coordination."
readmeQualityOk: true
url: "https://github.com/AIEPhoenix/ai-react-markdown"
homepage: "https://www.npmjs.com/package/@ai-react-markdown/core"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "ai-chat", "chat-ui", "chatbot", "chinese", "cjk", "gfm", "katex", "latex", "llm"]
stars: 167
forks: 18
openIssues: 0
closedIssues: 3
watchers: 12
contributors: 2
recentReleases: 0
createdAt: "2026-03-17T05:23:07Z"
lastCommitAt: "2026-08-24T23:47:32Z"
lastReleaseAt: "2026-05-21T07:31:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 32
maintainers: ["AIEPhoenix"]
openGraphImageUrl: "https://opengraph.githubassets.com/508dd3d762f5becf8ac882a699dd1694e1c6d43edecf13af97a26717a8207e9d/AIEPhoenix/ai-react-markdown"
discussionCount: 0
---

# ai-react-markdown

> A React component library purpose-built for rendering **AI-generated markdown** — LLM streaming, LaTeX math, Mermaid diagrams, GFM, syntax highlighting, CJK-friendly typography, and cross-chunk reference coordination. Batteries included, escape hatches everywhere.

> **Upgrading from 1.x?** v2.0.0 removes the 1.x object-based `config` channel (and its integrator default channel) in favor of flat props, a sealed engine-plugin catalog, and five narrow hooks. Every removed symbol has a one-to-one destination with before/after code in the [migration guide](https://github.com/AIEPhoenix/ai-react-markdown/blob/HEAD/docs/migrating-to-v2.md).

---

## Why ai-react-markdown?

Most React markdown renderers were designed for **static documents** — blog posts, READMEs, CMS content. AI-generated markdown breaks several of their assumptions:

- **Streaming**: content arrives token-by-token, and the same component must re-render dozens of times per second without flicker.
- **Multi-chunk documents**: a single LLM response is often delivered in multiple chunks (chat UI), each rendered by its own component instance, yet references (`[^footnote]`, `[link][def]`, ``) must…
