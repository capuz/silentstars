---
repo: "pcanossa/BR-Phishing-Feed"
name: "BR-Phishing-Feed"
description: "Repositório de listagem de possivelmente domínios malignos, registrados, com escopo de vítimas do Brasil, sendo filtradas diretamente dos certificados registrados em tempo real pelo CertStream."
readmeQualityOk: true
url: "https://github.com/pcanossa/BR-Phishing-Feed"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-03T15:56:37Z"
lastCommitAt: "2026-08-22T04:06:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 32
maintainers: ["pcanossa"]
openGraphImageUrl: "https://opengraph.githubassets.com/627c44c2a0056e6e9e997626d7ec3d271849ae365941302b862d37d16f731b9d/pcanossa/BR-Phishing-Feed"
---

# Br-Phishing-Feed: Feed de Detecções de Domínios Phishing no Brasil

O **Br-Phishing-Feed** é uma infraestrutura de coleta rápida e resiliente projetada para operações de Cyber Threat Intelligence (CTI). Ele fornece um feed de domínios potencialmente malignos, obtidos diretamente pelo CertStream que consome o feed global de Transparência de Certificados (CT Logs) em tempo real, com filtro de falsos positivos realizados por IA Ollama.

Este repositório disponibiliza **exclusivamente o Feed obtido e filtrado**. O objetivo é fornecer uma "mangueira de dados" limpa, sem latência e sem limites de taxa (rate limiting), servindo como base para pipelines de segurança, detecção de phishing e proteção de marcas.

Os domínios filtrados podem ser encontrados na pasta `phishing-domain-feed` e o log de base para filtro, obtido pelo CertStream na pasta `Logs`, sendo armazenados os log já analisados pelo filtro na pasta `logs_filtrados`.

---

## 🏗️ Arquitetura Criada (O Funil de CTI)

Para lidar com a avalanche de dados globais (centenas de certificados por segundo) sem esgotar recursos, recomendamos o consumo deste Feed através de uma arquitetura de múltiplas camadas, culminando em uma…
