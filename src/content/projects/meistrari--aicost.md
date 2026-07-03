---
repo: "meistrari/aicost"
name: "aicost"
description: "Calculate how much a LLM completion costs"
url: "https://github.com/meistrari/aicost"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 16
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2024-02-15T14:33:25Z"
lastCommitAt: "2026-07-03T12:39:26Z"
lastReleaseAt: "2026-02-12T12:47:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 62
maintainers: ["henrycunh"]
openGraphImageUrl: "https://opengraph.githubassets.com/99e4eefd7ffda5f064e8963141e018a881ef54643e579d694f86c8dd33aa50ee/meistrari/aicost"
---

# aicost
A simple, efficient library for calculating AI model costs across various providers. It's completely type safe.

## Installation
```bash
npm install aicost
```

## Usage
### Calculate Cost
Calculate the cost of using an AI model based on input and output amounts.

```ts
import { calculateCost } from 'aicost'

const cost = calculateCost({
    provider: 'openai',
    model: 'gpt-3.5-turbo',
    inputAmount: 6032,
    outputAmount: 1238
})

console.log(cost)
```
```ts
{
  inputCost: 0.18096,
  outputCost: 0.07428,
  inputCostUnit: "token",
  outputCostUnit: "token",
}
```

### Get information for a model
Retrieve detailed information about a specific AI model.

```ts
import { getModelInfo } from 'aicost'

const modelInfo = getModelInfo({
    provider: 'openai',
    model: 'gpt-4'
})

console.log(modelInfo)
```

### List supported providers
List all available AI model providers.

```ts
import { getProviderList } from 'aicost'

const providers = getProviderList()

console.log(providers.includes('anthropic'))
```

### List supported models from a provider
Get a list of all models offered by a specific provider.

```ts
import { getModelList } from 'aicost'

const models =…
