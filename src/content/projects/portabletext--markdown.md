---
repo: "portabletext/markdown"
name: "markdown"
description: "Convert Portable Text to and from Markdown"
readmeQualityOk: true
url: "https://github.com/portabletext/markdown"
homepage: "https://portabletext.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 1
createdAt: "2026-11-12T08:50:26Z"
lastCommitAt: "2026-11-16T11:52:36Z"
lastReleaseAt: "2026-11-12T09:10:10Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 45
maintainers: ["christianhg", "ecoscript[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aec3e8b70606a59d6eada7df11d25f3693f2637c1504cb3ee4b3e58717a94b73/portabletext/markdown"
---

# `@portabletext/markdown`

> Convert Portable Text to Markdown and back again

## Installation

```bash
npm install @portabletext/markdown
```

## Quick start

**Markdown → Portable Text**

```ts
import {markdownToPortableText} from '@portabletext/markdown'

const blocks = markdownToPortableText('# Hello **world**')
```

```json
[
  {
    "_type": "block",
    "_key": "f4s8k2",
    "style": "h1",
    "children": [
      {"_type": "span", "_key": "a9c3x1", "text": "Hello ", "marks": []},
      {"_type": "span", "_key": "b7d2m5", "text": "world", "marks": ["strong"]}
    ],
    "markDefs": []
  }
]
```

**Portable Text → Markdown**

```ts
import {portableTextToMarkdown} from '@portabletext/markdown'

const markdown = portableTextToMarkdown([
  {
    _type: 'block',
    _key: 'f4s8k2',
    style: 'h1',
    children: [
      {_type: 'span', _key: 'a9c3x1', text: 'Hello ', marks: []},
      {_type: 'span', _key: 'b7d2m5', text: 'world', marks: ['strong']},
    ],
    markDefs: [],
  },
])
```

```md
# Hello **world**
```

**Edit through Markdown without losing keys**

```ts nocheck
import {applyMarkdownEdit, portableTextToMarkdown} from '@portabletext/markdown'

const markdown =…
