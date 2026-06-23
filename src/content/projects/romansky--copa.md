---
repo: "romansky/copa"
name: "copa"
description: "CoPa: Prompt Engineering Templating Language and CLI Tool"
url: "https://github.com/romansky/copa"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 42
forks: 2
openIssues: 7
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-30T08:19:41Z"
lastCommitAt: "2026-06-23T06:42:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 47
undervaluedScore: 19
maintainers: ["romansky", "yielder"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a49f06e6bbf81f9b8140c32ce10c4ba487d9b4174d77cbd864fa92b14829828/romansky/copa"
---

<h1 align="center">
    CoPa: Prompt Engineering Templating Language and CLI Tool 
</h1>

CoPa is a prompt engineering templating language and a lightweight CLI tool for generating structured prompts for Large
Language Models (LLMs) by dynamically including content from local files and web pages.

It helps you create complex, repeatable, and maintainable prompts for any code-related task.

## Key Features

* Templated Prompts: Use `{{@path_or_url[:options]}}` syntax to embed content.
* Auto-fenced Blocks: Wrap text or placeholders with `{{{ ... }}}` to automatically surround the result in a Markdown code fence. The fence uses 1 more backtick than the longest run inside, so you never have to count backticks again.
* Web Content Fetching: Directly include content from URLs with `{{@https://...}}`.
* HTML to Markdown: Convert local HTML files or URLs to semantic Markdown with `:md`.
* Ignore Syntax: Use `{{! comment }}` for comments and `{{!IGNORE_BELOW}}` to exclude sections of your template. For imported files, use `// {{!COPA_IGNORE_BELOW}}` (or `\\ {{!COPA_IGNORE_BELOW}}`) to exclude everything below that marker.
* Directory Trees: Display folder structures with the `:dir`…
