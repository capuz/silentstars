---
repo: "nicolettas-muggelbude/RechnungsFee"
name: "RechnungsFee"
description: "Open-Source Buchhaltungssoftware für Freiberufler, Selbstständige und Vereine. Offline-first, datenschutzfreundlich, GoBD-konform. Made for Germany 🇩🇪"
url: "https://github.com/nicolettas-muggelbude/RechnungsFee"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [55, 41]
topics: ["accounting", "buchhaltung", "datev", "elster", "freelance", "germany", "invoicing", "offline-first", "open-source", "privacy"]
stars: 50
forks: 6
openIssues: 36
closedIssues: 172
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-03T19:41:57Z"
lastCommitAt: "2026-07-04T19:19:44Z"
lastReleaseAt: "2026-03-02T21:37:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 39
maintainers: ["nettnikl"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cbcf98fe8167d1c8e6c5729888449e203ab9fd098e1a54317a19793c17ede55/nicolettas-muggelbude/RechnungsFee"
discussionCount: 5
---

<br/>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/readme-title-dark.svg"/>
  </picture>

  **Open-Source Buchhaltungssoftware für Freiberufler, Selbstständige und Kleinunternehmer**

</div>

---

## ⬇️ Download

| Betriebssystem | Download | Hinweis |
|---|---|---|
| **Windows 10/11** | [→ Releases-Seite](https://github.com/nicolettas-muggelbude/RechnungsFee/releases/latest) → `…x64-setup.exe` | NSIS-Installer, einfach ausführen |
| **Linux (x86_64)** | [→ Releases-Seite](https://github.com/nicolettas-muggelbude/RechnungsFee/releases/latest) → `…amd64.AppImage` | Ausführbar machen + starten |

```bash
# Linux: AppImage ausführbar machen und Desktop-Integration einrichten
chmod +x RechnungsFee_*.AppImage
bash install-linux.sh RechnungsFee_*.AppImage
```

`install-linux.sh` prüft automatisch alle Abhängigkeiten (webkit2gtk, libfuse2) und legt einen Desktop-Starter an. Kein `curl` oder `wget` nötig.

> **Ubuntu 22.04–26.04**: Falls das AppImage ohne `install-linux.sh` nicht startet, fehlt `libfuse2`:
> ```bash
> sudo apt install libfuse2t64   # Ubuntu 22.04 / 24.04
> sudo apt install libfuse2to64  # Ubuntu 26.04
> ```

Installierte Apps aktualisieren…
