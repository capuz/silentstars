---
repo: "marcosblg/rackscope"
name: "rackscope"
description: "Document your rack cabling in a single HTML file. Click any port to see exactly where it goes. No server, no dependencies, works offline."
readmeQualityOk: true
url: "https://github.com/marcosblg/rackscope"
homepage: "https://marcosblg.github.io/rackscope/"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
topics: ["cabling", "datacenter", "html", "infrastructure", "network-documentation", "no-dependencies", "offline", "patch-panel", "rack", "single-file"]
stars: 35
forks: 13
openIssues: 1
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-09-30T14:30:13Z"
lastCommitAt: "2026-11-27T16:29:02Z"
lastReleaseAt: "2026-11-27T16:29:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 44
maintainers: ["marcosblg"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1398253034/f0d0d747-f542-463f-be0b-dc12e57e6d72"
discussionCount: 0
---

***Español** · [English](https://github.com/marcosblg/rackscope/blob/HEAD/README.en.md)*

# RackScope

**Documenta el cableado de tus racks en un solo archivo HTML.** Sin servidor, sin instalación y sin que salga un dato de tu equipo.

Qué boca va a qué boca, con qué cable y con qué notas. Un único archivo `index.html` que se abre con doble clic en cualquier navegador.

Nació de un problema muy concreto: con varios paneles de parcheo y un montón de latiguillos mezclados, saber a dónde va un cable concreto obliga a seguirlo con la vista o a tirar de él. Aquí se resuelve con un clic.

Cada equipo se define con el número de bocas que tenga de verdad, de 1 a 96: paneles de 12, 16, 24, 32 o 48, switches con sus SFP, servidores con cuatro tarjetas o un grabador con una sola boca.

Tiene una herramienta hermana, **[SubnetScope](https://github.com/marcosblg/subnetscope)**, para planificar las IPs y VLANs de la red: le pasas los equipos que documentes aquí, les das IP allí y luego devuelves esas IPs a RackScope. [Pruébala](https://marcosblg.github.io/subnetscope/).
