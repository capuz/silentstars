---
repo: "LivXue/dsh-plugin-shop"
name: "dsh-plugin-shop"
description: "The plugin market for DeepSeek Harness: harvests dsh plugins from npm and publishes an auditable catalog."
readmeQualityOk: true
url: "https://github.com/LivXue/dsh-plugin-shop"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["agent", "deepseek", "deepseek-harness", "deepseek-harness-plugin", "dsh", "harness"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-25T05:16:32Z"
lastCommitAt: "2026-08-30T09:26:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["LivXue", "bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb8b3fcc151e7501399c00bf9dc311bfaaeb37b7a97068fef66844f0f2481b0f/LivXue/dsh-plugin-shop"
---

# dsh-plugin-shop

**The plugin shop for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — discover, install,
enable and update dsh plugins from a browsable, git-auditable catalog.

English | [中文](https://github.com/LivXue/dsh-plugin-shop/blob/HEAD/README.zh.md)

</div>

---

## 🖼️ Screenshots

</div>

<table>
<tr>
<td width="50%"><img src="docs/images/gate-light.png" alt="Installing an unreviewed plugin requires an explicit acknowledgement"></td>
<td width="50%"><img src="docs/images/shelf-dark.png" alt="The same shelf in the dark theme"></td>
</tr>
<tr>
<td align="center"><sub>Installing an unreviewed plugin requires an explicit acknowledgement</sub></td>
<td align="center"><sub>The same shelf in the dark theme</sub></td>
</tr>
</table>

## 🗺️ How it fits together

```mermaid
flowchart LR
  npm(["npm registry<br/>keyword: dsh-plugin · deepseek-harness"]) -->|daily harvest| build["registry/ pipeline<br/>gate · tier · emit"]
  build -->|committed snapshot + static JSON| pages[["GitHub Pages<br/>/v1/index.json"]]
  pages -->|fetch, verify sha256, cache| host["Host half<br/>dsh-plugin-shop"]
  host -->|nine shop/* methods| client["Client half<br/>the Settings…
