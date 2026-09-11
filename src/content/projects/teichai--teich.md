---
repo: "TeichAI/teich"
name: "teich"
description: "Generate, format and mask agent traces with ease."
readmeQualityOk: true
url: "https://github.com/TeichAI/teich"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 140
forks: 16
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2026-05-01T04:30:52Z"
lastCommitAt: "2026-09-11T08:14:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 31
maintainers: ["armand0e", "CompactAIOfficial", "Wangmerlyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7d543d1d47d0d50df0a8b76b36a024059f33c9f7716a0b4311a6a8ba01883c1/TeichAI/teich"
---

<h1>Teich</h1>
  <p><strong>Agent data infrastructure for generation, normalization, formatting, response masking, and training audits.</strong></p>
  <p>
  </p>
</div>

Teich turns raw agent sessions, chat datasets, local JSONL, Hugging Face datasets, and in-memory `datasets.Dataset` objects into auditable SFT data.

It handles the parts that usually break training runs:

- normalizing traces into OpenAI-style `messages` and `tools`
- preserving tool schemas, reasoning, metadata, and provenance
- rendering through your target tokenizer's chat template
- recording typed supervision spans before tokenization
- applying response-only labels after TRL / Unsloth trainer tokenization
- reporting dropped, oversized, trimmed, malformed, and fully masked rows

Use it as a trace generator, a dataset loader, a chat-template renderer, a masking layer, or the whole pipeline.

## Install

```bash
pip install teich
```

Or run it without installing:

```bash
uvx teich --help
```

Agent trace generation needs Docker and an API key for the configured provider. Preparing an existing local or Hugging Face dataset does not need Docker.

Prefer a browser workflow?

```bash
teich studio
```

See…
