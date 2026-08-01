---
repo: "Shougo/ddc-source-lsp"
name: "ddc-source-lsp"
description: "lsp source for ddc.vim"
readmeQualityOk: true
url: "https://github.com/Shougo/ddc-source-lsp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ddc-vim", "ddc-source"]
stars: 73
forks: 22
openIssues: 2
closedIssues: 25
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2021-08-06T10:51:15Z"
lastCommitAt: "2026-08-01T06:14:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 38
maintainers: ["Shougo", "Copilot", "atusy"]
openGraphImageUrl: "https://opengraph.githubassets.com/a380de3a4a628b3aa008b3305ac13c87778c909f4429874a72e91631feb65bf9/Shougo/ddc-source-lsp"
---

# ddc-source-lsp

lsp completion for ddc.vim

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddc.vim

https://github.com/Shougo/ddc.vim

### LSP client

Supported LSP clients are "nvim-lsp", "vim-lsp" and "lspoints"

https://github.com/prabirshrestha/vim-lsp

https://github.com/kuuote/lspoints

NOTE: If you use "nvim-lsp", it requires Neovim 0.11+.

## Configuration

To take advantage of all the features, you need to set client_capabilities.

```lua
vim.lsp.config('*', {
  capabilities = require("ddc_source_lsp").make_client_capabilities(),
})
```

```vim
call ddc#custom#patch_global('sources', ['lsp'])
call ddc#custom#patch_global('sourceOptions', #{
      \   lsp: #{
      \     isVolatile: v:true,
      \     mark: 'lsp',
      \     forceCompletionPattern: '\.\w*|:\w*|->\w*',
      \   },
      \ })

call ddc#custom#patch_global('sourceParams', #{
      \   lsp: #{
      \     snippetEngine: denops#callback#register({
      \           body -> vsnip#anonymous(body)
      \     }),
      \     enableResolveItem: v:true,
      \     enableAdditionalTextEdit: v:true,
      \   }
      \ })
```

## Original code

It based on…
