---
repo: "unjs/confbox"
name: "confbox"
description: "Compact YAML, TOML, JSONC and JSON5 and INI parser and serializer"
readmeQualityOk: true
url: "https://github.com/unjs/confbox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 303
forks: 9
openIssues: 7
closedIssues: 9
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2024-02-20T13:40:57Z"
lastCommitAt: "2026-10-29T10:19:16Z"
lastReleaseAt: "2026-02-06T11:39:17Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 31
maintainers: ["pi0", "renovate[bot]", "pi0x"]
openGraphImageUrl: "https://opengraph.githubassets.com/870ce3092e104599bc50fb2cea05c88301aa2f830cbefa9a9c7887cacf796ab8/unjs/confbox"
---

# confbox

Parsing and serialization utils for [YAML](https://yaml.org/) ([js-yaml](https://github.com/nodeca/js-yaml)), [TOML](https://toml.io/) ([smol-toml](https://github.com/squirrelchat/smol-toml)), [JSONC](https://github.com/microsoft/node-jsonc-parser) ([jsonc-parser](https://github.com/microsoft/node-jsonc-parser)), [JSON5](https://json5.org/) ([json5](https://github.com/json5/json5)), [INI](https://en.wikipedia.org/wiki/INI_file) ([ini](https://www.npmjs.com/package/ini)) and [JSON](https://www.json.org/json-en.html).

✨ Zero dependency and tree-shakable

✨ Types exported out of the box

✨ Preserves code style (indentation and whitespace)

> [!TIP]
> Use [unjs/c12](https://github.com/unjs/c12) for a full featured configuration loader!

## Usage

Install package:

```sh
# ✨ Auto-detect
npx nypm install confbox

# npm
npm install confbox

# yarn
yarn add confbox

# pnpm
pnpm add confbox

# bun
bun install confbox

# deno
deno install npm:confbox
```

Import:

**ESM** (Node.js, Bun, Deno)

```js
import {
  parseJSON5,
  stringifyJSON5,
  parseJSONC,
  stringifyJSONC,
  parseYAML,
  stringifyYAML,
  parseJSON,
  stringifyJSON,
  parseTOML,
  stringifyTOML,
  parseINI,…
