---
repo: "ivanseidel/tournamenter-obr"
name: "tournamenter-obr"
description: "Extensão para o Tournamenter que permite pontuar pelo tablet em competições da OBR"
readmeQualityOk: true
url: "https://github.com/ivanseidel/tournamenter-obr"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [65, 30]
stars: 7
forks: 9
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2016-07-27T03:16:30Z"
lastCommitAt: "2026-11-24T01:57:36Z"
lastReleaseAt: "2026-05-17T21:20:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 74
undervaluedScore: 59
maintainers: ["OtacilioN"]
openGraphImageUrl: "https://opengraph.githubassets.com/08abc979278704147db384359ac9539522d41e662d6830e21fd9bbd41d962260/ivanseidel/tournamenter-obr"
---

# tournamenter-obr
Extensão para o Tournamenter que permite pontuar pelo tablet em competições da OBR

## Instalação desta Extensão
* Baixe o [Tournamenter App](https://github.com/ivanseidel/TournamenterApp) e instale
* Instale este módulo no gerenciador de extensões do Tournamenter, incluindo a seguinte URL: `https://github.com/ivanseidel/tournamenter-obr`
* Para cada instância de servidor que desejar utilizar, habilite o módulo

## Nacional 2026.2

A versão do pacote é `2026.2.7`. O pontuador de resgate nacional 2026 usa como
base as regras e a interface da nacional 2025.2, incluindo o tempo de 480 segundos.

### Classificação de Resgate (N1 e N2)

Crie **uma tabela por nível**. As novas tabelas já vêm com a fórmula
`resgate2026nacional` e as **10 colunas** abaixo. A fórmula também aceita o nome
`resgate2026obr`. Tabelas com o cabeçalho padrão anterior continuam usando a
ordem original para calcular e lançar as notas. Para outras modalidades, escolha
a fórmula e as colunas correspondentes na configuração da tabela.

```
Pôster, Relatório, Pontos R1, Tempo R1, Pontos R2, Tempo R2, Pontos R3, Tempo R3, Desafio Técnico, Pontos da Final
```
