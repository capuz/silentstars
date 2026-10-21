---
repo: "byteowlz/nym"
name: "nym"
description: "Replace PII information with fake data and optionally restore e.g. from LLM responses"
readmeQualityOk: true
url: "https://github.com/byteowlz/nym"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [70, 27]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-20T07:34:06Z"
lastCommitAt: "2026-10-21T20:00:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 48
maintainers: ["WismutHansen", "TommyFalkowski"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b5b53e52d82017e7b8e6db92304ec1eb9d7ba70da845273fa6daa8dea668c55/byteowlz/nym"
---

# nym

Fast, reversible PII anonymization CLI. Detect and anonymize personally identifiable information in text files with optional reversibility.

## Features

- **Pattern-based detection**: 50+ built-in regex patterns for emails, phone numbers, credit cards, SSNs, API keys, and more
- **NER integration**: AI-powered named entity recognition for names, organizations, and addresses (optional feature)
- **Reversible anonymization**: Store key files to restore original data later
- **Multiple formats**: Plain text, structured JSON, and in-place document redaction for docx/xlsx/pptx/ODF and PDF (see [docs/document-redaction.md](https://github.com/byteowlz/nym/blob/HEAD/docs/document-redaction.md))
- **Streaming mode**: Process large files line-by-line with minimal memory usage
- **Flexible strategies**: Placeholder, masking, hashing, random, consistent, or fake replacements
- **Rulesets**: Predefined pattern groups for GDPR, HIPAA, programming, contact info, and more
- **Shell completions**: Generate completions for bash, zsh, fish, and more
- **XDG-compliant**: Respects standard config/data/state directories

## Installation

### From Source

```bash
# Default installation…
