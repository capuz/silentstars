---
repo: "PrestaShop/TranslationFiles"
name: "TranslationFiles"
description: "[READ-ONLY] This repository contains all the necessary files to generate translation packs for PrestaShop 1.6, 1.7 and higher. It's updated automatically."
readmeQualityOk: true
url: "https://github.com/PrestaShop/TranslationFiles"
language: "HTML"
languages: ["HTML"]
languagePcts: [81]
topics: ["translation", "translation-files", "i18n"]
stars: 24
forks: 68
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 23
recentReleases: 0
createdAt: "2017-02-02T17:29:47Z"
lastCommitAt: "2026-08-26T04:16:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 56
maintainers: ["ps-jarvis"]
openGraphImageUrl: "https://opengraph.githubassets.com/53d6283d431f8834cfa9c782153cc94bd4c25c914778b4bd5d4871b6c52c2dae/PrestaShop/TranslationFiles"
---

# TranslationFiles

All the necessary files to generate translation packs for PrestaShop.

### Create gzip archive

```bash
tar -czf $destination$iso.gzip --directory="$folder" 
```

## How to download data

For 1.6 and 1.7 versions, endpoints follow this structure: https://i18n.prestashop.com/translations/1.7.6.0/es-ES/es-ES.zip

For 8 and higher versions, endpoints follow this structure: https://i18n.prestashop-project.org/translations/8.1.0/es-ES/es-ES.zip

## License

All translations are licensed under the OSL-3.0 license

## Automatic updates and workflows

This repository hosts the content of the PrestaShop Internationalization API http://i18n.prestashop-project.org/

The detailed documentation is located in the README of the project https://github.com/PrestaShopCorp/TranslationTool.

The TranslationTool repository is unfortunately not public for now.

### Here is a short summary of the documentation

Each PrestaShop major version has its dedicated catalogs stored in different folders of the repository.

The repository contains three branches for the three available environments:
- `master` branch for `production` environment
- `preproduction` branch for `preproduction`…
