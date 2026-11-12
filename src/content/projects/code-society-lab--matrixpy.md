---
repo: "Code-Society-Lab/matrixpy"
name: "matrixpy"
description: "A simple, developer-friendly library to create Matrix bots."
readmeQualityOk: true
url: "https://github.com/Code-Society-Lab/matrixpy"
homepage: "http://matrixpy.codesociety.xyz/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bot", "matrix", "matrix-bot", "matrix-org", "python"]
stars: 14
forks: 7
openIssues: 20
closedIssues: 13
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2025-05-24T22:14:01Z"
lastCommitAt: "2026-11-12T04:09:56Z"
lastReleaseAt: "2026-04-07T00:45:05Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 79
undervaluedScore: 49
maintainers: ["dependabot[bot]", "PenguinBoi12", "chrisdedman"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a781bebea090df0d69f61ed85af06a2a5c2d2a66b1b2265a09f345e8b453652/Code-Society-Lab/matrixpy"
postedAt: "2026-08-30T01:01:32.547Z"
---

[<img src="https://img.shields.io/badge/Get%20Started-black?style=for-the-badge" />](https://matrixpy.codesociety.xyz/guides/introduction/)
[<img src="https://img.shields.io/badge/Reference-555555?style=for-the-badge" />](https://matrixpy.codesociety.xyz/reference/bot/)

---

Matrix.py is a lightweight and intuitive Python library to build bots on the [Matrix protocol](https://matrix.org). It
provides a clean, decorator-based API similar to popular event-driven frameworks, allowing developers to focus on
behavior rather than boilerplate.

- **Minimal setup** — install and have a working bot running in minutes
- **Event-driven** — async/await API reacting to any Matrix room event
- **Command system** — decorator-based commands with automatic argument parsing
- **Extensions** — split your bot into modules as it grows

## Quickstart

**Requirements:** Python 3.10+

```bash
pip install matrix-python
```

Using a virtual environment is strongly recommended:

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install matrix-python
```

Create a `config.yml`:

```yaml
USERNAME: "@yourbot:matrix.org"
PASSWORD: "your_password"
```

```python
from…
