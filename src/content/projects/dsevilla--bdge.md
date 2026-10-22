---
repo: "dsevilla/bdge"
name: "bdge"
description: "Recursos para la asignatura BDGE del Máster de Big Data de la UM/USC."
readmeQualityOk: true
url: "https://github.com/dsevilla/bdge"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [96]
topics: ["bigdata", "python", "ipython-notebook", "mongodb", "couchdb", "hbase", "neo4j", "sql", "mysql", "jupyter-notebook"]
stars: 11
forks: 6
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2016-09-05T09:25:33Z"
lastCommitAt: "2026-10-22T08:52:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 77
maintainers: ["dsevilla"]
openGraphImageUrl: "https://opengraph.githubassets.com/599c16fa28f3d7a4f48b5aeaee96b87b3c8b4720396d6543c942ec6830edb4c4/dsevilla/bdge"
---

# bdge
Recursos para la asignatura BDGE del Máster de Big Data de la UM/USC,
curso 2026-2027.

## Cómo trabajar con los boletines

Cada boletín se puede abrir de dos formas:

- **En Google Colab**, sin instalar nada: el enlace está en la sección
  «Boletines prácticos» de la portada de las transparencias, o directamente en
  `https://colab.research.google.com/github/dsevilla/bdge/blob/26-27/<ruta>`
  (p. ej. `sql/sesion1.ipynb`).
- **En local**, con el `docker-compose.yml` del directorio del boletín, que
  arranca Jupyter y las bases de datos que necesita. Hace falta
  [Docker](https://docs.docker.com/get-docker/) o
  [Podman](https://podman.io/docs/installation) con `compose`:

  ```bash
  cd sql
  docker compose up
  ```

  Jupyter queda en <http://localhost:8888> (token `bdge`).

## Visual Studio Code

Al abrir este directorio en VS Code, el editor propone instalar las
extensiones recomendadas (Python, Jupyter y Container Tools). Si se descarta el
aviso, están en *Extensions: Show Recommended Extensions*.

VS Code no instala Docker ni Podman: hay que instalarlos aparte. Para usar los
cuadernos desde VS Code con el Jupyter del contenedor, elegir *Select Kernel* →
*Existing…
