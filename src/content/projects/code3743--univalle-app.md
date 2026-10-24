---
repo: "code3743/univalle_app"
name: "univalle_app"
description: "Univalle App is a mobile application for students of the Universidad del Valle (Colombia) that offers essential services of the SIRA system, allowing access to various functions from a single place."
readmeQualityOk: true
url: "https://github.com/code3743/univalle_app"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["app", "univalle", "webscraping", "sira", "mobile-app", "universidad-del-valle", "colombia", "students", "univalle-app"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-02T16:19:53Z"
lastCommitAt: "2026-10-24T00:15:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 63
maintainers: ["code3743"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d754d746f6b14d52bf819010c20e0bb99d7fb504a04ae61c624518b0a3eb4ac/code3743/univalle_app"
---

App móvil no oficial para estudiantes de la Universidad del Valle (Colombia): centraliza notas, horario, tabulado, currículo, carné digital, restaurante universitario y biblioteca en una sola interfaz.

> [!IMPORTANT]
> Proyecto en fase de desarrollo activo. Ver [Funcionalidades](#funcionalidades) para el estado real de cada módulo.

## Descripción

Univalle App nació con el objetivo de centralizar en un solo lugar los distintos servicios que la Universidad del Valle expone hoy en sistemas separados (SIRA, U-Planner, el restaurante universitario, la biblioteca OPAC, evaluación docente, la Agencia de Noticias), cada uno con su propia sesión y su propia forma de pedir la información. La app se conecta a cada uno de esos sistemas y traduce lo que obtiene a un lenguaje de dominio propio, para que la persona usuaria tenga una sola experiencia consistente sin lidiar con SIRA ni con sus formularios.

## Arquitectura

El proyecto sigue **MVVM + Clean Architecture**, organizado *feature-first*: cada funcionalidad vive en `lib/features/<feature>/` con sus propias capas `domain`, `data` y `presentation`; lo compartido entre features vive en `lib/core`. El estado y la inyección de…
