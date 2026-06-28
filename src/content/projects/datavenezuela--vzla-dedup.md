---
repo: "DataVenezuela/VZLA_DEDUP"
name: "VZLA_DEDUP"
description: "Limpiemos los registros en esta crisis"
url: "https://github.com/DataVenezuela/VZLA_DEDUP"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 8
openIssues: 15
closedIssues: 13
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2026-06-26T21:51:43Z"
lastCommitAt: "2026-06-28T03:09:27Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 50
maintainers: ["mathiasaiva", "vzladude", "nsalloums"]
openGraphImageUrl: "https://opengraph.githubassets.com/d95008fbe124acd30d792a73657d781d6eb1f0a531d1e0465d18bde82577cbeb/DataVenezuela/VZLA_DEDUP"
---

# VZLA_DEDUP
Limpiemos los registros en esta crisis.

Tras los terremotos del 24 de junio, miles de familias buscan a sus seres queridos en decenas de páginas distintas: grupos de WhatsApp, publicaciones de hospitales, redes sociales. La misma persona aparece en cuatro lugares con cuatro nombres distintos. Nadie sabe cuál es la información correcta ni cuál está desactualizada.

Este proyecto recolecta esos registros dispersos, los unifica en una sola base de datos limpia, deduplicada y consultable, y los expone via API para que cualquier dev pueda construir encima.

→ [Documentación](https://docs.google.com/document/d/1RzTa_bjouoZrjoS-fo1ojqUxjaTYy_w5Fg6Ad3fX8TU/edit?usp=sharing) · [Contribuir](./CONTRIBUTING.MD) · [Reportar un problema](../../issues)

---

## El problema

Miles de personas suben datos relevantes a distintas páginas, pero están todos descentralizados. Esto genera duplicados, datos obsoletos y registros sin verificar. Cualquier dev que quiera construir algo útil hoy no tiene una fuente limpia de donde partir.

El reto es de criterio:

- ¿Cómo sabemos que dos registros son la misma persona?
- ¿Cómo descartamos datos sin cometer un error que cueste una vida?
- ¿Cómo…
