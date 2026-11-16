---
repo: "jazzautomations/jazz-cli"
name: "jazz-cli"
description: "jazz-cli: agente de código no terminal, em Go, para qualquer máquina. Segurança de fábrica, anti-trapaça, observabilidade, roteador de modelos grátis."
readmeQualityOk: true
url: "https://github.com/jazzautomations/jazz-cli"
homepage: "https://jazz-cli-liart.vercel.app"
language: "Go"
languages: ["Go"]
languagePcts: [76]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-21T13:05:26Z"
lastCommitAt: "2026-11-16T11:53:00Z"
lastReleaseAt: "2026-11-09T18:13:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["Jazz", "jazzautomations"]
openGraphImageUrl: "https://opengraph.githubassets.com/013fcefe1defa143a603be301384f80041c8dc63201245c30f6c5db27743e486/jazzautomations/jazz-cli"
---

# jazz-cli

```
     ██╗ █████╗ ███████╗███████╗
     ██║██╔══██╗╚══███╔╝╚══███╔╝
     ██║███████║  ███╔╝   ███╔╝
██   ██║██╔══██║ ███╔╝   ███╔╝
╚█████╔╝██║  ██║███████╗███████╗
 ╚════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
```

*[English](https://github.com/jazzautomations/jazz-cli/blob/HEAD/README.en.md)*

O jazz é um agente de código para o terminal, escrito em Go: um binário estático só (~11 MB, sem
dependências) que lê arquivos, roda comandos num shell persistente, edita código e verifica o que
fez, falando com o modelo que você escolher (Anthropic, OpenAI, ChatGPT pela sua conta, OpenRouter,
Groq, Gemini, Ollama/llama.cpp e mais uma dúzia de provedores grátis). Ele foi feito para funcionar
bem com modelos **grátis e fracos** e em máquina **velha**: roda num Mac M-series e também num
notebook Pentium M de 32 bits com 2 GB de RAM (um Dell Latitude, linux/386). Para compensar o
modelo fraco, o harness cobra o que um prompt só pediria: orçamento de passos, testes rodados de
verdade antes de dizer "pronto", guardas contra ação fingida e um sandbox do sistema por baixo de
tudo. É um projeto jovem (v0.7), feito por uma pessoa com agentes de IA; espere arestas. Bugs e
lacunas conhecidos estão em…
