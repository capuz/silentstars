---
repo: "tjnel/certgraveyard_yara"
name: "certgraveyard_yara"
description: "Automated YARA rule generation from the Cert Central compromised certificate database."
readmeQualityOk: true
url: "https://github.com/tjnel/certgraveyard_yara"
language: "YARA"
languages: ["YARA"]
languagePcts: [98]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-15T01:46:35Z"
lastCommitAt: "2026-07-18T05:46:02Z"
lastReleaseAt: "2025-12-25T05:08:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["github-actions[bot]", "claude", "tjnel"]
openGraphImageUrl: "https://opengraph.githubassets.com/49a57830789f72cdab8755f19e2510fa70a27007b2506bf8dd969924137b6171/tjnel/certgraveyard_yara"
---

</p>

# CertGraveyard YARA Rules Generator

Automated YARA rule generation from the [CertGraveyard](https://certgraveyard.org) compromised certificate database.

## Features

- 🔄 **Daily Updates**: Automatically checks CertGraveyard for new compromised certificates
- 📝 **YARA Rule Generation**: Creates individual YARA rules for each certificate
- ✅ **Validation**: Validates all rules with yara-python
- 📦 **Release Management**: Automated releases with combined ruleset and ZIP archive
- 📋 **Changelog**: Maintains detailed changelog of all additions and modifications

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/tjnel/certgraveyard_yara.git
cd certgraveyard_yara

# Install with UV
uv sync --all-extras
```

### Usage

```bash
# Download latest CSV from CertGraveyard
cert-graveyard-yara download

# Check if CSV has changed
cert-graveyard-yara check-changed

# Generate YARA rules
cert-graveyard-yara generate

# Validate rules
cert-graveyard-yara validate --engine yara

# Create combined file and ZIP archive
cert-graveyard-yara combine
cert-graveyard-yara package

# Run full pipeline
cert-graveyard-yara run --all
```

### Using the…
