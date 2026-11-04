---
repo: "navikt/eessi-pensjon-journalforing"
name: "eessi-pensjon-journalforing"
description: "Journalfører SED når kafka meldinger konsumeres"
readmeQualityOk: true
url: "https://github.com/navikt/eessi-pensjon-journalforing"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["eessi-pensjon", "kotlin"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 0
watchers: 5
contributors: 24
recentReleases: 0
createdAt: "2019-04-01T07:57:55Z"
lastCommitAt: "2026-11-04T13:05:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 67
maintainers: ["dskarpas", "MariamPervez"]
openGraphImageUrl: "https://opengraph.githubassets.com/159869e26646c166b345ab4b21f7019cc61cbd57f89d770251404b9ed51ec38b/navikt/eessi-pensjon-journalforing"
---

# eessi-pensjon-journalforing
Journalfører utgående SED når kafka meldinger konsumeres

# Utvikling

## Komme i gang

Dette prosjektet bygger med avhengigheter som ligger i Github Package Registry.
Du må opprette et Personal Access Token (PAT) og enten legge det i
`~/.gradle/gradle.properties`:
```properties
gpr.key=<ditt-token-her>
```
eller sette miljøvariabelen `GITHUB_TOKEN` til verdien av tokenet ditt.

Deretter kan du bygge med:
```
./gradlew build
```

## Oppdatere avhengigheter

Det er viktig at man holder avhengigheter oppdatert for å unngå sikkerhetshull.

Se mer dokumentasjon rundt dette her: [Oppgradere avhengigheter](https://github.com/navikt/eessi-pensjon/blob/master/docs/dev/oppgradere_avhengigheter.md).

## SonarQube m/JaCoCo

Prosjektet er satt opp med støtte for å kunne kjøre SonarQube, med JaCoCo for å fange test coverage, men du trenger å ha en SonarQube-instans (lokal?) å kjøre dataene inn i - [les mer her](https://github.com/navikt/eessi-pensjon/blob/master/docs/dev/sonarqube.md).

## Kritiske avhengigheter
## HØY KRITIKALITET

#### Google Secret Manager
- servicebruker: srveessi-pensjon-j

#### Kafka
- eessibasis.sedsendt-v1 (READ)
- eessibasis.sedmottatt-v1…
