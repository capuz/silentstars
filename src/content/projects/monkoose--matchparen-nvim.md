---
repo: "monkoose/matchparen.nvim"
name: "matchparen.nvim"
description: "alternative to matchparen neovim plugin "
readmeQualityOk: true
url: "https://github.com/monkoose/matchparen.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 134
forks: 3
openIssues: 2
closedIssues: 17
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-12-12T08:55:52Z"
lastCommitAt: "2026-10-07T10:29:43Z"
lastReleaseAt: "2026-07-04T14:19:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 27
maintainers: ["monkoose"]
openGraphImageUrl: "https://opengraph.githubassets.com/a29da7a008538fa299533539bd6a6ce98217a9f95f68719579f2d9c93c8f417c/monkoose/matchparen.nvim"
---

## Matchparen.nvim
### An alternative to the default neovim matchparen plugin

matchparen.nvim fixes several bugs in the default plugin, including:
- Wrong highlights of matched characters in comments and strings in files with TreeSitter syntax highlighting
- Highlighting is properly disabled for plugins like [hop.nvim](https://github.com/phaazon/hop.nvim)
- Doesn't recolor characters in floating windows
- And some other

It is also much faster in some situations and doesn't cause cursor movement lag.

> [!IMPORTANT]
> Highlighting should work as expected, but jumping to highlighted
> brackets with `%` or text objects like `i(`, `a[`, etc. is not implemented yet, so it
> could work improperly when there are unmatched brackets in strings or
> comments inside highlighted brackets. You will have the same behavior with the default plugin.

---

### 📦 Installation

Here's an example for the 💤[lazy](https://github.com/folke/lazy.nvim) plugin
manager. If you're using a different plugin manager, please refer to its
documentation for installation instructions.

```lua
require("lazy").setup({
    performance = {
        rtp = {
            disabled_plugins = {
                -- disable…
