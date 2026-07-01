---
repo: "netz39/www.netz39.de"
name: "www.netz39.de"
description: "Webseite des Netz39 e.V."
url: "https://github.com/netz39/www.netz39.de"
homepage: "https://www.netz39.de/"
language: "Liquid"
languages: ["Liquid", "SCSS"]
languagePcts: [44, 33]
stars: 5
forks: 6
openIssues: 12
closedIssues: 53
watchers: 10
contributors: 21
recentReleases: 0
createdAt: "2023-10-15T23:36:55Z"
lastCommitAt: "2026-07-01T07:04:23Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 83
maintainers: ["0Ry5", "Netz39Bot", "LeSpocky"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f44375ba28e309215dc31cec56cc94fa2ac3f93d3770f91b4a287c7a1cf485c/netz39/www.netz39.de"
---

# [www.netz39.de](https://www.netz39.de)

## Warum Jekyll?

Unsere Webseite setzt aus folgenden Gründen auf Jekyll, einen statischen Website-Generator:

- **Einfache Handhabung:** Jekyll ermöglicht es, Inhalte in Markdown zu schreiben, was die Erstellung und Aktualisierung von Webseiten vereinfacht.

- **Schnelle Ladezeiten:** Da Jekyll statische Seiten generiert, werden die Webseiten schnell geladen.

- **GitHub Pages Integration:** Jekyll wird von GitHub Pages unterstützt, was bedeutet, dass wir unsere Website direkt aus dem GitHub-Repository hosten können.

## Neue Blogeinträge erstellen:

1. **Blogeintrag erstellen:**

   - Erstelle eine neue Markdown-Datei im `_posts`-Verzeichnis unter das aktuelle Jahr. Benenne die Datei nach dem Format `YYYY-MM-DD-titel-des-eintrags.md`
   - **Front Matter:** Füge am Anfang der Datei das YAML-Front Matter hinzu. Das Front Matter enthält Metadaten für den Blogeintrag, wie z.B. den Layout-Typ, den Titel, den Autor und das Veröffentlichungsdatum. Hier ein Beispiel für das Front Matter:

     ```yaml
     ---
     layout: post
     title: "Titel des Blogeintrags"
     author: MaxMustermann
     date: 2023-10-20
     feature-img:…
