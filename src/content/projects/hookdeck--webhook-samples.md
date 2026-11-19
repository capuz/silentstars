---
repo: "hookdeck/webhook-samples"
name: "webhook-samples"
description: "A collection of example webhooks from popular platforms"
readmeQualityOk: true
url: "https://github.com/hookdeck/webhook-samples"
homepage: "https://samples.hookdeck.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["webhook-events", "webhooks", "webhooks-json", "shopify-webhooks", "stripe-webhooks", "bigcommerce-webhooks"]
stars: 41
forks: 24
openIssues: 3
closedIssues: 1
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2023-02-08T18:52:28Z"
lastCommitAt: "2026-11-19T11:56:18Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 83
undervaluedScore: 55
maintainers: ["garethx", "claude", "leggetter"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9e870139c320741b3c5d1ed8db03d48850e3d2eb7224e2bbf05cb322d55a040/hookdeck/webhook-samples"
---

# Webhook Samples

Example webhook requests (headers and body, one file per event topic) for the
providers in [`providers/`](https://github.com/hookdeck/webhook-samples/blob/HEAD/providers). The data is published to
https://samples.hookdeck.com and powers the mock webhooks in
[Hookdeck Inspect](https://inspect.hookdeck.com).

Most samples are transcribed from each provider's published documentation;
a smaller set are captured from real deliveries. Every version records which,
in its `provenance` (see [Doc-sourced samples](#doc-sourced-samples)), and
`providers.json` publishes it so consumers can tell them apart.

## Contributing

### Adding a new provider

1. Add a new directory for the provider in `./providers`

2. Create a `index.json` file in that provider directory. The index.json file needs a `label` which is the publicly recognizable name for the provider, and a set of configs. The `latest_version` represents the most recent version for that provider, if the provider doesn't offer versioning then input `latest`. The `topic_identifier` is optional and represent either a header or body key to extract the topic from the request.
