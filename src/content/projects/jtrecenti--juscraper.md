---
repo: "jtrecenti/juscraper"
name: "juscraper"
description: "Raspador (sempre incompleto) de tribunais do sistema judiciário."
readmeQualityOk: true
url: "https://github.com/jtrecenti/juscraper"
homepage: "https://jtrecenti.github.io/juscraper/"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
topics: ["jurimetria", "scraper", "cdad"]
stars: 52
forks: 20
openIssues: 35
closedIssues: 146
watchers: 5
contributors: 7
recentReleases: 1
createdAt: "2025-01-16T11:34:21Z"
lastCommitAt: "2026-10-03T22:04:04Z"
lastReleaseAt: "2026-09-15T21:20:19Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 59
maintainers: ["bdcdo", "jtrecenti"]
openGraphImageUrl: "https://opengraph.githubassets.com/2690fa0ed0673935968488f7b3e2890f91535b0657a9d0b42e20bf8963cc4913/jtrecenti/juscraper"
---

# juscraper

Raspador de tribunais e outros sistemas relacionados ao poder judiciário brasileiro.

## 📦 Instalação

### Via PyPI (Recomendado)

```bash
pip install juscraper
```

### Com uv

```bash
uv add juscraper
```

### Versão de Desenvolvimento

Para instalar a versão mais recente do repositório:

```bash
pip install git+https://github.com/jtrecenti/juscraper.git
```

## 🚀 Exemplo Rápido

```python
import juscraper as jus

# Criar scraper para o TJSP
tjsp = jus.scraper('tjsp')

# Buscar jurisprudência
dados = tjsp.cjpg('golpe do pix', paginas=range(1, 4))
print(f"Encontrados {len(dados)} resultados")

# Visualizar primeiros resultados
dados.head()
```

## 📊 Implementações

### Tribunais Disponíveis

| Tribunal | Funcionalidades Disponíveis       |
|----------|-----------------------------------|
| TJSP     | cpopg, cposg, cjsg, cjpg          |
| TJES     | cjsg, cjpg                        |
| TJTO     | cjsg, cjpg                        |
| TJAP     | cjsg ⚠️                           |
| TJBA     | cjsg                              |
| TJCE     | cjsg                              |
| TJDFT    | cjsg                              |
| TJMT     | cjsg…
