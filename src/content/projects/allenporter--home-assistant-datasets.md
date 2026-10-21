---
repo: "allenporter/home-assistant-datasets"
name: "home-assistant-datasets"
description: "This package is a collection of datasets for evaluating AI Models in the context of Home Assistant. "
readmeQualityOk: true
url: "https://github.com/allenporter/home-assistant-datasets"
homepage: "https://allenporter.github.io/home-assistant-datasets"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [67, 32]
topics: ["home-assistant", "llm"]
stars: 259
forks: 20
openIssues: 8
closedIssues: 23
watchers: 9
contributors: 13
recentReleases: 0
createdAt: "2024-01-24T04:58:57Z"
lastCommitAt: "2026-10-21T06:05:27Z"
lastReleaseAt: "2025-12-23T02:20:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 39
maintainers: ["renovate[bot]", "allenporter", "DylanGerloski"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5e6b53c54952fd6c4ae86e4438e7bbcfc95b6bf42ad793010be6acae2698961/allenporter/home-assistant-datasets"
discussionCount: 2
---

# Home Assistant Datasets

This package is a collection of datasets for evaluating AI Models in the context
of Home Assistant. The overall approach is:

- Synthetic Data Generation: Create synthetic datasets that represent a home
- Synthetic Home: Load the data into Home Assistant and exercise different device states (e.g. light on, off)
- Collect Model Outputs: Run the datasets with Home Assistant Conversation agents with different models (e.g. OpenAI, Google, local models) to generate model outputs (e.g. tool calls, responses)
- Evaluate Results: Evaluate the model outsputs with the groundtruth (e.g. is the action correct), or humans can annotate the results (e.g. great, ok, bad)
- Visualize Results: Track improvements over time with different models, prompts, tools, RAG, etc.

```mermaid
graph LR;
    A[Synthetic Data Generation]
    B[Dataset]
    C[Collect Model Outputs]
    D[Synthetic Home]
    F[Evaluate Results]
    G[Visualize Results]

    H[OpenAI]
    I[Conversation Agent]

    J[Local LM]
    K[Conversation Agent]

    L[Google]
    M[Conversation Agent]

    A --> B
    B --> D
    D --> C
    C --> F
    F --> G

    H --> I
    J --> K
    L --> M

    I --> C…
