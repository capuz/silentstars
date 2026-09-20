---
repo: "seoes/proval"
name: "proval"
description: "Self-Hosted LLM Code Review Agent for GitLab, Forgejo and GitHub. Local LLM support"
readmeQualityOk: true
url: "https://github.com/seoes/proval"
homepage: "https://proval.app"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [66, 34]
topics: ["agent", "code-review", "llm", "self-hosted", "version-control"]
stars: 85
forks: 0
openIssues: 6
closedIssues: 10
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-05T05:29:51Z"
lastCommitAt: "2026-09-20T08:46:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 32
maintainers: ["seoes"]
openGraphImageUrl: "https://opengraph.githubassets.com/e75cc73534e11224bf809ec918b177ea5606b7e90916039cd4435b5ed106a44b/seoes/proval"
---

# Proval

A Self-hosted LLM code review agent. Connect it to your Git host, bring your own model, and let it review pull requests and issues on your own infrastructure.

[Website](https://proval.app) | [Demo](https://demo.proval.app) | [Docs](https://proval.app/docs)

https://github.com/user-attachments/assets/5afc0bba-d89e-43cd-b4d7-d5e7b022eeb1

- **Easy deploy**
  Proval takes 3 min, less than 10 lines to deploy to your server

- **Bring your own LLM (Even local models)**
  Proval works with OpenAI-compatible Chat Completions APIs, so you can use OpenAI, local model APIs like Ollama and llama.cpp, or any internal LLM gateway. Anthropic and Gemini support are planned as first-class integrations.

- **GitLab, Forgejo, and GitHub support**
  Proval supports GitLab, Forgejo, and GitHub. Gitea and Codeberg are also a natural fit through Forgejo-compatible APIs.

- **Run it on your own network**
  Use Proval inside an internal network, homelab, or privacy-focused environment without depending on an external review SaaS.

## Features

- **Pull request review**
  When a pull request gets a meaningful push (or a draft becomes ready), Proval reads the diff, groups changed files into…
