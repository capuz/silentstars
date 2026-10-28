---
repo: "ndonfris/vscode-fish-lsp"
name: "vscode-fish-lsp"
description: "fish-lsp vscode extension"
readmeQualityOk: true
url: "https://github.com/ndonfris/vscode-fish-lsp"
homepage: "https://fish-lsp.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["fish", "fish-shell", "lsp", "lsp-client", "lsp-server", "vscode-extension"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-21T04:10:53Z"
lastCommitAt: "2026-10-28T09:56:58Z"
lastReleaseAt: "2025-08-23T11:23:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 52
maintainers: ["ndonfris", "sanderbongers"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b4a7bc9181bba2947c837c97888d91cf9674acec39f6d9971449dbc8af79970/ndonfris/vscode-fish-lsp"
---

#### VSCode support for the [fish-lsp](https://github.com/ndonfris/fish-lsp) 

## Features

This extension integrates the [fish-lsp](https://github.com/ndonfris/fish-lsp) language server to provide rich language support for fish shell scripts, including:

- Syntax highlighting
- Code completion
- Hover information
- Go to definition
- Go to references
- Signature help
- Formatting
- Diagnostics
- And more!

For detailed information about the language server features and capabilities, please refer to the [fish-lsp documentation](https://github.com/ndonfris/fish-lsp#readme).

## Installation

Install the extension from the [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=ndonfris.fish-lsp)

If you want access to the `fish-lsp` cli, you can add the binary installed by the extension to your path:

```fish
fish_add_path ~/.vscode/extensions/ndonfris.fish-lsp-*/node_modules/fish-lsp/bin
```

> ```fish
> npm install -g fish-lsp@latest
> # or use any other supported package manger (yarn, pnpm, brew, nix, etc.)
> ```
> 
> In your global VSCode settings.json file, <code>~/.config/Code/User/settings.json</code>:
> 
> ```json 
> {
>     "fish-lsp.useGlobalExecutable":…
