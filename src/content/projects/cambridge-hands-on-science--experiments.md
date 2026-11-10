---
repo: "Cambridge-Hands-On-Science/Experiments"
name: "Experiments"
description: "Risk Assessments and Experiment Explanations for CHaOS Experiments"
readmeQualityOk: true
url: "https://github.com/Cambridge-Hands-On-Science/Experiments"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 11
forks: 16
openIssues: 5
closedIssues: 0
watchers: 2
contributors: 75
recentReleases: 0
createdAt: "2022-12-14T11:31:55Z"
lastCommitAt: "2026-11-10T14:51:12Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 70
maintainers: ["daringd5", "ja-gold", "sarahclaireng-blip"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8d69d97b4a269a2af5443469b3365d00eda9dfe94dd5b4f91db84b66b3168e1/Cambridge-Hands-On-Science/Experiments"
---

# Experiments

This is the new system for storing the experiments and risk assessments. Risk assessments are written in markdown (specifcally commonmark) - https://commonmark.org

They can be edited on any text editor.

## Conversion Script

The conversion script is a python file that converts the experiments to a printable pdf.

The Pandoc program needs to be installed; please follow the instructions on this website: https://pandoc.org/installing.html (Pandoc v. 3.8.3 is confirmed to be working; later versions may not be!)

Git must also be installed, instructions for which can be found at https://git-scm.com/install (Windows v 2.52.0 x64 is definitely working)

It also requries Wkhtmltopdf. On MacOS, this can be installed using `brew install homebrew/cask/wkhtmltopdf`.
Installation instructions for other operating systems can be found at https://wkhtmltopdf.org (Wkhtmltopdf v. 0.12.6 is confirmed to be working; later versions may not be!)

The following Python libraries are also needed: `PyPDF2`, `commonmark`, `tqdm`, `pdfkit`. These can be installed with the following command:

```
pip install PyPDF2 pandoc tqdm pdfkit
```

### Troubleshooting

If you are having errors relating…
