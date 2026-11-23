---
repo: "UseJunior/safe-docx"
name: "safe-docx"
description: "Safe DOCX suite: docx-primitives, docx-comparison, safe-docx MCP server"
readmeQualityOk: true
url: "https://github.com/UseJunior/safe-docx"
homepage: "https://safedocx.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["gemini-cli-extension"]
stars: 48
forks: 8
openIssues: 67
closedIssues: 561
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-20T03:05:15Z"
lastCommitAt: "2026-11-23T10:09:04Z"
lastReleaseAt: "2026-03-27T03:07:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["stevenobiajulu", "dependabot[bot]", "cocvn157"]
openGraphImageUrl: "https://opengraph.githubassets.com/89be27f5ccafc3a801567752d6cc70f459cbd4de03f8b73754b7f453bf19395a/UseJunior/safe-docx"
---

# Safe Docx

Edit Word and OpenDocument files with coding agents.

[English](https://github.com/UseJunior/safe-docx/blob/HEAD/README.md) · [Español](https://github.com/UseJunior/safe-docx/blob/HEAD/README.es.md) · [简体中文](https://github.com/UseJunior/safe-docx/blob/HEAD/README.zh.md) · [Português](https://github.com/UseJunior/safe-docx/blob/HEAD/README.pt-br.md) · [Deutsch](https://github.com/UseJunior/safe-docx/blob/HEAD/README.de.md)

Safe Docx is a local MCP server and CLI for reading, searching, editing, comparing, converting, and saving document files. It preserves DOCX structure and can produce clean or tracked-changes output.

## Example

Ask your coding agent:

```text
Edit NDA.docx. Change the governing law from New York to Delaware.
Save a clean copy and a tracked-changes copy. Do not change anything else.
```

Safe Docx finds the clause, applies the targeted edit, and writes both files for review. The rest of the document stays outside the requested edit.

Follow the complete [editing walkthrough](https://github.com/UseJunior/safe-docx/blob/HEAD/docs/tutorial.md).
