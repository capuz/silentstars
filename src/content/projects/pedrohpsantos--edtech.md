---
repo: "pedrohpsantos/EdTech"
name: "EdTech"
description: "Plataforma web de gestão acadêmica e armazenamento em nuvem para laboratórios universitários e projetos de iniciação científica."
readmeQualityOk: true
url: "https://github.com/pedrohpsantos/EdTech"
homepage: "https://edtech-storage-501117.web.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [65]
topics: ["academic-management", "ci-cd", "docker", "docs-as-code", "e2e-testing", "flyway", "github-actions", "google-cloud-storage", "java", "jwt"]
stars: 7
forks: 0
openIssues: 7
closedIssues: 63
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-25T20:28:31Z"
lastCommitAt: "2026-07-12T06:11:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["pedrohpsantos"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f78c5bc6e6069dfccfbd74c636b4facfc9da206b59503f4f81e35a1d4568586/pedrohpsantos/EdTech"
---

</div>

# EdTech — Repositório Científico e Ecossistema Acadêmico

**EdTech** é uma plataforma de software para digitalizar, armazenar e auditar publicações científicas, relatórios de pesquisa e datasets de laboratórios acadêmicos. O sistema foi projetado com foco em rastreabilidade, controle de acesso baseado em perfis e integridade de dados.

> **📖 Portal Oficial da Documentação:** [pedrohpsantos.github.io/EdTech](https://pedrohpsantos.github.io/EdTech/)

---

## Visão Geral

O EdTech centraliza o ciclo de vida de documentos acadêmicos em um único repositório auditável, eliminando o uso de soluções ad hoc (e-mail, pen drives, planilhas compartilhadas) para gestão de arquivos científicos.

- **Rastreabilidade:** Cada operação relevante é registrada em trilha de auditoria imutável.
- **Governança de Acesso:** Controles de autorização por perfil — Pesquisador, Orientador e Auditor.
- **Segurança:** Autenticação via JWT (Bearer Token), armazenado no Local Storage, anulando riscos de CSRF, com comunicação exclusivamente via HTTPS em produção.

---

## Estrutura do Monorepo

| Módulo | Responsabilidade | Stack |
| :--- | :--- | :--- |
| **[🎨 Frontend…
