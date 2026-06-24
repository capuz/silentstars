---
repo: "wmakeouthill/github_stats_wmakeouthill"
name: "github_stats_wmakeouthill"
description: "Dashboard Cósmico: Painel e API Serverless para visualizar métricas, contribuições e linguagens mais usadas no GitHub."
url: "https://github.com/wmakeouthill/github_stats_wmakeouthill"
homepage: "https://github-stats-wmakeouthill.vercel.app/"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [70, 28]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-21T21:36:27Z"
lastCommitAt: "2026-06-24T00:24:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["wmakeouthill"]
openGraphImageUrl: "https://opengraph.githubassets.com/51e8ca297e8a5aa515578d3c3a2e033e45c6058438c7bfc6ce8330a366f101a0/wmakeouthill/github_stats_wmakeouthill"
---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this…
