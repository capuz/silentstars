---
repo: "Dvurechensky-Tools/LibreResxTranslate"
name: "LibreResxTranslate"
description: "Automated .resx localization tool for .NET projects using LibreTranslate."
readmeQualityOk: true
url: "https://github.com/Dvurechensky-Tools/LibreResxTranslate"
homepage: "https://dvurechensky.pro/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["automation", "csharp", "dotnet", "dvurechensky", "dvurechenskypro", "dvurechenskytools", "i18n", "l10n", "libretranslate", "localization"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-20T22:51:24Z"
lastCommitAt: "2026-08-26T04:15:46Z"
lastReleaseAt: "2026-04-21T00:22:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["Dvurechensky"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1216436786/a0fdf255-4560-40d6-b3cd-b658f3323186"
---

# LibreResxTranslate

### Automated `.resx` localization library for .NET projects using LibreTranslate.

</p>

</div>

  <strong>🌐 Language: </strong>
  
    🇷🇺 Russian
  </a>
  | 
    ✅ 🇺🇸 English (current)
  </span>
</div>

---

> [!TIP]
> Generate multilingual resource files for existing WinForms, WPF, and desktop applications without manually editing translations.

---

## Features

- Translate existing `.resx` files into multiple languages
- Supports folder-based batch translation
- Supports single file translation
- Works with self-hosted LibreTranslate servers
- Supports remote LibreTranslate endpoints
- JSON configuration based workflow
- Event-based logging
- Extensible translator architecture
- Suitable for CI/CD automation

---

## Use Cases

- Localizing legacy WinForms applications
- Translating WPF resource files
- Creating multilingual desktop apps
- Migrating old single-language projects
- Internal company software localization
- Offline translation pipelines

---

## Installation

```bash
dotnet add package LibreResxTranslate
```

---

## Quick Start

```csharp
using LibreResxTranslate.Components;
using LibreResxTranslate.Services.Settings;
using…
