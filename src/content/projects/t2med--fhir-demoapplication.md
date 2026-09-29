---
repo: "T2med/fhir-demoapplication"
name: "fhir-demoapplication"
description: "Demo application and documentation for T2med FHIR API"
readmeQualityOk: true
url: "https://github.com/T2med/fhir-demoapplication"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-04-08T10:27:33Z"
lastCommitAt: "2026-09-29T08:10:58Z"
lastReleaseAt: "2026-06-25T10:51:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 22
maintainers: ["oh-t2med", "michelt2med", "gerritc"]
openGraphImageUrl: "https://opengraph.githubassets.com/20d39d413089eb18250754269116897d83a46677377ec8e166910208986903a9/T2med/fhir-demoapplication"
---

# T2med FHIR-API-Demo

Diese Demoapplikation ist eine Desktop-Referenz für die Anbindung eines Drittanbieters an die externe T2med-FHIR-API. Sie unterstützt zwei Startpfade: den Deep-Link-basierten Start aus dem T2med-Client heraus sowie einen eigenständigen OAuth-Device-Flow-Start. Nach der Authentifizierung stellt sie typische FHIR-Lese- und Schreiboperationen gegen einen T2med-FHIR-Endpunkt bereit.

Die README beschreibt den aktuellen Implementierungsstand der Demo. Fachliche Integrationsdetails und HTTP-Beispiele stehen zusätzlich im [Integrationsleitfaden-FHIR-API.md](https://github.com/T2med/fhir-demoapplication/blob/HEAD/Integrationsleitfaden-FHIR-API.md).

## Was die Demo aktuell kann

### Deep-Link-Verarbeitung

Die App startet über ein Custom-URL-Scheme und wertet diese Query-Parameter aus:

- `kontextId`
- `fhirBasisUrl`
- `oAuthToken`

Die URL wird in der GUI angezeigt. Protokoll, Host, Pfad und alle Query-Parameter werden sichtbar gemacht. Wenn `fhirBasisUrl` und `oAuthToken` vorhanden sind, initialisiert die App automatisch einen `FhirService`. Aus `fhirBasisUrl` wird außerdem automatisch die Auth-Server-URL für den Device-Flow-Dialog abgeleitet (gleicher Host, Port…
