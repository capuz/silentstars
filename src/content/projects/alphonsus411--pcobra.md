---
repo: "Alphonsus411/pCobra"
name: "pCobra"
description: "Lenguaje de Programación en español creado con Python y librerías holográficas"
readmeQualityOk: true
url: "https://github.com/Alphonsus411/pCobra"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 10
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-08T17:21:01Z"
lastCommitAt: "2026-09-18T08:28:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 76
maintainers: ["Alphonsus411"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/869667402/d398500f-a3a6-40d2-9e97-7ecddfb5fcdb"
discussionCount: 1
postedAt: "2026-09-14T09:16:57.024Z"
---

# Proyecto Cobra

## Qué es pCobra

Versión 10.1.2

- La caché incremental de AST y tokens se consolidó en **SQLitePlus** con script de migración y variables `SQLITE_DB_KEY`/`COBRA_DB_PATH` para definir la base de datos.
- `corelibs.asincrono` incorpora `grupo_tareas` y `reintentar_async`, reexportados en la biblioteca estándar para coordinar corrutinas y reintentos con *backoff*.
- `corelibs.texto`, `corelibs.numero` y `standard_library.datos` añaden validadores `es_*`, helpers como `prefijo_comun`/`sufijo_comun`, funciones `interpolar`/`envolver_modular` y lectura/escritura de Parquet y Feather.
- `corelibs.sistema.ejecutar` mantiene la ejecución en modo seguro con listas blancas obligatorias tanto en Python como en los *bindings* nativos.
- `cobra hub cache listar|limpiar|validar` permite inspeccionar, depurar y verificar la caché local de paquetes `.co` de CobraHub sin romper los comandos actuales de publicación, búsqueda e instalación.

[English version available here](https://github.com/Alphonsus411/pCobra/blob/HEAD/docs/README.en.md)

## Cobra como interfaz única

Cobra consolida su experiencia de uso en una **única interfaz pública**: la CLI `cobra`. Todas las tareas de…
