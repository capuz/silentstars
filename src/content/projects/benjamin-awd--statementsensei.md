---
repo: "benjamin-awd/StatementSensei"
name: "StatementSensei"
description: "PDF to CSV conversion for your bank statements"
readmeQualityOk: true
url: "https://github.com/benjamin-awd/StatementSensei"
homepage: "https://statementsensei.streamlit.app/"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["personal-finance", "streamlit", "python", "rust"]
stars: 203
forks: 48
openIssues: 0
closedIssues: 27
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-04-19T13:41:27Z"
lastCommitAt: "2026-10-29T05:49:59Z"
lastReleaseAt: "2024-07-16T14:54:23Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 45
maintainers: ["benjamin-awd", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ae0f25ed433fd83921331a59959bedb46c81087c575f482fe44da91a3afe373/benjamin-awd/StatementSensei"
---

Statement Sensei converts bank statement PDFs to CSVs using the [monopoly](https://github.com/benjamin-awd/monopoly) CLI library. The offline version of the app is available on the [releases](https://github.com/benjamin-awd/statementsensei/releases) page.

    🎉 Statement Sensei is now live! 🎉
    Try it out: <br>

# Usage

Statement Sensei can be run as an offline application on Windows, MacOS or Linux.

> ⚠️ Note: Windows does not work currently due to upstream build issues with `pdftotext`.

The offline application runs Streamlit locally, and uses a [WebView](https://tauri.app/v1/references/webview-versions/) window to view the browser frontend at http://localhost:8501.

Supported banks:
| Bank                                   | Credit Statement   | Debit Statement       |
|----------------------------------------|--------------------|-----------------------|
| American Express (Singapore Platinum, US) | ✅              | ❌                   |
| Bank of America                        | ✅                 | ✅                   |
| Bank of Montreal (BMO)                 | ✅                 | ✅                   |
| Canadian Imperial Bank of Commerce (CIBC) | ✅                 |…
