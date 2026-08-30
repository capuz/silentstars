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
lastCommitAt: "2026-08-04T03:37:36Z"
lastReleaseAt: "2026-04-07T00:45:05Z"
status: "quiet"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 71
undervaluedScore: 70
maintainers: ["PenguinBoi12", "dependabot[bot]", "chrisdedman"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cbc650857dc90ff2ecd5b26e682a7f03f1b41760dad914abc8a74e3457c0432/Code-Society-Lab/matrixpy"
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
