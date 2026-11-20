---
repo: "fossasia/eventyay-hubspot"
name: "eventyay-hubspot"
description: "hubspot integration for eventyay"
readmeQualityOk: true
url: "https://github.com/fossasia/eventyay-hubspot"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 381
forks: 6
openIssues: 3
closedIssues: 32
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2020-11-19T23:47:26Z"
lastCommitAt: "2026-11-20T11:59:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 21
maintainers: ["ViRUS-0-0", "dependabot[bot]", "ArnavBallinCode"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fc2c9e17aea3a9821a5bafcf8220c53f9462a3bdab357920091b0e7692c2e72/fossasia/eventyay-hubspot"
---

# Eventyay Hubspot Integration Plugin

This is a plugin for [Eventyay](https://github.com/fossasia/eventyay) that enables seamless integration with Hubspot.

## Development Setup

1. Set up a working [Eventyay Development Setup](https://github.com/fossasia/eventyay?tab=readme-ov-file#getting-started).
2. Clone this repository:
   ```bash
   git clone https://github.com/fossasia/eventyay-hubspot.git
   cd eventyay-hubspot
   ```
3. Activate the [virtual environment](https://github.com/fossasia/eventyay?tab=readme-ov-file#getting-started) you use for Eventyay development.
4. Install the plugin in editable mode to register it with the Eventyay plugin registry:
   ```bash
   uv pip install -e .
   ```
5. Compile the translations:
   ```bash
   make
   ```
6. Restart your local Eventyay server. You can now enable and configure the Hubspot plugin from the **Plugins** tab in your event settings.

## Code Style & Linting

This repository enforces code style guidelines via CI. You can run checks locally by installing the development dependencies:

```bash
pip install pre-commit ruff
pre-commit install

pre-commit run --all-files
```

## License

Copyright 2024 FOSSASIA
