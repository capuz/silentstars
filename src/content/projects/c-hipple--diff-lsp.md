---
repo: "C-Hipple/diff-lsp"
name: "diff-lsp"
description: "Middleware Language server parsing diffs"
readmeQualityOk: true
url: "https://github.com/C-Hipple/diff-lsp"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-18T15:14:07Z"
lastCommitAt: "2026-11-19T05:01:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 42
maintainers: ["C-Hipple"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4bad560d326591d71af26dead98412282be7bbefd7bfdb84c4a2780292ff7d4/C-Hipple/diff-lsp"
---

# diff-lsp

Middleware Language server parsing diffs

Acts as a server from your editor's point-of-view, and as a client to your "backend" LSPs (such as rust-analyzer or gopls).

Editor -> diff-lsp -> [rust-analyzer, gopls, pylsp, etc]

Allows your editor to use the following lsp capabilities in diffs
- Hover
- Jump Definition
- Find References
- Jump to type definition
- Document symbols (imenu, breadcrumb / headerline)
- Diagnostics: errors/warnings from your backend LSPs shown on the diff lines (see below).

Finding the references for a code-review by calling out to rust-analyzer.

`diff-lsp` mostly follows the standard language-server protocol, so you can configure your clients to use this LSP server.  However, diff-lsp typically works on ephemeral buffers (such as git-status or code reviews), and LSP is a file-based protocol.  This means that for usage in these buffers, some client modifications are required.

See [Documentation](https://diff-lsp.readthedocs.io/en/latest/) for full docs

## Quickstart

### Emacs

See [diff-lsp.el](https://www.github.com/C-Hipple/diff-lsp.el) for configuring & running with emacs.
