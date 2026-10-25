---
repo: "Simonz82/smart-home-cards"
name: "smart-home-cards"
description: "Card Lovelace personalizzate per Home Assistant — elettrodomestici, energia, rete (router/NAS/server/Proxmox), UPS — con guida per collegare le tue entità e per le notifiche personalizzate (Alexa e non solo)."
readmeQualityOk: true
url: "https://github.com/Simonz82/smart-home-cards"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dashboard", "hacs", "home-assistant", "lovelace", "lovelace-card", "custom-cards"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-17T12:47:48Z"
lastCommitAt: "2026-10-25T09:02:01Z"
lastReleaseAt: "2026-09-26T13:22:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 48
maintainers: ["Simonz82", "noreply"]
openGraphImageUrl: "https://opengraph.githubassets.com/4656969c6bd24c2b12aeccca97090abd486235eb0f98790a5e97f1a93a29a1cd/Simonz82/smart-home-cards"
---

# smart-home-cards

Card Lovelace personalizzate per Home Assistant, pensate per essere "belle e complete" senza impilare 4-5 card diverse (HACS) una dentro l'altra. Ogni card è un unico file JavaScript, gira su qualunque dashboard (anche sul cellulare), ha un popup Impostazioni e uno Statistiche integrati, e un **editor visuale nativo** (niente YAML obbligatorio: "Aggiungi card" → cerchi il nome → compili i campi).

**Repository unico**: le 14 card (elettrodomestici, energia, climatizzatore, FritzBox, rete Zigbee, server HA, NAS, Proxmox, UPS, raccolta differenziata, centro notifiche, annuncio testo Alexa, memo Alexa, webradio Alexa) sono tutte in **un solo file** (`smart-home-cards.js`) e documentate tutte qui sotto, nessun altro repository da installare a parte questo. *(In passato Energia Casa e Raccolta Differenziata avevano un repo a parte ciascuna — sono confluite qui per avere un unico posto da cui partire; quei due repo restano online per chi li aveva già installati, ma segnalano di passare a questo.)*

**Non serve programmare nulla**: si installa il file, si aggiunge la card alla dashboard, si scrivono i nomi delle proprie entità al posto di quelle di esempio. Tutte le…
