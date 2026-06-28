---
repo: "teamdigitale/padigitale2026-opendata"
name: "padigitale2026-opendata"
description: "opendata PNRR - PA digitale 2026"
url: "https://github.com/teamdigitale/padigitale2026-opendata"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [49, 47]
topics: ["opendata", "pnrr", "data", "pnrr-data"]
stars: 27
forks: 9
openIssues: 4
closedIssues: 3
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2022-02-18T14:44:36Z"
lastCommitAt: "2026-06-28T02:01:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 56
maintainers: ["padigitale2026-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c188a61bcbb609d55ff6b1df25e5e720faf75e1e02e5d6c768a5474579cec6c/teamdigitale/padigitale2026-opendata"
---

<h1 align="center">PA digitale 2026 - Open Data</h1>

</div>

<br />
    
    </a>
    
    </a>
    </a>
</div>

# Descrizione

Questa repository contiene i dati pubblici estratti da [PA digitale 2026](https://padigitale2026.gov.it/).

Nello specifico, i seguenti dati sono aggiornati quotidianamente alle 2:00 (UTC): 
- Candidature a cui è stato assegnato un finanziamento dal relativo decreto
- Avvisi su PA digitale 2026

# Contenuto

- [Struttura Repository](#struttura-repository)
- [Formato Dati](#formato-dati)
- [Aggiornamento Dati](#aggiornamento-dati)
- [Changelog](#changelog)
- [Licenza](#licenza)

# Struttura repository
La repository è strutturata in principalmente in 6 cartelle, secondo lo schema seguente:

```
padigitale2026-opendata/
├── assets
│   └── ld
│   └──── MappingRMLOrgLocation.ttl
│   └──── RMLMappingProjectCall.ttl
├── AUTHORS
├── CHANGELOG.md
├── data
|   ├── KPI
│   ├── avvisi.csv
│   ├── avvisi.json
│   ├── candidature_altrienti_finanziate.csv
│   ├── candidature_altrienti_finanziate.json
│   ├── candidature_comuni_finanziate.csv
│   ├── candidature_comuni_finanziate.json
│   ├── candidature_scuole_finanziate.csv
│   ├── candidature_scuole_finanziate.json
│…
