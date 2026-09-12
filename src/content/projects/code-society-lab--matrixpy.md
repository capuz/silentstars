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
closedIssues: 12
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2025-05-24T22:14:01Z"
lastCommitAt: "2026-09-09T21:00:53Z"
lastReleaseAt: "2026-04-07T00:45:05Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 79
undervaluedScore: 70
maintainers: ["PenguinBoi12", "dependabot[bot]", "chrisdedman"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cd09cee686104f7756d5b080f4ed1f5710971c23531e23b38e3ac1e9bbf091f/Code-Society-Lab/matrixpy"
promoted: true
postedAt: "2026-08-30T01:01:32.547Z"
---

<em>A simple, developer-friendly library to create powerful <a href="https://matrix.org">Matrix</a> bots.</em>
</div>

</div>

[<img src="https://img.shields.io/badge/Get%20Started-black?style=for-the-badge" />](https://matrixpy.codesociety.xyz/guides/introduction/)
[<img src="https://img.shields.io/badge/Reference-555555?style=for-the-badge" />](https://matrixpy.codesociety.xyz/reference/bot/)

</div>

</div>

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
source venv/bin/activate  # Windows: venv\Scripts\activate…
