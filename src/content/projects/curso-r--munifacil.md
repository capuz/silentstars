---
repo: "curso-r/munifacil"
name: "munifacil"
description: "Ajuda a recuperar códigos do IBGE dos municípios do Brasil"
url: "https://github.com/curso-r/munifacil"
homepage: "https://curso-r.github.io/munifacil/"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 13
forks: 3
openIssues: 8
closedIssues: 3
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2021-10-06T23:20:22Z"
lastCommitAt: "2026-06-26T23:42:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 33
maintainers: ["azeloc", "terezalacerda"]
openGraphImageUrl: "https://opengraph.githubassets.com/84011c45b7dfe042171568408ceef5d0070ea904f34a802a05e313ad07d83398/curso-r/munifacil"
---

# munifacil

O pacote [munifacil](https://curso-r.github.io/munifacil/) tem como
objetivo facilitar a união de colunas de nome de município com o
respectivo código do IBGE.

Isso é útil para posteriormente realizar procedimentos de `join` usando
como chave a coluna do código do IBGE (como o `dplyr::left_join()`).

## Instalação

Este pacote atualmente não está disponível no CRAN, podendo ser
instalado através do GitHub, utilizando o código abaixo:

``` r
install.packages("remotes")
remotes::install_github("curso-r/munifacil")
```

## Exemplo de uso

Neste exemplo, vamos usar uma base de dados que contém o nome de
municípios e a UF, e vamos incluir o código do IBGE.

### Preparando os dados

Primeiro, vamos carregar os pacotes necessários e importar a base de
dados que usaremos neste exemplo.

``` r
library(munifacil)
library(tidyverse)
```

``` r
arquivo <- system.file("extdata/exemplo.csv", package = "munifacil")
base_de_exemplo_bruta <- read_csv(arquivo)
```

Vamos dar uma olhada na base de dados que usaremos como exemplo. Nessa
base, temos o nome do município, a UF, e o código do IBGE que usaremos
para validar posteriormente:

``` r
glimpse(base_de_exemplo_bruta)
#> Rows: 6,786…
