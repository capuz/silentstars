---
repo: "marekdedic/prosemirror-remark"
name: "prosemirror-remark"
description: "An adapter to use the remark markdown parser with the ProseMirror editor"
readmeQualityOk: true
url: "https://github.com/marekdedic/prosemirror-remark"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 39
forks: 4
openIssues: 7
closedIssues: 45
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-04-20T07:48:03Z"
lastCommitAt: "2026-10-09T10:50:02Z"
lastReleaseAt: "2025-11-12T12:04:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["marekdedic", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/233a2ccc722d7ca8a855635671333ad13b54fd84ff87489f446ea364482961de/marekdedic/prosemirror-remark"
---

# prosemirror-remark

This package provides support for using the [remark](https://github.com/remarkjs/remark) Markdown parser with the [ProseMirror](https://prosemirror.net/) editor. prosemirror-remark builds on the [prosemirror-unified](https://github.com/marekdedic/prosemirror-unified) package and offers a configurable and extensible way of adding Markdown support to ProseMirror.

## Documentation

Full documentation, with a guide to using prosemirror-remark, a reference of all the extensions and their keyboard shortcuts, and a guide to extending it, is available at **[marekdedic.github.io/prosemirror-remark](https://marekdedic.github.io/prosemirror-remark/)**.

## Example

```ts
import { MarkdownExtension } from "prosemirror-remark";
import { EditorState } from "prosemirror-state";
import { ProseMirrorUnified } from "prosemirror-unified";
import { EditorView } from "prosemirror-view";
// Optional default styles (task list checkboxes etc.)
import "prosemirror-remark/style.css";

const sourceMarkdown = "**Bold text**";
const pmu = new ProseMirrorUnified([new MarkdownExtension()]);

const view = new EditorView(
  // The element to use for the editor…
