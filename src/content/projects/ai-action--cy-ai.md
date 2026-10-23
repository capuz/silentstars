---
repo: "ai-action/cy-ai"
name: "cy-ai"
description: "🧪 Cypress AI command that generates E2E tests with LLM (Large Language Model)."
readmeQualityOk: true
url: "https://github.com/ai-action/cy-ai"
homepage: "https://ai-action.github.io/cy-ai/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "cypress", "e2e", "end-to-end-testing", "llm", "test", "test-automation", "testing", "large-language-model", "large-language-models"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-30T04:00:38Z"
lastCommitAt: "2026-10-23T08:47:06Z"
lastReleaseAt: "2026-07-16T18:38:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 78
undervaluedScore: 60
maintainers: ["dependabot[bot]", "remarkablemark", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fe9fa29afebcffac4a5f978300cc9c509cece3f85836473b57fe920fd383922/ai-action/cy-ai"
fundingLinks: ["GITHUB:https://github.com/remarkablemark", "PATREON:https://patreon.com/remarkablemark", "KO_FI:https://ko-fi.com/remarkablemark", "LIBERAPAY:https://liberapay.com/remarkablemark", "BUY_ME_A_COFFEE:https://buymeacoffee.com/remarkablemark", "THANKS_DEV:https://thanks.dev/u/gh/remarkablemark", "CUSTOM:https://b.remarkabl.org/teespring"]
discussionCount: 0
---

# Cypress AI

🧪 Cypress AI command that generates E2E tests with LLM (Large Language Model):

```js
cy.ai(string)
```

Read the [wiki](https://github.com/ai-action/cy-ai/wiki).

## Prerequisites

- [Cypress](https://docs.cypress.io/app/get-started/install-cypress)
- [Ollama](https://ollama.com/download)

## Install

[NPM](https://www.npmjs.com/package/cy-ai):

```sh
npm install cy-ai --save-dev
```

[Yarn](https://yarnpkg.com/package/cy-ai):

```sh
yarn add cy-ai --dev
```

## Usage

If you're using TypeScript, import the command using ES2015 syntax:

```sh
echo "import 'cy-ai'" >> cypress/support/commands.ts
```

Or if you're using JavaScript, use CommonJS require:

```sh
echo "require('cy-ai')" >> cypress/support/commands.js
```

Start the Ollama server:

```sh
ollama serve
```

Download the [LLM](https://ollama.com/library/qwen2.5-coder):

```sh
ollama pull qwen2.5-coder
```

Write a test:

```js
// cypress/e2e/example.cy.js
it('visits example.com', () => {
  cy.visit('/')
  cy.ai('see heading "Example Domain"')
})
```

> [!TIP]
> If you're running Chrome, disable `chromeWebSecurity` so the LLM requests aren't blocked by CORS:
>
> ```js
> // cypress.config.js
> import {…
