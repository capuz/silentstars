---
repo: "LLazyEmail/markdown-regex"
name: "markdown-regex"
description: "Set of constants that can help you to parse markdown content"
readmeQualityOk: true
url: "https://github.com/LLazyEmail/markdown-regex"
homepage: "https://www.npmjs.com/package/markdown-regex"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [64, 36]
topics: ["commonmark", "markdown-parser", "regexp", "typescript", "zero-dependency", "ai-agents", "extract", "javascript", "markdown", "nodejs"]
stars: 10
forks: 3
openIssues: 23
closedIssues: 37
watchers: 1
contributors: 6
recentReleases: 3
createdAt: "2021-09-13T14:58:22Z"
lastCommitAt: "2026-11-03T12:47:44Z"
lastReleaseAt: "2026-09-29T01:39:58Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 82
maintainers: ["atherdon", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dffd3898596a0b81251d4778e7c0684fffb5e61928d77a203cf7359493ac81bd/LLazyEmail/markdown-regex"
---

# markdown-regex

Zero-dependency, TypeScript-typed RegExp patterns for extracting headers, links, images, lists and code from Markdown.

**Install (30 seconds):**

```bash
npm install markdown-regex
```

```ts
import { extractLinks, extractHeaders } from 'markdown-regex';

extractLinks('[docs](https://example.com)');
// [{ text: 'docs', url: 'https://example.com' }]

extractHeaders('# Hello\n## World');
// [{ level: 1, text: 'Hello' }, { level: 2, text: 'World' }]
```

Requires **Node.js 20+**. CI builds on **Node 20, 22, and 24**.

- Agent guide: [AGENTS.md](https://github.com/LLazyEmail/markdown-regex/blob/HEAD/AGENTS.md)
- Full API: [llms-full.txt](https://github.com/LLazyEmail/markdown-regex/blob/HEAD/llms-full.txt) · Short: [llms.txt](https://github.com/LLazyEmail/markdown-regex/blob/HEAD/llms.txt)
- Source index: [src/index.ts](https://github.com/LLazyEmail/markdown-regex/blob/HEAD/src/index.ts)

## When to use this

**Use `markdown-regex` for** quick extraction, linting, or lightweight transforms — especially in scripts and AI-agent tool calls that want JSON, not an AST.

**Do not use it when** you need an AST or CommonMark compliance. Use remark, micromark, or…
