---
repo: "romainmarcoux/malicious-domains"
name: "malicious-domains"
description: "Aggregation of lists of malicious domains (phishing) that can be integrated into FortiGate firewalls and other products."
readmeQualityOk: true
url: "https://github.com/romainmarcoux/malicious-domains"
homepage: "https://www.linkedin.com/in/romainmarcoux/"
language: "DIGITAL Command Language"
languages: ["DIGITAL Command Language"]
languagePcts: [100]
topics: ["blocklist", "blocklists", "domains-blacklist", "domains-list", "fortigate", "fortinet", "malicious-domains", "phishing"]
stars: 113
forks: 17
openIssues: 0
closedIssues: 2
watchers: 8
contributors: 1
recentReleases: 0
createdAt: "2024-01-20T21:56:16Z"
lastCommitAt: "2026-08-27T14:28:24Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 28
maintainers: ["romainmarcoux"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a97ba84b91911917f7c4713db4fe71fc337fbebf17551ea86252d8e4b2d924e/romainmarcoux/malicious-domains"
---

Update of the following table: 2026-08-27 16:28 CEST

| File | Number of malicious domains |
| ---- | ---------------- |
| full-domains-\* | 198 572 |

<details>
  <summary><b>🇫🇷 Introduction</b></summary>
  <p>

- Agrégation de listes de domaines malveillants, utilisés pour du phishing, scindée en fichiers de 131 072 entrées au maximum pour être intégrées dans des pare-feux (Fortinet **FortiGate** et autres éditeurs) ou serveurs DNS.
- Pour éviter les faux positifs, les domaines du top 1M (Cisco Umbrella et CloudFlare) des sites Web les plus visités ont été retirés.
- Domaines ordonnés en fonction du nombre de sources dans lesquelles ils apparaissent (Domaines apparaissant dans le plus de sources sont donc dans le début du fichier full-domain-aa.txt).
- Mise à jour toutes les **heures** ⏱️
- Implémentation dans les pare-feux FortiGate : [lien](https://docs.fortinet.com/document/fortigate/7.0.13/administration-guide/195303/domain-name-threat-feed)
   * Menu "Security Fabric → External Connectors → Create New → Threat Feeds → Domain Name"
   * Copier une URL dans la partie "Links" ci-dessous
   * Menu "Security Profiles → DNS Filter"
   * Dans un profil, activer "FortiGuard…
