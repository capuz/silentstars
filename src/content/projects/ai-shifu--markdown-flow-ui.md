---
repo: "ai-shifu/markdown-flow-ui"
name: "markdown-flow-ui"
description: "React component library to render interactive MarkdownFlow documents with typewriter effects and real-time streaming"
readmeQualityOk: true
url: "https://github.com/ai-shifu/markdown-flow-ui"
homepage: "https://markdownflow.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["markdown-flow", "markdownflow", "mdflow", "react", "react-markdown", "remark-plugin", "typescript"]
stars: 9
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-07-12T07:03:48Z"
lastCommitAt: "2026-10-25T22:11:45Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 87
maintainers: ["sunner", "QinyingShi", "aichy126"]
openGraphImageUrl: "https://opengraph.githubassets.com/349f16ee9434e5839d9d1c4abfcce80f245a6585f190ab722193c64c760c32ab/ai-shifu/markdown-flow-ui"
discussionCount: 0
---

# MarkdownFlow UI Component Library

**React component library for rendering interactive [MarkdownFlow](https://markdownflow.ai) documents with typewriter effects, real-time streaming, and advanced Mermaid diagram support.**

[MarkdownFlow](https://markdownflow.ai) (also known as MDFlow or markdown-flow) extends standard Markdown with AI to create personalized, interactive pages. Its tagline is **"Write Once, Deliver Personally"**.

English | [Simplified Chinese](https://github.com/ai-shifu/markdown-flow-ui/blob/HEAD/README_ZH-CN.md)

## 🚀 Quick Start

### Install

```bash
npm install markdown-flow-ui
# or
yarn add markdown-flow-ui
# or
pnpm add markdown-flow-ui
```

### Basic Usage

```tsx
import { MarkdownFlow } from "markdown-flow-ui";

function App() {
  return (
    <MarkdownFlow
      initialContentList={[
        {
          content:
            "# Hello World\n\nThis is **MarkdownFlow** with typewriter effect!",
        },
      ]}
      enableTypewriter={true}
      typingSpeed={30}
    />
  );
}
```

With the typewriter enabled, prose follows the configured typing pace. Received
HTML waits until the preceding prose has finished typing, then renders each
received…
