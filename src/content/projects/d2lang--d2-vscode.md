---
repo: "d2lang/d2-vscode"
name: "d2-vscode"
description: "Official D2 extension for Visual Studio Code"
readmeQualityOk: true
url: "https://github.com/d2lang/d2-vscode"
homepage: "https://marketplace.visualstudio.com/items?itemName=d2lang.d2lang"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [55, 27]
topics: ["diagram", "diagramming", "diagrams"]
stars: 332
forks: 24
openIssues: 26
closedIssues: 55
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2022-10-17T18:37:43Z"
lastCommitAt: "2026-11-26T23:31:38Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 24
maintainers: ["alixander"]
openGraphImageUrl: "https://opengraph.githubassets.com/e385b573ffc54d26705731ccf79662e8fea031d4da4ec5feee2c38916315ce71/d2lang/d2-vscode"
---

# d2lang

The official [D2](https://d2lang.com) extension for Visual Studio Code.

_Note: Requires D2 to be installed on your machine. See
[https://github.com/d2lang/d2/tree/master#install](https://github.com/d2lang/d2/tree/master#install)
for instructions._

## Currently Supports

- Syntax highlighting `.d2` files
- Open preview window on the side (right-click or (ctrl+shift+d) (mac -> shift+cmd+d))
- Format Document for `.d2` files
- Autocomplete, hover, live diagnostics, outline, folding, color pickers, and links with the D2 language server
- Go to Definition, Find All References, and Rename Symbol across D2 imports
- Format a fenced `d2` block in Markdown. Place the cursor inside the block or select it, then run **d2: Format D2 Block** from the Command Palette or **Format D2 Block** from the editor context menu.
- View rendered D2 code snippets in markdown document preview
- Theme and Layout are configurable from settings and the Command Palette

```d2
x -> y

# d2-vscode can syntax highlight nested markdown correctly.
y: |`md
  # d2-vscode
  VSCode extension for [D2](https://d2lang.com) files.
`|
```
