---
repo: "parime/glpi-iso27001-management"
name: "glpi-iso27001-management"
description: "Plateforme Open Source de gouvernance, risque et conformite (GRC/ISO 27001) integree a GLPI"
readmeQualityOk: true
url: "https://github.com/parime/glpi-iso27001-management"
language: "PHP"
languages: ["PHP"]
languagePcts: [86]
stars: 22
forks: 2
openIssues: 16
closedIssues: 75
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-24T04:48:29Z"
lastCommitAt: "2026-11-08T10:40:48Z"
lastReleaseAt: "2026-09-12T12:03:56Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 49
maintainers: ["parime", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/528ca8349df1db4093fb798e140f71bd2da052d3d275a78154b17217967fdf55/parime/glpi-iso27001-management"
---

# GLPI GRC Manager

> Plateforme de gouvernance, risque et conformité (GRC) et ISO 27001 générique, nativement
> intégrée à GLPI.

🇫🇷 **Français** | [🇬🇧 English](https://github.com/parime/glpi-iso27001-management/blob/HEAD/README.en.md)

## Le problème

GLPI sait exactement quels matériels, logiciels et systèmes composent votre organisation. Ce
qu'il ne sait pas faire nativement, c'est répondre aux questions d'un responsable sécurité ou
d'un auditeur ISO 27001 :

> **Quels sont les risques organisationnels (pas seulement techniques) de mon organisation, qui
> les a acceptés et pourquoi, et suis-je conforme à l'Annexe A ?**

**GLPI GRC Manager** couvre le risque organisationnel générique (clause 6.1.2/8.2 ISO 27001) :
humain, processus, physique, tiers/fournisseur, avec acceptation, traitement, Déclaration
d'Applicabilité (SoA), audits internes et actions correctives : et, depuis la v2.0, un véritable
objet ITIL "Incident de sécurité" (absorbé du plugin jumeau glpi-security-incidents, désormais
archivé), avec ses champs de classification ISO 27001 fusionnés dessus.

## Ce que le plugin apporte (voir ROADMAP.md)

**Risques**
- **Registre de risques génériques** : catégorie…
