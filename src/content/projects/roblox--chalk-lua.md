---
repo: "Roblox/chalk-lua"
name: "chalk-lua"
description: "Terminal string styling library for Luau. This is a read-only mirror."
readmeQualityOk: true
url: "https://github.com/Roblox/chalk-lua"
language: "Lua"
languages: ["Lua"]
languagePcts: [99]
stars: 22
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-01-09T18:32:59Z"
lastCommitAt: "2026-11-04T21:35:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 30
maintainers: ["dphblox"]
openGraphImageUrl: "https://opengraph.githubassets.com/18476cfc474afc2d936cd4f38f13d63a7def32226b698a1b8e7f77fec0f43b13/Roblox/chalk-lua"
---

# Chalk-Lua

A Lua port of the open source JS terminal string styling library [Chalk](https://github.com/chalk/chalk).

---

## Installation

### Wally

Add this package to your `[dependencies]` in your `wally.toml`.
```toml
Chalk = "roblox/chalk-lua@0.3.0"
```

Run `wally install` to install the package. See the [Wally page for `roblox/chalk-lua`](https://wally.run/package/roblox/chalk-lua) for available versions.

### Creator Store

Get [Chalk-Lua on the Creator
Store](https://create.roblox.com/store/asset/16031787508/ChalkLua) and add it to
your inventory, then drag it into your place in Roblox Studio (typically under
`ReplicatedStorage`).

> [!NOTE]
> Roblox Studio's built-in Output widget does not support ANSI escape codes;
> for coloured output support, you'll need to use to a full-featured terminal
> emulator, for example by running your Roblox project in [rocale-cli](https://github.com/Roblox/rocale-cli).

Add this package to your `[dependencies]` in your `rotriever.toml`.
```
Chalk = "github.com/roblox/chalk-lua@0.3.0"
```
Run `rotrieve install` to install the package.

---

## API

`chalk.style(string)` to style a `string` (or `tostring`-able object) with any of the…
