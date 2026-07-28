---
repo: "pydantic/genai-prices"
name: "genai-prices"
description: "Calculate prices for calling LLM inference APIs."
readmeQualityOk: true
url: "https://github.com/pydantic/genai-prices"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [58, 41]
stars: 332
forks: 85
openIssues: 43
closedIssues: 39
watchers: 6
contributors: 72
recentReleases: 0
createdAt: "2025-06-21T12:54:40Z"
lastCommitAt: "2026-07-28T14:58:45Z"
lastReleaseAt: "2025-08-06T18:05:07Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 35
maintainers: ["dsfaccini", "alexmojaki", "ddanielcruzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/98bdc365cb715568dee848e8058223a6ebafebf0fe896325469a44cbbba327b8/pydantic/genai-prices"
---

<h1>GenAI Prices</h1>
</div>
</div>
<br/>
  Calculate prices for calling LLM inference APIs.
</div>
<br/>

## Features

- Advanced logic for matching on model and provider IDs to maximise the chance of using the correct model
- Support for historic prices and prices changes, e.g. we have the prices for o3 before and after its price changed
- Support for variable daily prices, e.g. we support calculating deepseek prices even with off-peak pricing
- tiered pricing support for Gemini models where you pay a separate price for very large contexts
- support for [identifying price discrepancies](https://github.com/pydantic/genai-prices/blob/HEAD/prices/README.md) from other sources
- Python package, CLI
- JavaScript/TypeScript package, CLI
- TODO: API and web UI

### Providers

The following providers are currently supported:

[comment]: <> (providers-start)

- [Anthropic](https://github.com/pydantic/genai-prices/blob/HEAD/prices/providers/anthropic.yml) - 23 models
- [Avian](https://github.com/pydantic/genai-prices/blob/HEAD/prices/providers/avian.yml) - 4 models
- [AWS Bedrock](https://github.com/pydantic/genai-prices/blob/HEAD/prices/providers/aws.yml) - 81 models
- [Microsoft…
