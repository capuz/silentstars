---
repo: "FlorianWoelki/obsidian-symbols-prettifier"
name: "obsidian-symbols-prettifier"
description: "Symbols that prettify your knowledge base."
readmeQualityOk: true
url: "https://github.com/FlorianWoelki/obsidian-symbols-prettifier"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [76, 22]
topics: ["obsidian", "obsidian-community", "obsidian-md", "obsidian-plugin", "prettifier", "symbols"]
stars: 55
forks: 11
openIssues: 3
closedIssues: 13
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2022-07-27T08:53:56Z"
lastCommitAt: "2026-07-10T07:00:51Z"
lastReleaseAt: "2026-01-11T13:11:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 29
maintainers: ["FlorianWoelki", "Atlinx", "MarkusLarsson421"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b59ec5830d28a45b7cbf642ae70bb0c04a8b7ca8d5f39b50e603aa799133954/FlorianWoelki/obsidian-symbols-prettifier"
---

# Obsidian Symbols Prettifier

## What is it

Did you ever want to prettify your arrows or symbols, like `->` or `<=>`?

With the help of this plugin, it is easier than ever before. This plugin allows you to prettify several character combinations so that these combinations do not look like cryptic symbols.

## How to use

The easiest way to use the plugin is to install it and then try to type the following symbols. All of these symbols will be prettified:

| Text | Symbol |
| ---- | ------ |
| ->   | →      |
| <-   | ←      |
| <->  | ↔      |
| <=>  | ⇔      |
| <=   | ⇐      |
| =>   | ⇒      |
| =<   | ≤      |
| >=   | ≥      |
| +-   | ±      |
| -+   | ∓      |

## Development

To customize this project for your needs, you can clone it and then install all dependencies:
```sh
$ git clone https://github.com/FlorianWoelki/obsidian-symbols-prettifier
$ cd obsidian-symbols-prettifier
$ yarn
```

After the installation, you need to create a `env.mjs` file in the root directory. Fill the file with the following content:

```js
export const obsidianExportPath =
  '<path-to-obsidian-vault>/.obsidian/plugins/obsidian-symbols-prettifier';
```

Afterward, you can start the rollup dev…
