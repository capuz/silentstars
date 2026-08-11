---
repo: "cuauhtemocbe/DataScience-Docker"
name: "DataScience-Docker"
description: "Este repositorio ofrece una configuración lista para usar de un entorno de desarrollo para Python 3.12.3 centrado en Ciencia de Datos. Utilizando Docker, simplifica la creación de un ambiente aislado y reproducible, eliminando las dificultades de la configuración manual."
readmeQualityOk: true
url: "https://github.com/cuauhtemocbe/DataScience-Docker"
language: "Makefile"
languages: ["Makefile", "Jupyter Notebook"]
languagePcts: [63, 20]
topics: ["data-science", "docker", "jupyter", "poetry"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-04-12T04:49:26Z"
lastCommitAt: "2026-08-11T04:48:03Z"
lastReleaseAt: "2024-06-14T02:49:09Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 61
maintainers: ["cuauhtemocbe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d43c70a965c61816a0a343415dcf34702cccf20f1d108441cef31ef9d7be51d2/cuauhtemocbe/DataScience-Docker"
---

# DataScience-Docker

Entorno reproducible de desarrollo para Ciencia de Datos con Python 3.13, Poetry, Docker y JupyterLab.

## Overview rapido

1. Instalar Docker (o Python 3.13 + Poetry + make si vas por la via local) -- ver [Instalacion de las herramientas](#instalacion-de-las-herramientas).
2. Clonar el repositorio.
3. `make build`
4. `make up-d`
5. `make notebook` -- abri [http://localhost:8888](http://localhost:8888).

Con eso ya tenes el entorno levantado y JupyterLab disponible para trabajar sobre `notebooks/`. Para mas detalle de cada paso, o para la via local sin Docker, ver las secciones siguientes.

## Requisitos previos

Elegi una de las dos formas de trabajar:

- **Con Docker (recomendado):** Docker y Docker Compose.
- **Local (sin Docker):** Python 3.13, [Poetry](https://python-poetry.org/docs/#installation) y `make`.

### Instalacion de las herramientas

**Docker**
- Linux: https://docs.docker.com/engine/install/
- Windows: https://docs.docker.com/desktop/setup/install/windows-install/

**Poetry**
- Linux: https://python-poetry.org/docs/#installing-with-the-official-installer
- Windows: https://python-poetry.org/docs/#installing-with-the-official-installer…
