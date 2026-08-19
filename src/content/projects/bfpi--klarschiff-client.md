---
repo: "bfpi/klarschiff-client"
name: "klarschiff-client"
description: "Klarschiff mobile client with additional functions supporting the field service"
readmeQualityOk: true
url: "https://github.com/bfpi/klarschiff-client"
language: "HTML"
languages: ["HTML", "Ruby"]
languagePcts: [59, 26]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2015-02-25T10:33:05Z"
lastCommitAt: "2026-08-19T04:09:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 59
maintainers: ["dependabot[bot]", "ro3t", "nbennke"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fa35b175de30ee225a0118b203454773436f9f56c71145e08469b0f970606d7/bfpi/klarschiff-client"
---

# Klarschiff-Client
Klarschiff client with integrated mobile and desktop layout. Additional functions supporting the field service can be opted in by configuration.

## Installation
### Voraussetzungen
- RVM / oder andere Rubyversionsverwaltung
  - Installation von RVM (kann übersprungen werden wenn diese bereits erfolgt ist):
  
    ```bash
    \curl -L https://get.rvm.io | sudo bash -s stable --ruby
    ```
  - Aktualisierung von RVM (falls es bereits systemweit installiert ist)
  
    ```bash
    rvmsudo rvm get stable
    ```
- Passenger-Apache-Modul installieren:
  Hierzu am besten der offiziellen Anleitung unter https://www.phusionpassenger.com/documentation/Users%20guide%20Apache.html#installation folgen.
  
### Vorbereitungen
- checkout / clone des Repositories in ein lokales Verzeichnis. Z.B.:

  ```bash
  sudo mkdir -p /var/rails
  cd /var/rails
  git clone https://github.com/bfpi/klarschiff-client.git
  ```
- Intitialisierung und Datenholung der Git-Submodule in dem gerade angelegtem Verzeichnis

  ```bash
  git submodule init
  git submodule update
  ```
- Installation der notwendigen Rubyversion und des Gemsets
  - Bei Wechsel in das Repository-Verzeichnis hilft RVM…
