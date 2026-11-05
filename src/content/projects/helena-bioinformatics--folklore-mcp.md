---
repo: "helena-bioinformatics/folklore-mcp"
name: "folklore-mcp"
description: "Automated ACMG/AMP germline variant classification and assessment via MCP, with gene profiles and scientific literature."
readmeQualityOk: true
url: "https://github.com/helena-bioinformatics/folklore-mcp"
homepage: "https://folklore.helena.bio/integrations/mcp"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 1
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-12T00:09:12Z"
lastCommitAt: "2026-11-04T11:27:52Z"
lastReleaseAt: "2026-10-30T19:59:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 56
maintainers: ["vladimir-mitev"]
openGraphImageUrl: "https://opengraph.githubassets.com/714ab4c005d71d833b8d1665d693c70f1ac9421b1edecceea033c67d74ab106d/helena-bioinformatics/folklore-mcp"
promoted: true
---

# Folklore Clinical Variant Interpretation MCP

Version 1.7.0

Folklore MCP classifies and assesses germline variants under ACMG/AMP. It returns
canonical identity, automated classification, reported criteria, annotation,
source evidence and provenance. Gene profiles, ClinGen gene-disease assertions
and linked biomedical literature complete the scientific workflow.

## Classify a variant

Connect your MCP client to:

```text
https://api.helena.bio/folklore/v1/mcp
```

Access is anonymous. Call `classify_germline_variant`:

```json
{"name":"classify_germline_variant","arguments":{"assembly":"GRCh38","query":"NM_007294.4:c.68_69del"}}
```

Input: one public GRCh38 nuclear germline SNV or simple indel smaller than 50 bp.
Accepted notation includes supported HGVS, SPDI, rsID and genomic coordinates.
Preserve transcript versions and reference alleles.

A resolved identity with successful interpretation includes automated ACMG/AMP
classification, reported criteria, annotations, source evidence and provenance.
Submitted ClinVar assertions retain their own source attribution alongside the
Folklore classification. A VUS is a classification outcome.

| Status | Next step |
| --- | --- |
|…
