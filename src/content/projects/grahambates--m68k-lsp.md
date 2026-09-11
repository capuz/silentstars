---
repo: "grahambates/m68k-lsp"
name: "m68k-lsp"
description: "Language Server Protocol implementation for Motorola 68000 assembly"
readmeQualityOk: true
url: "https://github.com/grahambates/m68k-lsp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["68000", "amiga", "asm", "assembly", "language-server", "language-server-protocol", "lsp", "m68k"]
stars: 35
forks: 2
openIssues: 5
closedIssues: 11
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2022-03-20T21:45:31Z"
lastCommitAt: "2026-09-11T08:11:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 53
maintainers: ["grahambates"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8c36bc3631e0d14dd98a5f3f59857b75fff8730a45b42136874df1c15c60254/grahambates/m68k-lsp"
---

# Motorola 68000 family language server

[Language Server Protocol](https://github.com/Microsoft/language-server-protocol) implementation for Motorola 68000
family assembly, based on [tree-sitter-m68k](https://github.com/grahambates/tree-sitter-m68k)

- Suitable for use with LSP supporting editors e.g. [Neovim](https://neovim.io/)
- Includes [VS Code extension](https://marketplace.visualstudio.com/items?itemName=gigabates.m68k-lsp)

## Features

- Auto-completion:
  - Instruction mnemonics
  - Assembler directives
  - Registers
  - Symbols
- Code Linting
  - Parser errors
  - Processor support
- Code Folding
- Document Formatting
- Document Highlights
- Document Links
- Document Symbols
- Find References
- Go to definition
- Hover
  - Instruction/directive documentation
  - Symbol info
- Multiple workspaces
- Rename Symbols
- Signature Help

## Installation

Install the package via npm:

```
npm install --global m68k-lsp-server
```

## Usage

### Neovim

Configure using [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

e.g.

```lua
require('lspconfig').m68k.setup{
  on_attach = on_attach,
  init_options = {
    includePaths = { '../include', '/home/myuser/includes' },…
