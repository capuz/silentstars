---
repo: "semantic-reasoning/verinote"
name: "verinote"
description: "Honest knowledge base: an LLM extracts source-backed facts, the wirelog logic engine verifies them. Local web app."
originalDescription: "Honest knowledge base: an LLM extracts source-backed facts, the wirelog logic engine verifies them. Local web app."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/semantic-reasoning/verinote"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 5
openIssues: 13
closedIssues: 390
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-23T06:26:15Z"
lastCommitAt: "2026-11-07T13:55:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 54
maintainers: ["justinjoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7df37480a5cf45c4a5f3b374a180ed31e0c5cbb077a4109a28c1e26968b0bdfe/semantic-reasoning/verinote"
---

# verinote

A local web application that registers source texts, approves the entity, alias, and relation dictionary first, has humans review the wiki and relations extracted with that dictionary, and then queries only the approved knowledge through the actual Wirelog. It preserves document versions, exact citations, approval history, and query snapshots. Here, xAI means eXplainable AI.

## License

The source code of this project is distributed under the Mozilla Public License 2.0 (SPDX: `MPL-2.0`). For the full text, see [LICENSE](https://github.com/semantic-reasoning/verinote/blob/HEAD/LICENSE).

## Running

Python 3.11 or higher is required. To use a local CLI, that CLI must be installed and logged in. To use the OpenRouter API, a server key file and a model ID are required.

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python -m verinote
```

Open <http://localhost:8765> in your browser. To change the data location and port, use `python -m verinote --data-dir /path/to/storage --port 8766`. The `verinote` command is equivalent. The program binds only to `127.0.0.1`.

### Server-only secret configuration file

Server credentials are stored in…
