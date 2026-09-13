---
repo: "jandira-tech/neurotic_docx_bench"
name: "neurotic_docx_bench"
description: "Six benchmarks to neurotically measure DOCX conversion and redlining against Microsoft Word"
readmeQualityOk: true
url: "https://github.com/jandira-tech/neurotic_docx_bench"
language: "Python"
languages: ["Python", "AppleScript"]
languagePcts: [38, 35]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-10T22:15:19Z"
lastCommitAt: "2026-09-13T08:31:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["opencode-agent[bot]", "arthrod"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0d9fcc7c2945f9076e43c053184d8b0791af4ee8c91fb23a40577a526b7691d/jandira-tech/neurotic_docx_bench"
---

# neurotic-docx-bench

Pixel scores of DOCX tools against Microsoft Word oracles.

| | |
| --- | --- |
| **Scores** | 0–100 per document |
| **Redline oracle** | Word tracked-change markup, rendered by LibreOffice 26.2.4.2 |
| **DOCX→PDF oracle** | SHA-pinned Word-export PDFs in `pdf_accepted_word` and `pdf_redlines_randomized` |
| **Second scorer** | `docxide_metrics` — docxide-pdf's own Jaccard / SSIM / text-boundary suite, same fixtures |
| **Trend log** | `results/bench.jsonl` |
| **Results** | [`RESULTS.md`](https://github.com/jandira-tech/neurotic_docx_bench/blob/HEAD/RESULTS.md) (medium) · [`RESULTS_DETAILED.md`](https://github.com/jandira-tech/neurotic_docx_bench/blob/HEAD/RESULTS_DETAILED.md) (detailed) · [`docs/RESULTS.md`](https://github.com/jandira-tech/neurotic_docx_bench/blob/HEAD/docs/RESULTS.md) (published report) |
| **Visual report** | `runs/<run>/report.html` |
| **Speed** | [`docs/SPEED.md`](https://github.com/jandira-tech/neurotic_docx_bench/blob/HEAD/docs/SPEED.md) |

Jubarte families list best and worst pin per fidelity table. Other vendors list each published pin. Compare rows only within one table and only when `ITT Docs` matches.

```bash
python3…
