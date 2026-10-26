---
repo: "sure-scale/doc-haus"
name: "doc-haus"
description: "The open-source legal AI agent. Documents stay on your disk and redlines arrive in Word as tracked changes. Fork of OpenCode."
readmeQualityOk: true
url: "https://github.com/sure-scale/doc-haus"
homepage: "https://doc.haus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai-agents", "docx", "legal-documents", "legal-tech", "llm", "opencode", "redlining", "self-hosted"]
stars: 80
forks: 22
openIssues: 0
closedIssues: 25
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T05:37:15Z"
lastCommitAt: "2026-10-26T09:16:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 39
maintainers: ["nicksolarsoul"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1260997792/ea34d14f-e19e-44ed-81fb-cdd6868c7fe6"
---

# doc.haus

A local legal-document workspace built on [OpenCode](https://github.com/anomalyco/opencode).
Upload documents into matters, ask source-grounded questions, and prepare drafts
and redlines for lawyer review. Generated work requires professional review.

## Start locally

Install Git, clone this repository, then run:

```sh
git clone https://github.com/sure-scale/doc-haus.git
cd doc-haus
./start.sh
```

The launcher checks for Bun 1.4.0 or newer and the document tools (Deno 2,
Python 3.10+, markitdown, Poppler, Tesseract, LibreOffice Writer and the Carlito
font). It lists anything missing or out of date and offers to install it; press
Enter to accept. macOS uses Homebrew (offered first if absent); Linux uses
apt-get, dnf or pacman. The launcher then installs frozen dependencies and opens
the web app at http://localhost:5174. It runs engine, ingest and web on separate
local ports.
A new installation needs no credentials to boot. Accept the launch notice,
choose a provider (detected options appear first), connect with its offered sign-in
method and detected defaults, then confirm primary/fast models in setup. Research and firm
or jurisdiction details are optional. The last…
