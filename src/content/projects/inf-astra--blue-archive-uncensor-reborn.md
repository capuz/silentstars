---
repo: "Inf-Astra/Blue-Archive-Uncensor-Reborn"
name: "Blue-Archive-Uncensor-Reborn"
description: "Unofficial automated modifications to Blue Archive assets"
originalDescription: "非官方 Blue Archive 资源自动化修改"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Inf-Astra/Blue-Archive-Uncensor-Reborn"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 15
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-09-23T12:51:41Z"
lastCommitAt: "2026-11-13T11:22:53Z"
lastReleaseAt: "2026-11-12T07:10:33Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 51
maintainers: ["Inf-Astra", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf6a9e296eb230d89efe1df0b98122d560455c99e41a87906139dfc098c437a0/Inf-Astra/Blue-Archive-Uncensor-Reborn"
---

# BlueArchive-CN-Uncensor

An automated resource modification project for the Simplified Chinese server of Blue Archive, based on GitHub Action.

## 1. Modification Contents
**AssetBundles:**

That is, various resources with the `.bundle` suffix.

- Some character portraits (including NPC characters)
- Some UI textures (such as ImageFont for MomoTalk)
- Some UI Prefabs (such as the hidden info section on character profiles, the positions of some buttons, etc.)

**TableBundles:**

This project uses a manually modified old ExcelDB as its base, and implements automatic text modification by running SQL UPDATE on the new ExcelDB.db.

- Various story and dialogue texts (located in `ScenarioScriptDBSchema` and `CharacterDialogDBSchema`)
- Various UI texts (e.g., 桃信 -> MomoTalk, 等级 -> Lv., located in `LocalizeDBSchema` and `LocalizeEtcSchema`)

## 2. Local Running
This project is also compatible with local running:
```
git clone https://github.com/Inf-Astra/Blue-Archive-Uncensor-Reborn.git
```
```
python -m pip install -r requirements.txt

# Only fetch the current resource version, without resource download or modification
python scripts/get_version.py --check

# Full run (outputs in…
