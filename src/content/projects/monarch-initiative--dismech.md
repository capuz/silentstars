---
repo: "monarch-initiative/dismech"
name: "dismech"
description: "Disease Mechanisms KB"
url: "https://github.com/monarch-initiative/dismech"
homepage: "https://monarch-initiative.github.io/dismech"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
topics: ["kozahub-ingest", "agentic-ai", "disease-mechanisms", "linkml", "monarchinitiative", "obofoundry", "rare-disease"]
stars: 29
forks: 6
openIssues: 225
closedIssues: 709
watchers: 1
contributors: 69
recentReleases: 0
createdAt: "2025-12-04T16:58:11Z"
lastCommitAt: "2026-06-29T07:24:06Z"
lastReleaseAt: "2026-02-11T22:22:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 46
maintainers: ["dragon-ai-agent", "cmungall", "claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9609b62a2d1ff4d6bc98e573e18c29dba12f8df99453a7501fddf40510547b5/monarch-initiative/dismech"
discussionCount: 3
---

# Disorder Mechanisms Knowledge Base (dismech)

A curated knowledge base of disease pathophysiology, with structured evidence from the literature.

## Browse the Knowledge Base

**[View all disorders online](https://dismech.monarchinitiative.org/app/)** | **[QC Dashboard](https://dismech.monarchinitiative.org/dashboard/)** | **[Priority Dashboard](https://dismech.monarchinitiative.org/dashboard/priority.html)**

Each disorder page includes:
- Disease mechanisms and pathophysiology
- Clinical phenotypes with HPO term links
- Genetic factors and variants
- Treatment options with MAXO term links
- All claims backed by PubMed evidence

## How It Works

### Project Overview Slides

- [DisMech presentation slides from February 2026](https://docs.google.com/presentation/d/1XrbLle8gVQQcoT8IzpIfll4VnUl_68mQVTa6cIzN2vs/edit?usp=sharing)

### Source of Truth: YAML Files

The knowledge base is stored as structured YAML files in `kb/disorders/`. Each disorder has its own file (e.g., `Asthma.yaml`) containing:

```yaml
name: Asthma
pathophysiology:
  - name: Airway Inflammation
    description: Chronic inflammation of the airways
    biological_processes:
      - preferred_term: inflammatory…
