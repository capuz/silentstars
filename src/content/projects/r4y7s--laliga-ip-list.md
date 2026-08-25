---
repo: "r4y7s/laliga-ip-list"
name: "laliga-ip-list"
description: "LaLiga lista-blanca / LaLiga whitelist"
readmeQualityOk: true
url: "https://github.com/r4y7s/laliga-ip-list"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 20
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-08T07:16:40Z"
lastCommitAt: "2026-08-25T04:10:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 65
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e468dbd35868dc3831304f2c2d6539566da3cd653e88086646053ae226457373/r4y7s/laliga-ip-list"
---

# 🛡️ laliga-ip-list

## 🇪🇸 Descripción

Este repositorio mantiene una lista blanca de **IPs legítimas** afectadas por los
**bloqueos judiciales impuestos en España por LaLiga** como parte de su lucha
contra la piratería, según los datos públicos de
[hayahora.futbol](https://hayahora.futbol/).

### 📄 ¿Qué contiene?

**`laliga_ip_list.txt`** — histórico **acumulado** de IPs legítimas que han sido
bloqueadas de forma colateral en algún momento durante las retransmisiones de
partidos en España, afectando servicios como:

- RAE (Real Academia Española)
- Universidades y centros de investigación
- Medios de comunicación
- Sitios de patrocinadores y clubes

> ⚠️ Es un acumulado histórico, **no** la lista de lo que está bloqueado en este
> instante. Una IP permanece en el fichero aunque el bloqueo ya se haya
> levantado. Para el estado en tiempo real, consulta directamente
> [blocked-any.txt](https://hayahora.futbol/estado/blocked-any.txt) y los
> ficheros por operador en el origen.

**`laliga_status.json`** — indica si hay un bloqueo activo en curso:

```json
{
  "lastChangeAt": "2026-08-23T21:32:28.000Z",
  "lastChangeEpoch": 1787520748,
  "isBlocked": false,
  "state": "unblocked"…
