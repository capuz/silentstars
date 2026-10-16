---
repo: "teableio/docs"
name: "docs"
description: "Teable Help"
readmeQualityOk: true
url: "https://github.com/teableio/docs"
homepage: "https://help.teable.ai"
language: "MDX"
languages: ["MDX"]
languagePcts: [100]
stars: 14
forks: 15
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2023-08-10T08:36:13Z"
lastCommitAt: "2026-10-16T08:27:02Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 87
maintainers: ["tea-artist", "HynLcc", "garyli27"]
openGraphImageUrl: "https://opengraph.githubassets.com/5787644580668cfe18ed6530a4c7d363753247599b418b5c3d9025c0065c1151/teableio/docs"
---

# Teable Help

### Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where docs.json is)

```
mintlify dev
```

### Paste Image

Use the [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image) extension to paste images into the markdown file.
Open mdx file and press `cmd + option + v` to paste image.

### Image Assets

Images are shared repo assets. Keep paths stable, names searchable, and
rendering consistent.

When a change includes images, ask the agent to read this section first and
commit only images processed according to these rules.

#### Folder Rules

- Use `images/{top-level-group}/{topic}/`.
- Top-level groups: `docs`, `selfhosted`, `api`, `security`, `changelog`.
- `docs` maps to the Help Center Docs tab. Do not flatten
  `images/docs/{topic}/` into `images/{topic}/`.
- `{topic}` maps to the navigation name in `docs.json`, such as `ai`, `base`,
  `space`, `sso`, `authority-matrix`, `get-id`, or `activate`.
- Do not put new…
