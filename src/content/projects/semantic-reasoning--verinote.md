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
languagePcts: [99]
stars: 11
forks: 4
openIssues: 5
closedIssues: 370
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-23T06:26:15Z"
lastCommitAt: "2026-10-31T07:45:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["justinjoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbdd4366c867f0ddfb8073801cb0a476a8eb6c1803d8f965d16548a8254fc8fd/semantic-reasoning/verinote"
---

# verinote

A local web application that registers source texts, approves a dictionary of entities, aliases, and relations first, then has a human review the wiki and relations extracted with that dictionary, and finally queries **only the knowledge approved through the actual Wirelog**. It preserves document versions, exact citations, approval history, and query snapshots. Here, xAI means eXplainable AI.

## License

The source code of this project is distributed under the Mozilla Public License 2.0 (SPDX: `MPL-2.0`). For the full text, see [LICENSE](https://github.com/semantic-reasoning/verinote/blob/HEAD/LICENSE).

## Running

Python 3.11 or later is required. To use the local CLI, you need that CLI installed and logged in. To use the OpenRouter API, you need a server key file and a model ID.

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python -m verinote
```

Open <http://localhost:8765> in your browser. To change the data location and port, use `python -m verinote --data-dir /path/to/storage --port 8766`. The `verinote` command works the same way. The program binds only to `127.0.0.1`.

### Server-only secret configuration file

Server…
