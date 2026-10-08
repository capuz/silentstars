---
repo: "MiguelBatistaSilva/Automatic"
name: "Automatic"
description: "Uma ferramenta de automação para o Assyst/TJCE. Sem muitos cliques, sem Ctrl C e Ctrl V. "
readmeQualityOk: true
url: "https://github.com/MiguelBatistaSilva/Automatic"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["pandas", "playwright", "python", "reflex", "scraper"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-21T23:33:11Z"
lastCommitAt: "2026-10-08T10:52:24Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 39
maintainers: ["MiguelBatistaSilva"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bb17714ed74a2b93c3b5aaa87ad136893037bc788692144b81d131b6339acf2/MiguelBatistaSilva/Automatic"
---

# Automatic

Ferramenta de automação para o Assyst/TJCE.

Reúne módulos, como: desmembramento de chamados, início de atendimentos
agendados, análise de SLA e gerenciamento das Bases de Conhecimento.

A interface roda no navegador (Reflex) e a automação usa o Playwright, que dirige
o Chrome já instalado na máquina.

---

## Requisitos

- Windows 10/11 64-bit;
- Python 3.11 (o instalador acompanha o executável em `Instalar_Python`);
- Google Chrome instalado.

---

## Instalação

1. Copie a pasta do Automatic para seu computador (ex: `C:\Automatic`);
2. Instale o Python 3.11 (executável em `Instalar_Python\python-3.11.9-amd64.exe`);
   - **Marque a opção "Add Python to PATH"** durante a instalação.
3. Clique duas vezes em `iniciar_automatic.bat`.

Na **primeira execução**, o `iniciar_automatic.bat`:

- verifica se o Python 3.11 está disponível;
- cria o ambiente virtual (`.venv`);
- instala as dependências (usa os pacotes de `pacotes_automacao` quando existem e
  baixa o que faltar);
- sobe o servidor e abre a interface no navegador.

Nas execuções seguintes ele pula a instalação e vai direto para o app.

> **A janela preta é o aplicativo.** Enquanto você estiver usando o Automatic…
