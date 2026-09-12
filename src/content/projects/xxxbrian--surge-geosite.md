---
repo: "xxxbrian/Surge-Geosite"
name: "Surge-Geosite"
description: "Geosite ruleset for Surge"
readmeQualityOk: true
url: "https://github.com/xxxbrian/Surge-Geosite"
homepage: "https://surge.bojin.co"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
stars: 64
forks: 16
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-04T11:11:38Z"
lastCommitAt: "2026-09-12T06:56:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 50
maintainers: ["xxxbrian"]
openGraphImageUrl: "https://opengraph.githubassets.com/3aafe024e9be10d968c9c31c22dc74065c172356fa5ed1161f2b0b99a35f9555/xxxbrian/Surge-Geosite"
---

<h1>Surge Geosite</h1>
  <p>Automatically converts <code>v2fly/domain-list-community</code> datasets into ready-to-use Surge rules.</p>
  <p>
    English | <a href="./README.zh-CN.md">中文</a>
  </p>
  <p>
  </p>
</div>

</p>

## Direct Use

1. Open the dashboard: https://surge.bojin.co.
2. Search and select a dataset.
3. Copy the generated raw URL.
4. Paste it into your Surge rules.

If you want to use rule URLs directly, the format is:

- Rules path: `https://surge.bojin.co/geosite/:name_with_filter`

`name_with_filter` has two forms:

- Without filter: `apple`
  Returns the full rules for the `apple` dataset.
- With filter: `apple@cn`
  Returns only rules tagged with `@cn`.

Surge example:

```ini
[Rule]
RULE-SET,https://surge.bojin.co/geosite/apple@cn,DIRECT
RULE-SET,https://surge.bojin.co/geosite/strict/category-ads-all,REJECT
```

## Advanced Usage

### API

- `GET /geosite` returns `{ [listName]: filters[] }`
- `GET /geosite/:name_with_filter` (default mode: `balanced`)
- `GET /geosite/:mode/:name_with_filter`

### Mode Guide

- `strict`: only lossless regex conversion
- `balanced`: conservative conversion that prioritizes avoiding false matches; omissions are allowed…
