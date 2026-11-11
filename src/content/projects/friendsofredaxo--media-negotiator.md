---
repo: "FriendsOfREDAXO/media_negotiator"
name: "media_negotiator"
description: "REDAXO-Addon, das dem Media Manager einen Effekt für HTTP Content Negotiation hinzufügt. Der Browser teilt dem Server über den Accept-Header mit, welche Bildformate er unterstützt – Media Negotiator liefert daraufhin automatisch das optimale Format aus."
readmeQualityOk: true
url: "https://github.com/FriendsOfREDAXO/media_negotiator"
language: "PHP"
languages: ["PHP"]
languagePcts: [90]
stars: 19
forks: 5
openIssues: 0
closedIssues: 25
watchers: 2
contributors: 71
recentReleases: 0
createdAt: "2023-02-05T11:43:17Z"
lastCommitAt: "2026-11-11T11:21:58Z"
lastReleaseAt: "2023-08-05T11:42:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["skerbis", "alexwenz", "danspringer"]
openGraphImageUrl: "https://opengraph.githubassets.com/0231e1b4e17e1e65a4d5e2e398df8f58293f095435d1779a8ee1fe70d5547d53/FriendsOfREDAXO/media_negotiator"
---

# Media Negotiator

REDAXO-Addon, das dem Media Manager einen Effekt für **HTTP Content Negotiation** hinzufügt. Der Browser teilt dem Server über den `Accept`-Header mit, welche Bildformate er unterstützt – Media Negotiator liefert daraufhin automatisch das optimale Format aus.

Jetzt mit **libvips**-Support im Negotiator: Wenn die PHP-Extension `vips` installiert ist, wird sie für die AVIF-/WebP-Konvertierung automatisch bevorzugt eingesetzt und ist dort der deutlich schnellere und speicherfreundlichere Weg. Der separate ICC-/sRGB-Fix bleibt bewusst bei Imagick.

---

## Inhaltsverzeichnis

- [Funktionsweise](#funktionsweise)
- [libvips – der schnelle Weg](#libvips--der-schnelle-weg)
- [ICC-Fix und sRGB-Workflow](#icc-fix-und-srgb-workflow)
- [Unterstützte Formate](#unterstützte-formate)
- [Voraussetzungen](#voraussetzungen)
- [GD-Codec-Support manuell aktivieren (Linux/Plesk)](#gd-codec-support-manuell-aktivieren-linuxplesk)
- [Vorlage für Hoster-Anfrage](#vorlage-für-hoster-anfrage)
- [Installation](#installation)
- [Einrichtung](#einrichtung)
- [Einstellungen](#einstellungen)
- [User-Agent-Fallback](#user-agent-fallback)
- [Setup-Seite](#setup-seite)
-…
