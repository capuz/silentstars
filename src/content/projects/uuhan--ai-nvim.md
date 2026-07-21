---
repo: "uuhan/ai.nvim"
name: "ai.nvim"
description: "Your final ai plugin for neovim."
readmeQualityOk: true
url: "https://github.com/uuhan/ai.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-04T10:55:00Z"
lastCommitAt: "2026-07-21T06:12:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 39
maintainers: ["uuhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/563501661ebc3fff05da32b1cd82d71ab54869d76a34d307ad844ed5b1419995/uuhan/ai.nvim"
---

# ai.nvim - Your coding agent inside neovim.

---

---

A Neovim AI assistant built around editor operations:

- run prompts on a visual selection, paragraph, buffer, file, git diff, or project search context
- preview AI edits as a unified diff before applying them
- use diagnostics, symbol lookup, references, quickfix entries, git diff, and project rules as request context
- talk to OpenAI-compatible `/v1/chat/completions` endpoints through a pluggable provider transport (`curl` by default)

This is intentionally not just a chat panel. The useful path is:

```text
selection + intent -> diff preview -> confirm apply
diagnostic + context -> minimal patch guidance
git diff -> review / commit message
project grep -> answer with source context
```

## Install

With lazy.nvim:

```lua
local function ai_chat_toggle()
  if vim.fn.mode():match "^[iR]" then
    vim.cmd.stopinsert()
  end
  vim.cmd.AIChatToggle()
end

local function ai_pop_chat_toggle()
  if vim.fn.mode():match "^[iR]" then
    vim.cmd.stopinsert()
  end
  vim.cmd.AIPopChatToggle()
end

---@type LazySpec
return {
  {
    "uuhan/ai.nvim",
    lazy = false,
    dependencies = {
      {…
