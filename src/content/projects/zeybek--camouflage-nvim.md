---
repo: "zeybek/camouflage.nvim"
name: "camouflage.nvim"
description: "Mask sensitive values in config files during screen sharing. Supports .env, JSON, YAML, TOML, XML, Terraform/HCL, Dockerfile, and more. Zero file modification - uses Neovim extmarks."
readmeQualityOk: true
url: "https://github.com/zeybek/camouflage.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [99]
topics: ["dotenv", "lua", "neovim", "neovim-plugin", "nvim", "privacy", "screen-sharing", "secrets", "security", "devops"]
stars: 47
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-10T01:42:26Z"
lastCommitAt: "2026-07-04T22:51:30Z"
lastReleaseAt: "2026-02-13T23:57:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 19
maintainers: ["zeybek", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1154077400/9c27caca-819c-4c9c-a79a-fb6f02885e8d"
---

# camouflage.nvim

Hide sensitive values in configuration files during screen sharing.

A Neovim plugin that visually masks secrets in `.env`, `.json`, `.yaml`, `.toml`, `.properties`, `.netrc`, `.xml`, `.http`, **Terraform/HCL** (`.tf`, `.tfvars`, `.hcl`), and **Dockerfile** files using extmarks - **without modifying the actual file content**.

## Demo

## Features

- **Multi-format support**: `.env`, `.json`, `.yaml`, `.yml`, `.toml`, `.properties`, `.ini`, `.conf`, `.sh`, `.netrc`, `.xml`, `.http`, `.tf`, `.tfvars`, `.hcl`, `Dockerfile`, `Containerfile`
- **Nested key support**: Handles `database.connection.password` in JSON/YAML/XML
- **All value types**: Masks strings, numbers, and booleans
- **Multiple styles**: `stars`, `dotted`, `text`, `scramble`
- **Reveal & Yank**: Temporarily reveal or copy masked values
- **Follow Cursor Mode**: Auto-reveal current line as you navigate
- **Have I Been Pwned**: Check passwords against breach database (Neovim 0.10+ with `vim.system`, plus `curl`)
- **JWT Expiry Hints**: Decode `exp` claim and show "expires in 2h" badges
- **Hot Reload**: Config changes apply immediately
- **Event System**: Hooks for extending functionality
-…
