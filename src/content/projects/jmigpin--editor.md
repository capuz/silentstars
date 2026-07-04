---
repo: "jmigpin/editor"
name: "editor"
description: "Source code editor in pure Go."
url: "https://github.com/jmigpin/editor"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["editor", "golang"]
stars: 441
forks: 29
openIssues: 0
closedIssues: 44
watchers: 9
contributors: 6
recentReleases: 0
createdAt: "2016-10-11T13:31:50Z"
lastCommitAt: "2026-07-04T19:17:25Z"
lastReleaseAt: "2023-11-29T18:27:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 36
maintainers: ["jmigpin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e90c4cc7b6fde521491ad35d6a9ce0275466ab662868b7515612a5fbd3fcd457/jmigpin/editor"
---

# Editor

Source code editor in pure Go.

## About

- This is a simple but advanced source code editor
- As the editor is being developed, the rules of how the UI interacts will become more well defined.
- Primarily developed and tested in Linux. 
- Works in MS Windows (native or xserver) and MacOS (xserver).

## Features

- Auto-indentation of wrapped lines.
- No code coloring (except comments and strings).
- Many TextArea utilities: undo/redo, replace, comment, ...
- Handles big files.
- Start external processes from the toolbar with a click, capturing the output to a row. 
- Drag and drop files/directories to the editor.
- Detects if files opened are changed outside the editor.
- Plugin support
	- examples such as `gotodefinition` and `autocomplete` [below](#plugins).
- Golang specific:
	- Calls goimports if available when saving a .go file.
	- Clicking on `.go` files identifiers will jump to the identifier definition (needs `gopls`).
	- Debug utility for go programs (`GoDebug` cmd).
		- allows to go back and forth in time to consult code values.
- Language Server Protocol (LSP) (code analysis):
	- `-lsproto` cmd line option
	- basic support for gotodefinition and completion
	-…
