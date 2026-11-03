---
repo: "algoritmiaUS/caus-web"
name: "caus-web"
description: "Página web del Club de Algoritmia de la Universidad de Sevilla"
readmeQualityOk: true
url: "https://github.com/algoritmiaUS/caus-web"
homepage: "https://clubalgoritmiaus.es"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [65, 22]
topics: ["algorithms", "sevilla", "universidad-de-sevilla", "algorithm-challenges"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2024-08-22T06:27:49Z"
lastCommitAt: "2026-11-03T12:47:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 85
maintainers: ["Raquezin", "alejandro-pineda05", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfd6cb797b527b5aa2a4d7205747707384f16863d5d27a1acd9836b763ddee80/algoritmiaUS/caus-web"
---

# Página web del CAUS

Esta es la página web oficial del Club de Algoritmia de la Universidad de Sevilla. Es un sitio web estático generado mediante el framework [Hugo](https://gohugo.io). Todo el contenido está escrito en Markdown y se puede editar empleando cualquier editor y Git. Además, se tiene una configuración de `Github Actions` que reconstruye automáticamente el sitio una vez se realicen `push` a la rama `main`.

## Instalación

### Clonar el repositorio en local

`git clone --depth 1 git@github.com:algoritmiaUS/caus-web.git`

### Dependencias principales

- hugo (v0.168.0)
- bun (1.4.3)

#### Sistemas GNU/Linux

Si utilizas Linux/OSX/WSL2 es recomendable usar homebrew.

```Bash
brew install hugo
brew install bun

bun install
```

#### Sistemas Windows

1. [Descargar e instalar Hugo](https://github.com/gohugoio/hugo/releases/tag/v0.168.0)
2. [Descargar e instalar bun](https://bun.com/get)
3. Instalar dependencias

   ```Bash
   bun install
   ```

## Ejecución

### Para desarrollo local

```Bash
bun start
```

### Para generar el sitio HTML

El código se generará en el directorio ./public.

```bash
bun run build
```

## Contribuir

Lee…
