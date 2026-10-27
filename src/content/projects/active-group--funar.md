---
repo: "active-group/funar"
name: "funar"
description: "Materials for FUNAR trainings - previous trainings are archived as branches"
readmeQualityOk: true
url: "https://github.com/active-group/funar"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [86]
topics: ["architecture", "functional-programming", "haskell", "racket"]
stars: 12
forks: 6
openIssues: 0
closedIssues: 1
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2019-06-28T20:38:38Z"
lastCommitAt: "2026-10-27T09:18:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 67
maintainers: ["mikesperber"]
openGraphImageUrl: "https://opengraph.githubassets.com/70b815bd874847e3ee163626545ba58bc731504827f2db338a70d94ed54f4b0f/active-group/funar"
---

# Technische Vorbereitung

Bei der Schulung ist es sinnvoll, den Code nachzuvollziehen bzw. eigenen zu
schreiben.

## Vorkurs

Für den Vorkurs bitte Racket installieren, mindestens Version 8.7:

https://download.racket-lang.org/

## Hauptteil

Für den Hauptteil brauchen wir eine Installation von
[Haskell](https://www.haskell.org/) und eine IDE, in der Regel [Visual Studio
Code](https://code.visualstudio.com/).

Es gibt grundsätzlich zwei Installationsmethoden für Haskell, GHCup und Nix.

### GHCup

- [GHCup](https://www.haskell.org/ghcup/install/) installieren.

- Dabei alle "Default"-Optionen auswählen.
- Bei "Do you want to install haskell-language-server (HLS)?" "Yes" antworten.

Danach diese Befehle hier absetzen:

```
ghcup install ghc 9.10.3
ghcup set ghc 9.10.3
```

Um die Installation zu testen:

- Mit `code .` VSCode in diesem Ordner öffnen
- Die Extension `haskell.haskell` installieren
- In der Datei `haskell-code/Intro.hs` das `module` verunstalten (z. B. einen
  Buchstaben beim `where` entfernen)
- Nach etwas Wartezeit (in der unteren Leiste sollte "Processing" oder ähnlich
  zu sehen sein) sollte etwas rot unterschlängelt werden
, bitte VSCode starten, die Extension…
